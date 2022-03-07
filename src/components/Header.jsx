import React from 'react'
import "../index.css"

const Header = () => {
  return (
      <div className='sm:max-w-7xl sm:mx-auto ' id='home'>
        <div className='header bg-hero-img h-screen bg-cover bg-center flex justify-center items-center'>
        
            <div className='text-white text-center capitalize text-4xl sm:w-3/4 lg:w-2/4'>
                <h1 className='font-bold'>Saro Oil Palm</h1>
            </div>
        
        </div>
      </div>
  )
}

export default Header