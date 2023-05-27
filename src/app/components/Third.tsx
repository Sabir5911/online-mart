import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'

export default function Third() {
    return <>
        <section>
            <Wrapper>
  
                <div className='flex flex-col justify-center items-center mt-32 gap-y-4' >
                    <text className='text-[#0062F5] font-semibold'>PROMOTIONS</text>
                    <h1 className='text-4xl font-semibold'>Our Promotions Events
                    </h1>
                </div>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className='flex flex-col justify-center items-center gap-3'>

                            <div className='bg-[#D6D6D8] flex justify-around items-center w-[550px]  '>
                                <div>
                                    <h1 className='text-4xl font-bold max-w-[220px]'>
                                        GET UP TO 60%
                                    </h1>
                                    <text className='text-lg pt-3 font-semibold'>
                                        For the summer <br /> season
                                    </text>
                                </div>
                                <div>
                                    <Image src={'/assets/girl2.webp'} alt='sa' width={250} height={250} />
                                </div>
                            </div>

<div>
<div className='bg-[#212121] flex flex-col justify-center items-center w-[550px] pt-9 '>
                                    <h1 className='text-4xl font-bold  text-white'>
                                        GET  30% Off
                                    </h1>
                                    <text className='text-lg pt-3 font-medium text-white'>
                                    USE PROMO CODE</text>

                                    <button className='bg-[#474747] text-white px-24 rounded-md py-2 text-lg font-bold my-5'>
                                    DINEWEEKENDSALE
                                    </button>
    
</div>
</div>


                        </div>
                    </div>



                </div>

            </Wrapper>


        </section>



    </>

}
