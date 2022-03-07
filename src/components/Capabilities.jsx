import React from 'react'


function Capabilities() {
  return (
    <div className='flex flex-col ' style={{backgroundColor:'#275A53', height:'750px', letterSpacing: '-0.5px' }} id='capabilities'>
        <div >
          <div className='ml-2 text-base font-sans uppercase mt-10' style={{lineHeight:'22px', lineSpacing:'1px',color:'#e2963c'}}>learn more </div>
          <div className='ml-2 text-3xl font-bold text-white' style={{lineHeight: '53px'}}>Our Capabilities</div>
          <div className='grid grid-cols-2 gap-10 '>
                <div className='ml-10 mt-10 inline-block w-14 h-14 rounded-full mb-10' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl' style={{lineHeight: '96px', color:'#e2963c'}}>1</span>
                    <div className='text-white underline' style={{textUnderlineOffset: '20px'}}>Integrity</div>
                </div>
                <div className='ml-6 mt-10 inline-block w-14 h-14 rounded-full' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl' style={{lineHeight: '96px', color:'#e2963c'}}>2</span>
                    <div className='text-white underline' style={{textUnderlineOffset: '20px'}}>Accountability</div>
                </div>
                <div className='ml-10 mt-10 inline-block w-14 h-14 rounded-full mb-10' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl' style={{lineHeight: '96px', color:'#e2963c'}}>3</span>
                    <div className='text-white underline whitespace-nowrap' style={{textUnderlineOffset: '20px'}}>Talent management</div>
                </div>
                <div className='ml-6 inline-block w-14 h-14 rounded-full mt-10' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl' style={{lineHeight: '96px', color:'#e2963c'}}>4</span>
                    <div className='text-white underline whitespace-nowrap' style={{textUnderlineOffset: '20px'}}>Strategic Thinking</div>
                </div>
                <div className='ml-10 mt-10 inline-block w-14 h-14 rounded-full' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl' style={{lineHeight: '96px', color:'#e2963c'}}>5</span>
                    <div className='text-white underline whitespace-nowrap' style={{textUnderlineOffset: '20px'}}>Shared Mindset</div>
                </div>
                <div className=' ml-6 mt-10 inline-block w-14 h-14 rounded-full' style={{backgroundColor:'#868d58'}}>
                    <span className='ml-5 font-bold text-7xl' style={{lineHeight: '96px', color:'#e2963c'}}>6</span>
                    <div className='text-white underline whitespace-nowrap' style={{textUnderlineOffset: '20px'}}>Speed & Aggression</div>
                </div>
            </div>     
        </div>
    </div>
  )
}

export default Capabilities