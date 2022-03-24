import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './worker.css'

function Worker() {
  return (
    <div className='bg-slate-50 min-h-fit w-full mx-auto lg:flex' style={{height:'450px'}} id='about'>
      <div className='lg:w-4/5 lg:mt-32 lg:ml-32'>
        <h2 className='ml-5 pt-10 text-base leading-6 text-[#3FB652] lg:text-[#E2963C] lg:text-lg' style={{lineSpace:'1px'}}>LEARN ABOUT US</h2>
        <h3 className='ml-2 text-4xl font-bold text-[#323232] lg:w-72 lg:mt-2 lg:text-5xl'style={{lineHeight:'60px', letterSpacing:'-0.5px'}}>About Saro Oil Palm</h3>
      </div>
      <div className='lg:mt-32 lg:ml-28'>
        <p className='text-base mx-3 my-2 lg:mr-32 lg:ml-10 lg:font-[500] lg:text-lg' style={{lineHeight:'29px', color: '#606060'}}>
           Saro Oil Palm Limited a multi-billion naira project is the single biggest investment
           decision that Saroafrica group has taken from inception till date. The investment in 
           Oil Palm represents our stake and commitment towards achieving the group’s strategic objective to transform Saroafrica into a main player in the Agricultural value chain.
        </p>
        <Link to='#aboutus' smooth><button className='rounded-lg text-white font-semibold px-5 py-2 shadow-lg mt-4 ml-2 bg-[#145A2F] lg:bg-[#E2963C] lg:mt-16 lg:px-10 lg:py-4 lg:ml-10'>Learn More</button></Link>
      </div>
    </div>
  )
}

export default Worker