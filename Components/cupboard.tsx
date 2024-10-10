import Image from 'next/image'
import React from 'react'

Image

const Cupboard = () => {
    return (
        <div>
        <div className='flex px-32 h-fit w-full mt-10 gap-10 mb-10 flex-1'>
            <div className='mt-10'>
            <div style={{ position: 'relative' }}>
            <Image src="/ecom/a/s2.png"
                className='rounded-xl'
                height={1000} 
                width={500} 
                alt='Raza'
            />
            </div>
                </div>
            <div className='h-[50rem] w-full bg-gray-50'>
            <div className='flex justify-between'>
            <div>
            <h1 className='text-2xl font-bold'>Food Cupboard</h1>
            <h1 className='border-b-2 border-[#0DA487] w-32 mt-4 mb-5'></h1>
            <h1 className='text-gray-800 mt-6 mb-6'>A virtual assistant collects the products from your list</h1>
            <div>
                <input className='h-96 w-[77rem] border-2 border-gray-200' type="text" name="" id="" />
            </div>
            </div>
            </div>
            <div className='flex w-fit border-1 border-gray-200 bg-white mt-10'>
            <div>
            <div style={{ position: 'relative' }}>
            <Image src="/ecom/a/m2.png"
                className='rounded-xl'
                height={500} 
                width={2000} 
                alt='Raza'
            />
            </div>
            <div className='w-full mt-10'>
            <div style={{ position: 'relative' }}>
            <div className='flex gap-5 bg-red-300text-xl'>
            <Image src="/ecom/a/m3a.png"
                className='rounded-xl'
                height={100} 
                width={800} 
                alt='Raza'
            />
            <Image src="/ecom/a/m3b.png"
                className='rounded-xl'
                height={100} 
                width={415} 
                alt='Raza'
            />
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
    

export default Cupboard