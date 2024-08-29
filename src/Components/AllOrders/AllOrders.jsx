import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/cartContext'

export default function AllOrders() {

    let{deleteCart} = useContext(cartContext);
    useEffect(()=>{
        deleteCart()
    },[])
    
  return <>
    
    <h1 className="text-3xl ">AllOrders</h1>
  
  </>
}