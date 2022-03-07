import React, { useState, useEffect } from 'react'
import worker from './assets/worker.png'
import palmheap from './assets/palmheap.png'

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

   {/* useEffect(() => {
        startSlider();
    }, [])

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick();
            
        }, 3000);
    }*/}
    
  return (
    <div className='flex flex-col' style={{background:'#F4F4F4', height:'900px'}} id='aboutus'>
        <div>
            <h2 className='text-base mt-14 ml-2 leading-6 uppercase' style={{color:'#E2963C'}}>About Us</h2>
            <h3 className='capitalize text-3xl font-bold leading-10 ml-2 py-2' style={{letterSpacing:'-0.5px', color:'#323232'}}>Learn more about<br/> <span style={{color:'#275A53'}}>Saro Oil Palm</span></h3>
            <p className='ml-2 text-base font-sans' style={{color:'#969696', lineHeight:'29px'}}>Saro Oil Palm, still a project under Saro Africa
               International is currently being supervised by the
               Saroafrica Board.
            </p>
            <button className='rounded-lg text-white font-semibold px-5 py-2 shadow-lg  mt-5 ml-2 animate-bounce' style={{backgroundColor:'#145A2F'}}>View Our Management Team</button>
        </div>
        
        <div className="max-w-screen-xl m-auto">
            <div className="w-full relative select-none">
                <div  className="max-w-screen-xl m-auto">
                    <img className='object-cover object-center w-96 h-96' src={featuredImages[ currentIndex ]} alt="" />
                </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button onClick={handleOnPrevClick} className='text-red-600 font-bold'>Previous</button>
            <button onClick={handleOnNextClick} className='text-red-600 font-bold'>Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About