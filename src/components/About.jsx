import React, { useState, useEffect } from 'react'
import worker from './assets/worker.png'
import palmheap from './assets/palmheap.png'
import boss from './assets/boss.png'
import headquaters from './assets/headquaters.png'
import './about.css'

function About() {
    const featuredImages = [ worker, palmheap]
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleOnNextClick = () => {
         const count = (currentIndex + 1) % featuredImages.length
         console.log({count})
         setCurrentIndex(count)
    }

    const handleOnPrevClick = () => {
        const productsLength = featuredImages.length
        const count = (currentIndex + productsLength - 1) % productsLength
        setCurrentIndex(count)
    }

  
  return (
    <div className='about flex flex-col w-full mx-auto lg:flex' style={{background:'#F4F4F4', height:'900px'}} id='aboutus'>
      <div className='lg:flex'>
        <div className='lg:w-1/4 lg:ml-16 lg:mt-32 lg:ml-32'>
            <h2 className='text-base mt-14 ml-2 leading-6 uppercase text-[#275A53] font-bold lg:text-[#E2963C] lg:text-lg'>About Us</h2>
            <h3 className='capitalize text-3xl font-bold leading-10 ml-2 py-2 lg:text-[40px] leading-[60px]' style={{letterSpacing:'-0.5px', color:'#323232'}}><span className='whitespace-nowrap'>Learn more about</span><br/> <span style={{color:'#275A53'}}>Saro Oil Palm</span></h3>
            <p className='ml-2 text-base lg:mt-4 lg:text-lg' style={{color:'#969696', lineHeight:'29px'}}>Saro Oil Palm, still a project under Saro Africa
               International is currently being supervised by the
               Saroafrica Board.
            </p>
            <button className='rounded-lg text-white font-semibold px-5 py-2 shadow-lg  mt-5 ml-2 bg-[#145A2F] lg:bg-[#E2963C] lg:px-10 lg:py-4 lg:mt-20'>View Our Management Team</button>
        </div>

        <div className='about-main flex mt-32 ml-20'>
            <img className ='ml-64 mt-16 w-[470px] h-[540px]' src={headquaters} alt='' />
            <img className='ml-3 mt-36 w-[233px] h-[412.41px]'src={boss} alt='' />
        </div>
        
        <div className="max-w-screen-xl m-auto lg:hidden">
            <div className="w-full relative select-none">
                <div  className="max-w-screen-xl m-auto">
                    <img className='object-cover object-center w-96 h-96 mt-10' src={featuredImages[ currentIndex ]} alt="" />
                </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button onClick={handleOnPrevClick} className='text-red-600 font-bold'>Previous</button>
            <button onClick={handleOnNextClick} className='text-red-600 font-bold'>Next</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default About