import React, { useState } from 'react'
import logo from './assets/logo.jpg'
import { HashLink as Link } from 'react-router-hash-link'

const Nav = () => {

    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10 mx-auto' >
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='w-2 font-bold text-2xl cursor-pointer flex items-center font-[Gilroy] 
      text-gray-800'>
        <img className= "relative rounded-full border border-gray-100 shadow-sm max-w-max h-20 " src={logo} />
      </div>
           
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul onClick={()=>setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full font-[Gilroy] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
       
            <li className='md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
              <Link to='#home' smooth>Home</Link> 
            </li>
            <li  className='md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
              <Link to='#about' smooth className=''>About</Link>
            </li>
            <li className='md:ml-8 text-xl md:my-0 '>
              <Link to='#services' smooth className='my-7 text-gray-800 hover:text-gray-400 duration-500'>Services</Link>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
              <Link to='#contact' smooth>Contact Us</Link>
            </li>
      
       
      </ul>
      </div>
     
    </div>
  )
}

export default Nav