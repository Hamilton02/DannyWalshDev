import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {

  return ( 
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}


export default App
