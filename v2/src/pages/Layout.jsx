import React from 'react'
import Header from '../components/Header'
import { useOutlet } from 'react-router-dom'

const Layout = () => {

  const outlet = useOutlet()

  return (
    <div className='w-screen h-screen font-serif subpixel-antialiased slashed-zero diagonal-fractions overflow-x-hidden bg-gray-800 text-white'>
      <Header />
      <div className='w-full h-full my-10'>
        {outlet}
      </div>
    </div>
  )
}

export default Layout
