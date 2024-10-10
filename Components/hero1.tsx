import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero1 = () => {
  return (
    <div>
        <div className='flex px-32 h-fit w-full gap-10 flex-1'>
        <div style={{ position: 'relative' }}>
        <Image src="/ecom/1.png"
            className='rounded-3xl'
            height={500} 
            width={1100} 
            alt='Raza'
        />
        <div
            style={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        <div className='h-80 w-80'>
        <div className='flex h-15 w-50 items-center gap-3'>
        <h1 className='text-lg text-gray-400'>Exclusive offer</h1>
        <h1 className='text-lg font-extrabold text-red-600 bg-red h-6 px-3 items-center justify-center bg-red-300 rounded-lg opacity-50'>30% Off</h1>
        </div>
        <div className='mt-2 font-semibold leading-[3.5rem] tracking-tight h-20 w-[38rem] items-center justify-center text-gray-900'>
        <h1 className='text-[3rem]'>STAY HOME & DELIVERED</h1>
        <h1 className='text-[3rem]'>YOUR <b className='text-[#0DA487]'>DAILY NEEDS</b></h1>
        </div>
        <div className='h-80 w-[35rem] py-14'>
            <h1 className='text-lg text-gray-400'>Vegetables contain many vitamins and minerals that are good for
            your health.</h1>
            <button className='flex  items-center w-40 gap-2 p-4 justify-center bg-red-500 text-white text-sm mt-6'>Shop Now <FaArrowRightLong /></button>
        </div>
        </div>  
      </div>
    </div>
        <div className='h-full w-[35%] flex-1'>
            <div className='h-[21rem] w-full mb-11'>
            <Image src="/ecom/2.png"
            className='rounded-3xl'
            height={500} 
            width={1100} 
            alt='Raza'
        />    
        </div>  
        <div className='h-[21rem] w-full'>
            <Image src="/ecom/3.png"
            className='rounded-3xl'
            height={500} 
            width={1000} 
            alt='Raza'
        />
        </div>
        </div>
        </div>
        <div className='flex px-32 gap-10 h-60 w-full mt-10'>
        <div className='h-[15rem] w-[25rem]'>
            <Image src="/ecom/4.png"
            className='rounded-xl'
            height={1} 
            width={400} 
            alt='Raza'
        />
        </div>
        <div className='h-[15rem] w-[25rem]'>
            <Image src="/ecom/5.png"
            className='rounded-xl'
            height={200} 
            width={400} 
            alt='Raza'
        />
        </div>
        <div className='h-[15rem] w-[25rem]'>
            <Image src="/ecom/6.png"
            className='rounded-xl'
            height={200} 
            width={400} 
            alt='Raza'
        />
        </div>
        <div className='h-[15rem] w-[25rem]'>
            <Image src="/ecom/7.png"
            className='rounded-xl border-10 border-white'
            height={200} 
            width={400} 
            alt='Raza'
        />
        </div>
        </div>
    </div>
  )
}

export default Hero1