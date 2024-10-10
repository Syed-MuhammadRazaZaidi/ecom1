import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaFlagUsa } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiFlashOutline } from "react-icons/ti";

const Header = () => {
  return (
    <>
        <div className='mb-5'>
        <ul className='flex items-center justify-between px-32 bg-[#0DA487] h-12 w-full text-gray-50'>
        <li className='flex items-center gap-2'><CiLocationOn /> 1418 Riverwood Drive, CA 96052, US</li>
        <li>Something you love is now on sale! <u>Buy Now!</u></li>
        <li className='flex items-center gap-2 '><FaFlagUsa /> English <RiArrowDropDownLine className='text-2xl font-thin'/> | <p className='ml-2'>USD</p> <RiArrowDropDownLine className='text-2xl font-thin'/></li>
        </ul>
        <ul className='flex items-center justify-between px-32  gap-2 h-20 w-full'>
            <li className='flex text-4xl text-[#0DA487] font-bold'>Fast<p className='text-black'>Kart</p>.</li>
            <li className='flex items-center justify-center gap-2 h-[3.75rem] border-2 border-gray-100 ml-10 font-bold text-[#0DA487] px-2'><p className='bg-gray-100 h-6 w-6 flex items-center justify-center'><CiLocationOn/></p> <p className='w-[7rem]' >Your location</p> <RiArrowDropDownLine className='text-2xl font-extrabold'/></li>
        <div className='flex w-[46rem]'>
        <input className='border-2 border-gray-100 w-[52rem] p-4 font-semibold' type="text" name="" id="" placeholder="I'm searching for..." />
        <li className='h-15 w-20 rounded-sm border-2 border-gray-100 text-white text-xl font-extrabold bg-orange-400 flex items-center justify-center'><CiSearch /></li>
        </div>
        <div className='w-[300rem]'>
        <ul className='flex items-center justify-center gap-2'>
          <ul className='flex items-center justify-center gap-2 text-2'><li className='text-xl'>< FiPhoneCall /></li>
          <ul className='block items-center justify-center leading-4 ml-2'>
          <li>24/7 Delivery</li>
          <li className='m-1 font-semibold'>+00 000 000 0000</li>
          </ul>
          </ul>
          <ul className='flex items-center justify-center gap-4 text-lg'>
          <li className='flex items-center justify-center gap-2 text-xl'>| <p className='ml-1'><IoIosHeartEmpty /></p></li>
          <li className='flex items-center justify-center gap-2 text-xl'>| <p className='ml-1'><LuShoppingCart /></p></li>
          <li className='flex items-center justify-center gap-2 text-xl'>| <p className='ml-1'><MdOutlineAccountCircle /></p></li>
          <ul className='block items-center justify-center leading-4 ml-2'>
          <li>Hello</li>
          <li className='mt-1 font-semibold'>My Account</li>
          </ul>
          </ul>
        </ul>
        </div>
        </ul>
        <ul className='flex items-center justify-between px-32 gap-2 h-20 w-full'>
        <button className='flex gap-2 items-center justify-center h-12 w-52 bg-[#0DA487] text-[18px] font-semibold text-gray-100 rounded-sm'><CgMenuLeftAlt className='text-xl font-bold' /> All Categories</button>
          <nav className='flex items-center justify-between w-96 gap-10 mr-96 font-semibold'>
            <li className='flex items-center justify-between'>Home <RiArrowDropDownLine className='text-2xl font-extrabold'/></li>
            <li className='flex items-center justify-between'>Shop <RiArrowDropDownLine className='text-2xl font-extrabold'/></li>
            <li className='flex items-center justify-between'>Product <RiArrowDropDownLine className='text-2xl font-extrabold'/></li>
            <li className='flex items-center justify-between'><p className='w-24'>Mega Menu</p> <RiArrowDropDownLine className='text-2xl font-extrabold'/></li>
            <li className='flex items-center justify-between'>Blog <RiArrowDropDownLine className='text-2xl font-extrabold'/></li>
            <li className='flex items-center justify-between'>Pages <RiArrowDropDownLine className='text-2xl font-extrabold'/></li>
            <li className='flex items-center justify-between'>Seller <RiArrowDropDownLine className='text-2xl font-extrabold'/></li>
          </nav>
        <button className='flex items-center justify-center  gap-2 h-14 w-40 bg-green-100 text-[#0DA487]'><TiFlashOutline className=' text-2xl font-light' /> Deal Today</button>
        </ul>
        </div>
    </>
  )
}

export default Header