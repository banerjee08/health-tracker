import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Layout from "./components/Layout"
import Activities from './components/Activities/Activities'
import Daily from "./components/Daily/Daily"
import Weekly from "./components/Weekly/Weekly"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="daily" element={<Daily />} />
          <Route path="weekly" element={<Weekly />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
