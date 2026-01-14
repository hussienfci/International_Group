'use client'

import React, { useEffect, useState } from 'react'
import ProductList from '@/app/_components/ProductList'
import Navbar from '@/app/_components/Navbar'
import Footer from '@/app/_components/Footer'


function ProductsContent() {
  
  const [products , setProd] = useState(null)

  useEffect(()=>{
    async function fetchData() {
      const data = await fetch('https://fakestoreapi.com/products')
      const res = await data.json() ; 
      // console.log(res);
      
      setProd(res) ; 

    } 
    fetchData()
  } , [])
  

  if (!products)
    return <div>Loading....!</div>


  return (
    <div className='bg-white'>
      <Navbar/>
         <ProductList prod={products}/>
      <Footer/>
    </div>
  )
}

export default ProductsContent
