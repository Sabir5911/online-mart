import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
export default function Fifth() {
  return <>

<div className='flex  justify-center ml-[500px] mt-32 '>

<h1 className='text-4xl font-bold max-w-lg -mb-12 '>Unique and Authentic Vintage Designer <br /> Jewellery</h1>

</div>
<div className='bg-[#FBFCFF] '> 

<Wrapper >
{/* // first box */}

<div className='grid grid-cols-2 place-items-center    mt-5 h-96'>
{/* Main box */}

<div className='flex justify-around  gap-x-16 '>

<div className='flex flex-col gap-14'>
    <div>
    <h1 className='text-lg font-bold'>Using Good Quality <br /> Materials</h1>
<p className='text-sm mt-2'>Lorem ipsum dolor sit amt <br/> consectetur adipiscing elit.</p>

    </div>
<div>
<h1 className='text-lg font-bold'>Modern Fashion Design</h1>
<p className='text-sm mt-2'>Lorem ipsum dolor sit amt <br /> consectetur adipiscing elit.</p>
</div>


</div>

{/* second */}
<div className='flex flex-col gap-14'>
    <div>
    <h1 className='text-lg font-bold'>100% Handmade <br /> Products</h1>
<p className='text-sm mt-2'>Lorem ipsum dolor sit amt <br/> consectetur adipiscing elit.</p>

    </div>
<div>
<h1 className='text-lg font-bold'>Discount for Bulk Orders</h1>
<p className='text-sm mt-2'>Lorem ipsum dolor sit amt <br/> consectetur adipiscing elit.</p>
</div>


</div>

    </div>
{/* secondbox */}
    <div className=' flex justify-center items-center gap-x-12'>
    <Image src={'/assets/girl5.png'} alt='12' width={250} height={250} />
    <div >
        <p className='text-sm text-slate-700 tracking-widest    font-normal max-w-2xl'>
        This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.
         The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
        </p>
        <button className='bg-black text-white font-semibold mt-6 px-4 py-2'>See all products</button>
    </div>
</div>

</div>
        
{/* second box */}

</Wrapper>

</div>

  
  </>
}
