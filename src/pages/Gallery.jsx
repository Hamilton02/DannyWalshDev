import React from 'react'
import Art from '../components/Art'
import Proejct1 from '../images/Walsh-Daniel-Project01-v0.1.png'
import MockupProject from '../images/Walsh-Daniel-Mockup-v0.2.jpg'
import Project2 from '../images/DanielWalsh-Project2-CollectionSheet-v0.1.png'
import Project3 from '../images/Walsh-Daniel-Final-Art-v0.2.png'

import '../styles/gallery.css'

const Gallery = () => {


  
  return (
    <div className='gallery-wrapper'>
      <h2>Gallery</h2>
      <p>I have found that I really enjoy graphic design after taking ARTS 74 at Santa Clara University. This is just a spot to show off some of the digital art I have made.</p>
      <div className='artwork-wrapper'>
        <Art image={Proejct1} title="ARTS 74 Project 1"/>
        <Art image={MockupProject} title="ARTS 74 Mockup Project"/>
        <Art image={Project2} title="ARTS 74 Project 2"/>
        <Art image={Project3} title="ARTS 74 Project 3"/>
      </div>
        
    </div>
  )
}

export default Gallery
