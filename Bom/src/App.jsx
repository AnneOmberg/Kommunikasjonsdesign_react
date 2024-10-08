import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './style/main.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Drinking from './components/Art.1/Drinking'
import Toll from './components/Art.2/Toll'

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
      console.log(hiddenDiv)
      const render = (<Toll setTest={setTest} />, <Drinking setDrinkTitle={setDrinkTitle} setJonasQuote={setJonasQuote} />  )

      // Create a temporary React root to render the component
      const root = ReactDOM.createRoot(hiddenDiv)
      root.render(
        <Toll setTest={setTest} />, <Drinking setDrinkTitle={setDrinkTitle} setJonasQuote={setJonasQuote} />
      )
      // &&
      // root.render(<Toll setTest={setTest} />)

      // Clean up the temporary div after extracting the title
      setTimeout(() => {
        document.body.removeChild(hiddenDiv)
      }, 10)
    })
  }, [])
  // }


  return (
    <Layout>
      <Routes>
        <Route index element={<Home drinkTitle={drinkTitle} jonasQuote={jonasQuote} test={test} />} />
        <Route path="drinking" element={<Drinking setDrinkTitle={setDrinkTitle} setJonasQuote={setJonasQuote} />} />
        <Route path="toll" element={<Toll setTest={setTest} />} />
      </Routes>
    </Layout>
  )
}

export default App
