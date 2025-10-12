import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/cartContext'
import ThankYouPage from '../../assets/images/Thank-You-Page.png'

export default function AllOrders() {

  let { deleteCart } = useContext(cartContext);
  useEffect(() => {
    deleteCart()
  }, [])

  return <>

    <div className=' my-10'>
      <p className=' text-green-700 md:text-lg mt-20 mb-5 text-center'>Thank you for using FreshCart your order will be shiped soon 🎉🎉🎉</p>
      <img src={ThankYouPage} alt="Thank-You-Page" className=' w-3/4 m-auto lg:h-[500px]' />
    </div>
  </>
}