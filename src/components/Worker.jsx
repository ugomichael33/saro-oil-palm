import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Worker() {
  return (
    <div className='bg-slate-50 min-h-fit max-w-7xl mx-auto' style={{height:'450px'}} id='about'>
        <h1 className='ml-2 pt-10 text-base leading-6' style={{lineSpace:'1px', color:'#3FB652'}}>LEARN ABOUT US</h1>
        <h2 className='ml-2 text-4xl font-bold'style={{lineHeight:'60px', letterSpacing:'-0.5px'}}>About Saro Oil Palm</h2>

        <p className='text-base mx-3 my-2' style={{lineHeight:'29px', color: '#606060'}}>Saro Oil Palm Limited a multi-billion naira project is the single biggest investment
           decision that Saroafrica group has taken from inception till date. The investment in 
           Oil Palm represents our stake and commitment towards achieving the group’s strategic objective to transform Saroafrica into a main player in the Agricultural value chain.
        </p>
        <Link to='#aboutus' smooth><button className='rounded-lg text-white font-semibold px-5 py-2 shadow-lg animate-bounce mt-4 ml-2' style={{backgroundColor:'#145A2F'}}>Learn More</button></Link>
    </div>
  )
}

export default Worker