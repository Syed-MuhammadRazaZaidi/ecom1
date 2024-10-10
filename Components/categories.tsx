import Image from 'next/image'
import React from 'react'
import { GoClock } from 'react-icons/go'
Image

const Categories = () => {
  return (
    <div>
    <div className='flex px-32 h-fit w-full gap-10 flex-1'>
        <div className='mt-10'>
        <div style={{ position: 'relative' }}>
        <Image src="/ecom/a/s1.png"
            className='rounded-xl'
            height={1000} 
            width={500} 
            alt='Raza'
        />
        </div>
            </div>
        <div className='h-[1rem] w-full bg-gray-50'>
        <div className='flex justify-between'>
        <div>
        <h1 className='text-2xl font-bold'>Browse By Categories</h1>
        <h1 className='border-b-2 border-[#0DA487] w-32 mt-4 mb-5'></h1>
        <h1 className='text-gray-800 mt-6'>Top Categories Of The Week</h1>
        </div>
        </div>
        <div className='flex w-fit border-1 border-gray-200 bg-white mt-80'>
        <div className='flex gap-5 bg-red-300text-xl'>
        <div style={{ position: 'relative' }}>
        <Image src="/ecom/a/m1a.png"
            className='rounded-xl'
            height={500} 
            width={700} 
            alt='Raza'
        />
        </div>
        <div style={{ position: 'relative' }}>
        <Image src="/ecom/a/m1b.png"
            className='rounded-xl'
            height={500} 
            width={700} 
            alt='Raza'
        />
        </div>
        </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Categories