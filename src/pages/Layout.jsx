import React from 'react'
import { useOutlet, Link } from 'react-router-dom'
import '../styles/Layout.css'
import DWDev from '../assets/DWDev.svg'

const Layout = () => {

  const outlet = useOutlet()



  return (
    <div className='site-wrapper'>
      
      <aside className='menu'>
        <h2>Danny Walsh's Portfolio</h2>
        <Link to="/about"><button>About</button></Link>
        <Link to="/resume"><button>Resume</button></Link>
        <Link to='/gallery'><button>Gallery</button></Link>
        <div className='rightSide'>
         <img src={DWDev} height={48} width={48} id="logo"/>
        </div>
      </aside>

      <div className='outlet-wrapper'>{outlet}</div>
      

    </div>
  )
}

export default Layout
