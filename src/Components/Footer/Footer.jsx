import React, { useState } from 'react'

export default function Footer() {




  return <>

    <div className=' bg-gray-200 py-10 mt-5'>
      <div className=' w-[95%] mx-auto'>
        <h2 className=' text-2xl text-gray-700'>Get the FreshCart app</h2>
        <p className=' text-gray-500 text-sm'>We will send you a link, open it on your phone to download the app</p>
        <form className=" flex justify-around items-center my-4">
          <div className=" w-3/4">
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Email ..." />
          </div>
          <button className=' btn w-1/5 bg-main rounded text-white py-2'>Share App Link</button>
        </form>
        <div className=' border-y-2 border-gray-300 py-4 flex justify-between text-gray-700'>
          <div>
            <h3>Payment Partners</h3>
          </div>
          <div>
            <h3>Get deliveries with FreshCart</h3>
          </div>
        </div>
      </div>
    </div>

  </>
}