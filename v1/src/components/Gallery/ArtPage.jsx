import React from 'react'
import '../../styles/gallery.css'

const ArtPage = ({title, image, artActive}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} id="framed-art" />
      <br></br>
      <button onClick={() => artActive(false)}>X</button>
    </div>
  )
}

export default ArtPage
