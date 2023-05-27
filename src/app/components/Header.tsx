import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/Logo.jpg'
import serch from '../../../public/assets/serch.png'
import shop from '../../../public/assets/shop.png'
import Wrapper from '../shared/Wrapper'


export default function Header() {
  return <>
    <Wrapper>

      <main className='mt-12'>

        <div className='flex justify-between items-center '>
          <Image src={logo} alt='image' width={150} height={150} />
          <ul className='flex justify-center items-center text-lg gap-x-12 font-medium'>
            <li>Female</li>
            <li>Male</li>
            <li>Kids</li>
            <li>All Products</li>
          </ul>

          <div className=" border border-slate-300 rounded-md flex  h-8 w-96  gap-x-2 items-center justify-start ">
            <Image src={serch} alt='image' width={25} height={25} />
            <input type="email" name="email" className=" outline-0	 " placeholder="What are you looking for" />




          </div>
          <div>
            <Image src={shop} alt='image' width={35} height={35} className="hover:scale-105 duration-300"/>

          </div>
        </div>


      </main>
    </Wrapper>

  </>
}
