import React from 'react'
import {Bars3Icon} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-row justify-between w-full h-40 p-10 bg-purple-500 items-center relative'>
      <img src="DWD-transparent.png" className='h-32' onClick={() => navigate('/')}/>
      
      <div className='group relative'>
        <Bars3Icon height={24} width={24} color="#000000" className='block md:hidden'/>
        <div className="flex right-9 w-min flex-col hidden fixed group-hover:block md:block md:flex-row md:w-max md:relative z-10 justify-self-start bg-gray-600 rounded-lg" >
          <button onClick={() => navigate('/')} className='btn'>Home</button>
          {/*<button className='btn'>Projects</button> */ }
          <button onClick={() => navigate('/resume')} className='btn'>Resume</button>
        </div>
      </div>
      
    </div>
  )
}

export default Header
