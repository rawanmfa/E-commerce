import React, { useState } from 'react'
import useProduct from '../../Hooks/useProduct'
import Products from '../Products/Products'
import Loader from '../Loader/Loader'

export default function ProductPage() {

  let { data,isLoading } = useProduct()


  return <>

    {isLoading ? <div className=' flex justify-center py-32'>
      <Loader /></div> : <div className=' flex flex-wrap justify-center'>
      {data.map((product, index) => <Products key={index} product={product} />)}
    </div>}

  </>
}