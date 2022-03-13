import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './services.css'


function Services() {
  return (
    <div className='service sm:max-w-7xl sm:mx-auto h-[1100px] lg:h-[884px]' id='services'>
      <div className='bg-kernal-bg h-1/2 bg-cover bg-center flex justify-center items-center lg:bg-palmoil-img lg:h-[884px]'>
      <div className='service-half'></div>
      </div>
      <div className='service-text'>
        <h1 className='service-head font-sans text-base mt-4 leading-6 uppercase ml-2' style={{color:'#3FB652', letterSpacing:'1px'}}>what we offer</h1>
        <h1 className='service-header font-sans text-base mt-4 leading-6 uppercase ml-2 lg:text-[#E2963C] font-[400]' style={{letterSpacing:'1px'}}>how it works</h1>
        <h2 className='text-3xl font-bold ml-2 font-serif lg:text-4xl lg:mt-2' style={{color:'#275A53', lineSpacing:'-0.5px', lineHeight:'60px'}}>Our Value Offering </h2>
        <p className='ml-2 text-base font-sans' style={{color:'#969696', lineHeight:'29px'}}>With consumers at the heart of our business, we re focused on complying with RSPO
           standards in production of:
        </p>
        <h3 className='font-serif ml-2 font-bold my-3 capitalize lg:mt-5' style={{color:'#275A53', fontSize:'24px', lineHeight:'20px', letterSpacing:'-0.5px'}}>Top Quality Palm Oil</h3>
        <p className='text-base ml-2 font-sans' style={{color:'#969696', lineHeight:'29px'}}>Crude & refined, planted and processed to meet the consumer and industry needs.</p>
        <h3 className='font-serif ml-2 font-bold my-3 capitalize lg:mt-5' style={{color:'#275A53', fontSize:'24px', lineHeight:'20px', letterSpacing:'-0.5px'}}>Top quality PKO</h3>
        <p className='text-base ml-2 font-sans' style={{color:'#969696', lineHeight:'29px'}}>Crude & refined, as Industrial feed for both local and global market</p>
        <h3 className='font-serif ml-2 font-bold my-3 capitalize lg:mt-5' style={{color:'#275A53', fontSize:'24px', lineHeight:'20px', letterSpacing:'-0.5px'}}>Crude Palm Kernel Cake </h3>
        <p className='text-base ml-2 font-sans' style={{color:'#969696', lineHeight:'29px'}}>As Industrial feed for both local and global market</p>
        <Link to='#capabilities' smooth><button className='rounded-lg text-white font-semibold px-5 py-2 shadow-lg animate-bounce mt-5 ml-2 bg-[#145A2F] lg:px-10 lg:py-4 lg:mt-20 lg:bg-[#E2963C] '>Learn More</button></Link>
      </div>
        
    </div>
  )
}

export default Services