import React from 'react'
import Art from '../components/Gallery/Art'
import Proejct1 from '../images/Walsh-Daniel-Project01-v0.1.png'
import MockupProject from '../images/Walsh-Daniel-Mockup-v0.2.jpg'
import Project2 from '../images/DanielWalsh-Project2-CollectionSheet-v0.1.png'
import Project3 from '../images/Walsh-Daniel-Final-Art-v0.2.png'
import ArtPage from '../components/Gallery/ArtPage'

import { useState, useEffect, useRef } from 'react'


import '../styles/gallery.css'


const Gallery = () => {

  const [currImg, setCurrImg] = useState('')
  const [artActive, setArtActive] = useState(false)

  let popup = <></>

  const currentArt = <ArtPage title={"Art Title"} image={currImg} artActive={setArtActive} />


if(artActive){
  popup = <div className='gallery-frame'>{currentArt}</div>
}else{
  popup = <></>
}


  
  return (
    <div className='gallery-wrapper'>
      <h2>Gallery</h2>
      <p>I have found that I really enjoy graphic design after taking ARTS 74 at Santa Clara University. This is just a spot to show off some of the digital art I have made.</p>
      <div className='artwork-wrapper' disabled={artActive} >
        <Art image={Proejct1} title="ARTS 74 Project 1" setActive={setArtActive} setCurrImg={setCurrImg} />
        <Art image={MockupProject} title="ARTS 74 Mockup Project" setActive={setArtActive} setCurrImg={setCurrImg} />
        <Art image={Project2} title="ARTS 74 Project 2" setActive={setArtActive} setCurrImg={setCurrImg} />
        <Art image={Project3} title="ARTS 74 Project 3" setActive={setArtActive} setCurrImg={setCurrImg} />
      </div>
      {popup}
        
    </div>
  )
}

export default Gallery
