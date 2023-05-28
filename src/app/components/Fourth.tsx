import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import {Data} from '../components/FourthData/Data'
export default function Fourth() {
  return <>
  <Wrapper>
    <div className='mt-24'>
    <div className='flex flex-col justify-center items-center'>
        <text className='text-[#0093F8] text-md font-bold '>PRODUCTS</text>
        <h1 className='text-4xl font-bold'>Check What We Have</h1>
    </div>

    <div className='flex justify-center items-center mt-12 gap-x-5  '>

    {
        Data.map((elm)=>(
            <div className='flex flex-col  justify-center gap-1 hover:scale-110 duration-500   ' >

            <Image src={elm.Image} alt='sa' width={370} height={370}/>
            <h1 className='text-xl font-medium'>{elm.Heading}</h1>
            <text className='text-xl font-medium'>{elm.price}</text>
            </div>
     
        ))

    }
   


    </div>
    </div>
   
  </Wrapper>
  </>
}
