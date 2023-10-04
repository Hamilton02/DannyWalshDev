import React from 'react'

const Art = ({image, title}) => {
  return (
    <div className='art-tile'>
      
      <img src={image} />
      <hr></hr>
      <h5>{title}</h5>

    </div>
  )
}

export default Art
