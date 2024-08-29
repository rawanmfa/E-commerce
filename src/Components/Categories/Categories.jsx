import React, { useState } from 'react'
import useCategory from '../../Hooks/useCategory'
import Loader from '../Loader/Loader';

export default function Categories() {

  let { data, isLoading } = useCategory();

  return <>
    {isLoading ? <div className=' flex justify-center py-32'>
      <Loader /></div> : <div className=' flex flex-wrap justify-center'>
        {data?.map((category, index) => <div className=' my-3 text-center cursor-pointer w-1/2 md:w-1/3 lg:w-1/4 product px-2 py-2 rounded' key={index}>
          <img src={category.image} className=' w-full h-[350px]' alt={category.name} />
          <h2>{category.name}</h2>
        </div>)}
      </div>
    }
  </>
}