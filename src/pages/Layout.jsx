import React from 'react'
import { useOutlet, Link, useParams } from 'react-router-dom'
import '../styles/Layout.css'
import DWDev from '../images/DWDev.svg'

const Layout = () => {

  const outlet = useOutlet()

  let content

  const hello = (
    <h1>Hello, I'm Danny</h1>
  )

  if(!outlet){
    content = hello
  }else{
    content = outlet;
  }


  return (
    <div className='site-wrapper'>
      
      <aside className='menu'>
        <Link to="/"><h2 className="white site-title">Danny Walsh's Portfolio</h2></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/resume"><button>Resume</button></Link>
        <Link to='/gallery'><button>Gallery</button></Link>
        <div className='rightSide'>
         <img src={DWDev} height={48} width={48} id="logo"/>
        </div>
      </aside>

      <div className='outlet-wrapper'>
        {content}
      </div>
      

    </div>
  )
}

export default Layout
