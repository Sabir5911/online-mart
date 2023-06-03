import React from 'react'
import Wrapper from '../shared/Wrapper'

export default function Sixth() {
  return <>       
  <Wrapper>

<div className='flex flex-col justify-center items-center gap-y-6 mt-28 '>
  
<div className='absolute text-gray-500 text-[80px] font-bold z-10 opacity-10 '>Newsletter</div>

    <h1 className='text-3xl font-bold'>Subscribe Our Newsletter</h1>
    <span className='span-sm '>Get the latest information and promo offers directly</span>
    <div className='flex justify-center items-center gap-4 mt-7' >
        <input placeholder='input email adress ' className='border text-base w-64 h-8 pl-3 rounded-none'></input>
        <button className='bg-black text-white font-semibold px-3 py-1.5 text-sm'>Get Started</button>
    </div>

</div>     

  </Wrapper>
  </>
}
