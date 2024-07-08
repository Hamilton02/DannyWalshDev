import React from 'react'
import RecoveryCafeImg from '../images/RecoveryCafe.png'
import { Link } from 'react-router-dom'


const RecoveryCafe = () => {
  return (
    <div>
      <img src={RecoveryCafeImg} id="cafe-img" />
      <br></br>
      <Link to="/projects"><button className='btn'>Return to Projects</button></Link>
    </div>
  )
}

export default RecoveryCafe
