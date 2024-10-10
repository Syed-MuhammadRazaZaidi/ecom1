import Image from 'next/image'
import React from 'react'


const Blog = () => {
    return (
        <div>
            <div className='h-36 px-[33.5rem] pr-1 w-full'>
            <div className='flex justify-between w-full'>
            <div>
            <h1 className='text-2xl font-bold'>Featured Blog</h1>
            <h1 className='border-b-2 border-[#0DA487] w-32 mt-4 mb-5'></h1>
            <h1 className='text-gray-800 mt-6 mb-6'>A virtual assistant collects the products from your list</h1>
            <div className='flex w-fit border-1 border-gray-200 bg-white mt-8'>
            <div className='w-full'>
            <div style={{ position: 'relative' }}>
            <div className='flex gap-5 w-full text-xl'>
            <Image src="/ecom/a/m5a.png"
                className='rounded-xl'
                height={100} 
                width={400} 
                alt='Raza'
            />
            <Image src="/ecom/a/m5b.png"
                className='rounded-xl'
                height={100} 
                width={400} 
                alt='Raza'
            />
            <Image src="/ecom/a/m5c.png"
                className='rounded-xl'
                height={100} 
                width={400} 
                alt='Raza'
            />
            </div>
            <div className='flex gap-[16.5rem] mt-5'>
            <div>
                <h1>20 March, 2022 <br />
                <b>Fresh Vegetable Online</b></h1>
            </div>
            <div>
                <h1>10 April, 2022 <br />
                <b>Fresh Combo Fruit</b></h1>
            </div>
            <div>
                <h1>10 April, 2022 <br />
                <b>Nuts to Eat for Better Health</b></h1>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
      )
    }
    

export default Blog