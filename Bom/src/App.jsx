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
import Map from './components/Art.2/Map'

function App() {
  const [drinkTitle, setDrinkTitle] = useState("")
  const [jonasQuote, setJonasQuote] = useState("")
  const [test, setTest] = useState("")

  // Smålig modifisert kode fra Copilot{
  useEffect(() => {
    // Dynamically import the Drinking component and extract the title
    import('./components/Art.1/Drinking' && './components/Art.2/Toll').then(({}) => {
      const hiddenDiv = document.createElement('div')
      document.body.appendChild(hiddenDiv)

      // Create a temporary React root to render the component
      const root = ReactDOM.createRoot(hiddenDiv)
      root.render(
        <>
          <Drinking setDrinkTitle={setDrinkTitle} setJonasQuote={setJonasQuote} />
          <Toll setTest={setTest} />
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
        <Route index element={<Home drinkTitle={drinkTitle} jonasQuote={jonasQuote} test={test} />} />
        <Route path="drinking" element={<Drinking setDrinkTitle={setDrinkTitle} setJonasQuote={setJonasQuote} />} />
        <Route path="toll" element={<Map/>} />
      </Routes>
    </Layout>
  )
}

export default App
