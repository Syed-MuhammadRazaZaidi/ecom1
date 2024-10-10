import Header from '@/Components/header'
import Hero1 from '@/Components/hero1'
import Hero2 from '@/Components/hero2'
import NewsLetter from '@/Components/newsletter'
import Footer from '@/Components/footer'
import React from 'react'
import Categories from '@/Components/categories'
import Cupboard from '@/Components/cupboard'
import Seller from '@/Components/seller'
import Blog from '@/Components/blog'

const page = () => {
  return (
    <div>
     <Header/>
     <Hero1/>
     <Hero2/>
     <Categories/>
     <Cupboard/>
     <Seller/>
     <Blog/>
     <NewsLetter/>
     <Footer/>
    </div>
  )
}

export default page