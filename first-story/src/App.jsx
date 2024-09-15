import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App
