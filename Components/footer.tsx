import Image from 'next/image'
import React from 'react'
Image

const Footer = () => {
  return (
    <div>
       <div>
        <div className='w-full mt-10'>
        <div style={{ position: 'relative' }}>
        <Image src="/ecom/a/footer.png"
            height={2000} 
            width={2000} 
            alt='Raza'
        />
          <div
            style={{
          position: 'absolute',
          top: '33%',
          left: '14.60%',
          transform: 'translate(-50%, -50%)',
          color: 'gray',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <div className=' text-gray-700 w-60'>
        <li className='flex text-4xl text-[#0DA487] font-bold'>Fast<p className='text-black'>Kart</p>.</li>
        </div>
    </div>    
        <div
            style={{
          position: 'absolute',
          top: '33%',
          left: '36%',
          transform: 'translate(-50%, -50%)',
          color: 'gray',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <div className='h-48 w-full items-center mt-12 rounded-lg'></div>
        <div className='h-72 text-gray-700 w-60'>
            <h1>Categories</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Vegetables & Fruit</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Beverages</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Meats & Seafood</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Frozen Foods</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Biscuits & Snacks</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Grocery & Staples</h1>
        </div>
        <div
            style={{
          position: 'absolute',
          top: '73%',
          left: '163%',
          transform: 'translate(-50%, -50%)',
          color: 'gray',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <div className='h-72 text-gray-700 w-60'>
            <h1>Useful Links</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Home</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Shop</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Blog</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Contact Us</h1>
        </div>
    </div>    
        <div
            style={{
          position: 'absolute',
          top: '73%',
          left: '275%',
          transform: 'translate(-50%, -50%)',
          color: 'gray',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <div className='h-72 text-gray-700 w-60'>
            <h1>Help Center</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Your Order</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Your Account</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Track Order</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Your Wishlist</h1>
            <h1 className='text-sm text-gray-400 mt-4'>Search</h1>
            <h1 className='text-sm text-gray-400 mt-4'>FAQ</h1>
        </div>
    </div>    
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer