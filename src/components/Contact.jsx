import React from 'react'

function Contact() {
  return (
    <div className='mx-auto' style={{height:'400px', backgroundColor:'#f4f4f4'}} id='contact'>
        <div>
            <h1 className='font-serif font-bold text-2xl capitalize pt-10 ml-2' style={{color:'#275a53', lineHeight:'40px', letterSpacing:'-0.5px'}}>We would <span style={{color:'#323232'}}>love to talk<br/> with you!</span></h1>
            <p className='font-sans text-base ml-2' style={{lineHeight:'29px',color:'#969696'}}>You want to ask something to us, just<br/> by clicking the
                button next to it and<br/> contact us directly.</p>
            <button className='rounded-lg text-white font-semibold px-5 py-2 shadow-lg animate-bounce mt-5 ml-2' style={{backgroundColor:'#145A2F'}}>Contact Us</button>
            <hr className='mt-20 mx-7'/>
        </div>    
    </div>
  )
}

export default Contact