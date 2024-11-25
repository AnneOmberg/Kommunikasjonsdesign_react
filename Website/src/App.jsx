import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './style/main.scss'
import 'leaflet/dist/leaflet.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Drinking from './components/Art.1/Drinking'
import Toll from './components/Art.2/Toll'
import RandomArticle from './components/ADHD/RandomArticle'
import Late from './components/ADHD/Late'
import Early from './components/ADHD/Early'
import Rob from './components/Art.3/Rob'
import Rob2 from './components/Art.3/Rob2'

function App() {
  const [drinkTitle, setDrinkTitle] = useState("")
  const [drinkQuote, setDrinkQuote] = useState("")
  const [tollTitle, setTollTitle] = useState("")
  const [tollQuote, setTollQuote] = useState("")
  const [robTitle, setRobTitle] = useState("")
  const [robQuote, setRobQuote] = useState("")
  const [adhdTitle, setAdhdTitle] = useState("")
  const [adhdQuote, setAdhdQuote] = useState("")

  // Smålig modifisert kode fra Copilot{
  useEffect(() => {
    // Dynamically import the Drinking component and extract the title
    import('./components/Art.1/Drinking' && './components/Art.2/Toll' && './components/Art.3/Rob' &&'./components/ADHD/RandomArticle').then(({ }) => {
      const hiddenDiv = document.createElement('div')
      document.body.appendChild(hiddenDiv)

      // Create a temporary React root to render the component
      const root = ReactDOM.createRoot(hiddenDiv)
      root.render(
        <>
          <Drinking setDrinkTitle={setDrinkTitle} setDrinkQuote={setDrinkQuote} />
          <Toll setTollTitle={setTollTitle} setTollQuote={setTollQuote} />
          <Rob setRobTitle={setRobTitle} setRobQuote={setRobQuote} />
          <RandomArticle setAdhdTitle={setAdhdTitle} setAdhdQuote={setAdhdQuote} />
        </>
      )

      // Clean up the temporary div after extracting the title
      setTimeout(() => {
        document.body.removeChild(hiddenDiv)
      }, 10)
    })
  }, [])
  // }

  //   useEffect(() => {
  //     const handleScroll = () => {
  //         const main = document.querySelector('main');
  //         const footer = document.querySelector('footer');
  //         const scrollWatcher = document.querySelector('.scroll-watcher');
  //         const mainRect = main.getBoundingClientRect();
  //         const footerRect = footer.getBoundingClientRect();
  //         const mainHeight = main.scrollHeight;
  //         const scrollTop = window.scrollY - mainRect.top;
  //         const scrollPercent = Math.min(Math.max(scrollTop / (mainHeight - footerRect.height), 0), 1);

  //         scrollWatcher.style.transform = `scale(1, ${scrollPercent})`;
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <Layout>
      <Routes>
        <Route index element={<Home drinkTitle={drinkTitle} drinkQuote={drinkQuote} tollTitle={tollTitle} tollQuote={tollQuote} robTitle={robTitle} robQuote={robQuote} adhdTitle={adhdTitle} adhdQuote={adhdQuote}/>} />
        <Route path="/drinking" element={<Drinking setDrinkTitle={setDrinkTitle} setDrinkQuote={setDrinkQuote} />} />
        {/* <Route path="/toll" element={<Map/>} /> */}
        <Route path="/toll" element={<Toll setTollTitle={setTollTitle} setTollQuote={setTollQuote} />} />
        <Route path="/rob" element={<Rob setRobTitle={setRobTitle} setRobQuote={setRobQuote} />} />
        <Route path="/adhd" element={<RandomArticle setAdhdTitle={setAdhdTitle} setAdhdQuote={setAdhdQuote} />} />
          <Route path="adhd/sent" element={<Late />} />
          <Route path="adhd/tidlig" element={<Early />} />

      </Routes>
    </Layout>
  )
}

export default App
