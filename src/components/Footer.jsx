import React from 'react'
import ViewKanbanIcon from '@mui/icons-material/ViewKanban'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  return (
    <div className='w-full mx-auto' style={{height:'350px', backgroundColor:'#f4f4f4'}}>
        
        <div className='footer__logo'>
            <div className='flex ml-2 lg:ml-20'>
                <ViewKanbanIcon />
                <h2 className='font-bold text-xl font-sans ml-1' style={{color:'#323232',lineHeight:'27px'}}>Saro oil Palm</h2>
            </div>
            <p className='text-base ml-2 font-sans lg:ml-20' style={{color:'#969696', lineHeight:'29px'}}>Learn about us and how we can help you with<br/> 
            loans to rehabilitate your home and sell. Also<br/>
            learn about our works.
            </p>
            <div className='grid grid-cols-3 lg:ml-20'>
                <div className='footer__link'>
                    <h1 className='text-base font-bold ml-2 mt-5 font-sans' style={{color:'#323232',lineHeight:'16px'}}>Links</h1>
                    <h2 className='ml-2 mt-1 text-sm font-sans' style={{color:'#969696',lineHeight:'19px'}}>Home</h2>                     
                    <h2 className='ml-2 mt-1 text-sm font-sans' style={{color:'#969696',lineHeight:'19px'}}>About us</h2>                     
                    <h2 className='ml-2 mt-1 text-sm font-sans' style={{color:'#969696',lineHeight:'19px'}}>Contact us</h2>                     
                </div>
                <div className='footer__about'>
                    <h1 className='text-base font-bold mt-5 font-sans' style={{color:'#323232',lineHeight:'16px'}}>About</h1>
                    <h2 className='mt-1 text-sm font-sans' style={{color:'#969696',lineHeight:'19px'}}>About Saro Oil Palm</h2>                     
                    <h2 className='mt-1 text-sm font-sans' style={{color:'#969696',lineHeight:'19px'}}>Management Team</h2>                     
                    <h2 className='mt-1 text-sm font-sans' style={{color:'#969696',lineHeight:'19px'}}>Our values</h2>                     
                </div>
                <div className='footer__address'>
                    <h1 className='text-base font-bold ml-5 mt-5 font-sans' style={{color:'#323232',lineHeight:'16px'}}>Our Office</h1>
                    <h2 className='ml-5 mt-1 text-sm font-sans' style={{color:'#969696',lineHeight:'19px'}}>Address</h2>                                         
                    <h2 className='ml-5 mt-1 text-sm font-sans' style={{color:'#969696',lineHeight:'19px'}}>Address</h2>                                         
                </div>
            </div>
            
            <div className='flex ml-2 mt-10 lg:ml-20'>
                <div className='facebook'><FacebookIcon /></div>
                <div className='instagram'><InstagramIcon/></div>
                <div className='twitter'><TwitterIcon/></div> 
                <div className='mail'><EmailIcon/></div> 
            </div>
      </div>
    </div>
  )
}

export default Footer