import React from 'react'
import './capabilities.css'



function Capabilities() {
  return (
    <div className='capabilities flex flex-col w-full mx-auto h-[750px] lg:h-[850px]' style={{backgroundColor:'#275A53', letterSpacing: '-0.5px' }} id='capabilities'>
        <div >
          <h2 className='ml-2 text-base uppercase mt-10 lg:ml-40 lg:mt-24 lg:text-lg' style={{lineHeight:'22px', lineSpacing:'1px',color:'#e2963c'}}>learn more </h2>
          <h3 className='ml-2 text-3xl font-bold text-white lg:ml-40 lg:text-4xl lg:mt-5 lg:text-4xl' style={{lineHeight: '53px', letterSpacing:'-0.5px'}}>Our Capabilities</h3>
          <div className='grid grid-cols-2 gap-10 lg:grid-cols-3 lg:ml-40 lg:mt-12'>
                <div className='ml-10 mt-10 inline-block w-14 h-14 rounded-full mb-10 lg:w-20 lg:h-20 lg:relative' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl lg:text-9xl lg:absolute lg:ml-6 lg:mt-4' style={{lineHeight: '96px', color:'#e2963c'}}>1</span>
                    <h2 className='text-white underline lg:text-2xl lg:mt-36' style={{textUnderlineOffset: '20px'}}>Integrity</h2>
                </div>
                <div className='ml-6 mt-10 inline-block w-14 h-14 rounded-full lg:w-20 lg:h-20' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl lg:text-9xl lg:absolute lg:ml-6 lg:mt-4' style={{lineHeight: '96px', color:'#e2963c'}}>2</span>
                    <h2 className='text-white underline lg:text-2xl lg:mt-36' style={{textUnderlineOffset: '20px'}}>Accountability</h2>
                </div>
                <div className='ml-10 mt-10 inline-block w-14 h-14 rounded-full mb-10 lg:w-20 lg:h-20' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl lg:text-9xl lg:absolute lg:ml-6 lg:mt-4' style={{lineHeight: '96px', color:'#e2963c'}}>3</span>
                    <h2 className='text-white underline whitespace-nowrap lg:text-2xl lg:mt-36' style={{textUnderlineOffset: '20px'}}>Talent management</h2>
                </div>
                <div className='ml-6 inline-block w-14 h-14 rounded-full mt-10 lg:w-20 lg:h-20 lg:mt-20' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl lg:text-9xl lg:absolute lg:ml-6 lg:mt-4' style={{lineHeight: '96px', color:'#e2963c'}}>4</span>
                    <h2 className='text-white underline whitespace-nowrap lg:text-2xl lg:mt-36' style={{textUnderlineOffset: '20px'}}>Strategic Thinking</h2>
                </div>
                <div className='ml-10 mt-10 inline-block w-14 h-14 rounded-full lg:w-20 lg:h-20 lg:mt-20' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl lg:text-9xl lg:absolute lg:ml-6 lg:mt-4' style={{lineHeight: '96px', color:'#e2963c'}}>5</span>
                    <h2 className='text-white underline whitespace-nowrap lg:text-2xl lg:mt-36' style={{textUnderlineOffset: '20px'}}>Shared Mindset</h2>
                </div>
                <div className=' ml-6 mt-10 inline-block w-14 h-14 rounded-full lg:w-20 lg:h-20 lg:mt-20' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl lg:text-9xl lg:absolute lg:ml-6 lg:mt-4' style={{lineHeight: '96px', color:'#e2963c'}}>6</span>
                    <h2 className='text-white underline whitespace-nowrap lg:text-2xl lg:mt-36' style={{textUnderlineOffset: '20px'}}>Speed & Aggression</h2>
                </div>
            </div>     
        </div>
    </div>
  )
}

export default Capabilities