import React from 'react'

const Art = ({image, title, setCurrImg, setActive}) => {
  return (
    <div className='art-tile'>
      
      <img src={image} />
      <hr></hr>
      
      <button onClick={() => {
        setActive(true)
        setCurrImg(image)
      }}><h5>{title}</h5></button>

    </div>
  )
}

export default Art
