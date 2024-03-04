import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Resume from './pages/Resume';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/projects' element={<Projects /> } >
          </Route>


        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
