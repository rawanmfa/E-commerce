import React, { useEffect, useState } from 'react'
import Products from '../Products/Products';
import Loader from '../Loader/Loader';
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import useProduct from '../../Hooks/useProduct';

export default function Home() {

  let { data, isLoading } = useProduct()

  return <>

    <MainSlider />
    <CategorySlider />
    {isLoading ? <div className=' flex justify-center py-32'>
      <Loader /></div> : <div className=' flex flex-wrap justify-center'>
      {data.map((product, index) => <Products key={index} product={product} />)}
    </div>}

  </>
}