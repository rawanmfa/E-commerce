import React, { useState } from 'react'
import useBrands from '../../Hooks/useBrands';
import Loader from '../Loader/Loader';

export default function Brands() {

  let { data, isLoading } = useBrands();
    
  return <>
    
    {isLoading ? <div className=' flex justify-center py-32'>
      <Loader /></div> : <div className=' flex flex-wrap justify-center my-10'>
        {data?.map((brand, index) => <div className=' my-3 text-center w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2 rounded' key={index}>
          <img src={brand.image} className=' w-[90%] border h-[250px] cursor-pointer' alt={brand.name} />
        </div>)}
      </div>
    }

  </>
}