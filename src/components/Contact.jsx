import React from 'react'
import './contact.css'
import Avatar from '@mui/material/Avatar'
import star from './assets/star.png'

function Contact() {
  let stars = <img src={star} />
  return (
    <div className='w-full mx-auto h-[400px] lg:h-[1000px]' style={{backgroundColor:'#f4f4f4'}} id='contact'>
        <div className='contact'>
            <div className='flex'>
              <div className='w-1/2 lg:ml-24'>
                <h2 className='pt-20 ml-20 leading-[22px] text-xl uppercase text-[#E2963C] font-[400] tracking-[0.5px]'>happy clients</h2>
                <h3 className='ml-20 mt-5 text-[40px] text-[#323232] font-bold leading-[60px] tracking-[-0.5px] capitalize'>What our clients<br/><span className='text-[#275A53]'> are saying</span></h3>
              </div> 
                <p className='ml-52 mt-48 leading-[29px] text-[#969696] text-[18px] font-[400px] font-sans'>These are things that customers who have<br/> used our services say.</p>
            </div>
            <div className='flex lg:ml-24'>
                <div className='rounded-3xl w-[440px] h-[283px] border-slate-600 bg-white ml-16 mt-20'>
                    <p className='pt-10 px-2 text-base leading-[29px] font-sans text-[#646464]'>“Thank you so much for valuing me as a customer, and coming through for me and my family at a trying time in this world.”</p>
                    <hr className='mt-10 mx-5'/>
                    <div className='flex ml-5 pt-10'>
                      <Avatar />
                      <div>
                        <h4 className='text-[#323232] text-[18px] ml-4 font-[600px] leading-[25px]'>Nazmi Javier</h4>
                        <h4 className='ml-4'>House husband</h4>
                      </div>
                      <div className='flex h-[15px] ml-36 mt-5'>{stars}{stars}{stars}{stars}{stars}</div>
                    </div>    
                </div>
                <div className='rounded-3xl w-[440px] h-[283px] border-slate-600 bg-white ml-10 mt-20'>
                    <h1 className='pt-10 px-2 text-base leading-[29px] font-sans text-[#646464]'>“This is by far the simplest, most frictionless, easiest-to-get-going platform that I’ve ever applied on. The check was seamless. ”</h1>
                    <hr className='mt-10 mx-5'/>
                    <div className='flex ml-5 pt-10'>
                      <Avatar />
                      <div>
                        <h4 className='text-[#323232] text-[18px] ml-4 font-[600px] leading-[25px]'>Chintya Xin</h4>
                        <h4 className='ml-4'>House wife</h4>
                      </div>
                      <div className='flex h-[15px] ml-36 mt-5'>{stars}{stars}{stars}{stars}{stars}</div>
                    </div>    
                </div>
                <div className='rounded-3xl w-[440px] h-[283px] border-slate-600 bg-white ml-10 mt-20'>
                    <h1 className='pt-10 px-2 text-base leading-[29px] font-sans text-[#646464]'>“This is by far the simplest, most frictionless, easiest-to-get-going platform that I’ve ever applied on. The check was seamless. ”</h1>
                    <hr className='mt-10 mx-5'/>
                    <div className='flex ml-5 pt-10'>
                      <Avatar />
                      <div>
                        <h4 className='text-[#323232] text-[18px] ml-4 font-[600px] leading-[25px]'>Braun Yes</h4>
                        <h4 className='ml-4'>CEO Of Arcane</h4>
                      </div>
                      <div className='flex h-[15px] ml-36 mt-5'>{stars}{stars}{stars}{stars}{stars}</div>
                    </div>    
                </div>
            </div>
        </div>
        <div className='lg:flex lg:justify-between lg:ml-20 lg:mt-24'>
           <div>
              <h1 className='font-serif font-bold text-2xl capitalize pt-10 ml-2 leading-[40px] lg:text-4xl' style={{color:'#275a53', letterSpacing:'-0.5px'}}>We would <span style={{color:'#323232'}}>love to talk<br/> with you!</span></h1>
              <p className='font-sans text-base ml-2 lg:mt-5 lg:text-[18px]' style={{lineHeight:'29px',color:'#969696'}}>You want to ask something to us, just<br className='lg:hidden'/> by clicking the<br className='break' />
                button next to it and<br className='lg:hidden'/> contact us directly.</p>
            </div>
            <div>
              <button className='rounded-lg text-white font-semibold px-5 py-2 shadow-lg mt-5 ml-2 bg-[#145A2F] lg:px-20 lg:py-4 lg:bg-[#E2963C] lg:mt-40 lg:ml-20'>Contact Us</button>
            </div>
            <hr className='mt-20 mx-7'/>
        </div>    
    </div>
  )
}

export default Contact
