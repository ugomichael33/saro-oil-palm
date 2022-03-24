import React from 'react'
import "../index.css"
import "./header.css"

const Header = () => {
  return (
      <div className='header w-full mx-auto' id='home'>
        <div className='header bg-hero-img  h-screen bg-cover bg-center flex justify-center items-center'> 
            <div className='text-white text-center capitalize text-4xl lg:text-7xl sm:w-3/4 lg:w-2/4'>
                <h1 className='font-bold lg:hidden'>Saro Oil Palm</h1>
                <h1 className='header-text font-extrabold ' style={{lineHeight:'136px', letterSpacing:'-0.5px'}}>Get Top Quality <span className='whitespace-nowrap'>Palm Oil from Saro</span></h1>
            </div>
        </div>
      </div>   
  )
}

export default Header