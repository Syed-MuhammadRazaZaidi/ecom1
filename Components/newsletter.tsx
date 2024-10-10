import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div>
        <div>
        <div className='px-32 w-full mt-96'>
        <div style={{ position: 'relative' }}>
        <Image src="/ecom/a/newsletter.png"
            className='rounded-xl'
            height={2000} 
            width={2000} 
            alt='Raza'
        />
        <div
            style={{
          position: 'absolute',
          top: '50%',
          left: '32%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        <div className='h-48 w-full items-center mt-12 rounded-lg'>
        <h1 className='text-white text-2xl'>Join Our Newsletter And Get...</h1>
        <h1 className='text-yellow-500 text-lg mb-5 mt-1'>$20 discount for your first order</h1>
        <form className='flex gap-16 w-[30rem]'>
            <div className='flex text-[#0DA487] bg-white w-full'>
                <div className='ml-2 bg-gray-200 h-10 py-5 px-1 mt-1 flex items-center'><AiOutlineMail />
                </div>
          <input className='h-12 w-full ml-2 text-sm' type="email" placeholder="Enter Your Email" />
          <button className='flex  items-center  gap-2  p-2 border-2 border-white bg-red-400 text-white text-sm' type="submit">Subscribe <FaArrowRightLong /></button>
          </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter