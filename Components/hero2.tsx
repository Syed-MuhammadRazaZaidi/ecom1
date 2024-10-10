import React from 'react'
import { GoClock } from "react-icons/go";

const Hero2 = () => {
  return (
    <div>
        <div className='flex px-32 h-full w-full mt-10 gap-10 flex-1'>
            <div className='h-[45rem] w-[32rem] bg-gray-100 p-10 text-xl'>
                <h1>Category</h1>
                <h1 className='border-b-2 border-[#0DA487] w-12 mt-1 mb-5'></h1>
                <div>
                <h1>Vegetables & Fruit</h1>
                <h1 className='mt-4'>Beverages</h1>
                <h1 className='mt-4'>Meats & Seafood</h1>
                <h1 className='mt-4'>Breakfast & Dairy</h1>
                <h1 className='mt-4'>Frozen Foods</h1>
                <h1 className='mt-4'>Biscuits & Snacks</h1>
                <h1 className='mt-4'>Biscuits & Snacks</h1>
                <h1 className='mt-4'>Wines & Alcohol Drinks</h1>
                <h1 className='mt-4'>Milk & Dairies</h1>
                <h1 className='mt-4'>Pet Foods</h1>
                <h1 className='border-b-2 border-gray-300 w-full mt-5 mb-5'></h1>
                <h1 className='mt-4'>Value of the Day</h1>
                <h1 className='mt-4'>Top 50 Offers</h1>
                <h1 className='mt-4'>New Arrivals</h1>
                </div>
                </div>
            <div className='h-[50rem] w-full bg-gray-50'>
            <div className='flex justify-between'>
            <div>
            <h1 className='text-2xl font-bold'>Top Save Today</h1>
            <h1 className='border-b-2 border-[#0DA487] w-32 mt-4 mb-5'></h1>
            <h1 className='text-gray-800 mt-6'>Don't miss this opportunity at a special discount just for this week.</h1>
            </div>
            <div className='flex h-10 m-12 text-white'>
                <button className='flex items-center justify-center w-[14rem] bg-red-500 gap-2 rounded-lg'><GoClock /> Expires in: 14 : 23 : 59 : 55</button>
            </div>
            </div>
            <div className='flex w-full border-1 border-gray-200 bg-white'>
              <div className='h-80 w-60 border-2 border-gray-200'>1</div>
              <div className='h-80 w-60 border-2 border-gray-200'>2</div>
              <div className='h-80 w-60 border-2 border-gray-200'>3</div>
              <div className='h-80 w-60 border-2 border-gray-200'>4</div>
              <div className='h-80 w-60 border-2 border-gray-200'>5</div>
            </div>
            <div className='flex border-2 border-gray-200 bg-white'>
              <div className='h-80 w-60 border-2 border-gray-200'>6</div>
              <div className='h-80 w-60 border-2 border-gray-200'>7</div>
              <div className='h-80 w-60 border-2 border-gray-200'>8</div>
              <div className='h-80 w-60 border-2 border-gray-200'>9</div>
              <div className='h-80 w-60 border-2 border-gray-200'>10</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero2