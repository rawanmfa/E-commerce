import React, { useState } from 'react'
import error from '../../assets/images/error.svg'

export default function Notfound() {




  return <>
    <div className=' flex flex-col justify-center items-center pt-10'>
      <img src={error} alt="can't find this page" />
      <h1 className="text-3xl text-gray-200 mt-5">sorry,can't find this page</h1>
    </div>

  </>
}