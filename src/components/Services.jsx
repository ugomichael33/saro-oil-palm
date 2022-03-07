import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Services() {
  return (
    <div className=' ' id='services' style={{height: '1100px'}}>
      <div className='bg-kernal-bg h-1/2 bg-cover bg-center flex justify-center items-center'>

      </div>
      <div>
        <h1 className='font-sans text-base mt-4 leading-6 uppercase ml-2' style={{color:'#3FB652', letterSpacing:'1px'}}>what we offer</h1>
        <h2 className='text-3xl font-bold ml-2 font-serif' style={{color:'#275A53', lineSpacing:'-0.5px', lineHeight:'60px'}}>Our Value Offering </h2>
        <p className='ml-2 text-base font-sans' style={{color:'#969696', lineHeight:'29px'}}>With consumers at the heart of our business, we re focused on complying with RSPO
           standards in production of:
        </p>
        <h3 className='font-serif ml-2 font-bold my-3 capitalize' style={{color:'#275A53', fontSize:'24px', lineHeight:'20px', letterSpacing:'-0.5px'}}>Top Quality Palm Oil</h3>
        <p className='text-base ml-2 font-sans' style={{color:'#969696', lineHeight:'29px'}}>Crude & refined, planted and processed to meet the consumer and industry needs.</p>
        <h3 className='font-serif ml-2 font-bold my-3 capitalize' style={{color:'#275A53', fontSize:'24px', lineHeight:'20px', letterSpacing:'-0.5px'}}>Top quality PKO</h3>
        <p className='text-base ml-2 font-sans' style={{color:'#969696', lineHeight:'29px'}}>Crude & refined, as Industrial feed for both local and global market</p>
        <h3 className='font-serif ml-2 font-bold my-3 capitalize' style={{color:'#275A53', fontSize:'24px', lineHeight:'20px', letterSpacing:'-0.5px'}}>Crude Palm Kernel Cake </h3>
        <p className='text-base ml-2 font-sans' style={{color:'#969696', lineHeight:'29px'}}>As Industrial feed for both local and global market</p>
        <Link to='#capabilities' smooth><button className='rounded-lg text-white font-semibold px-5 py-2 shadow-lg animate-bounce mt-5 ml-2' style={{backgroundColor:'#145A2F'}}>Learn More</button></Link>
      </div>
        
    </div>
  )
}

export default Services