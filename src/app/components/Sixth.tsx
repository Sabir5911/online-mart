import React from 'react'
import Wrapper from '../shared/Wrapper'

export default function Sixth() {
  return <>       
  <Wrapper>

<div className='flex flex-col justify-center items-center gap-y-6 mt-28 relative'>
    <h1 className='text-3xl font-bold'>Subscribe Our Newsletter</h1>
    <text className='text-sm'>Get the latest information and promo offers directly</text>
    <div className='flex justify-center items-center gap-x-2 relative' >
        <input placeholder='input email adress ' className='border text-base w-64 h-8 pl-3 rounded-none'></input>
        <button className='bg-black text-white font-semibold px-3 py-1.5 text-sm'>Get Started</button>
    </div>
    <span className='absolute text-gray-500 text-[110px] font-bold z-10 opacity-10'>Newsletter</span>
</div>

  </Wrapper>
  </>
}
