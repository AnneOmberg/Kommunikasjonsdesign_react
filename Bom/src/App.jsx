import { useState } from 'react'
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

  return (
    <>
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="drinking" element={<Drinking />} />
        <Route path="toll" element={<Toll />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
