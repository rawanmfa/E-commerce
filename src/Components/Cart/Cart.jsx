import React, { useContext, useState } from 'react'
import useCart from '../../Hooks/useCart'
import { cartContext } from '../../Context/cartContext';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

export default function Cart() {

  let { data , isLoading } = useCart();
  // console.log(data);
  
  let { cart, updateProductCount, countLoading, deleteProduct, removeLoading } = useContext(cartContext);
  return <>

    {isLoading ? <div className=' flex justify-center py-32'>
      <Loader /></div> : cart?<div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-3/4 lg:mx-auto mt-10 mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.data.products.map((product) => <tr key={product.product.id} className="bg-white border-b  hover:bg-gray-50 ">
              <td className="p-4">
                <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                {product.product.title}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <button onClick={() => updateProductCount(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  " type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                    </svg>
                  </button>
                  <div>
                    {countLoading ? <i class="fa-solid fa-spinner fa-spin"></i> :
                      <span>{product.count}</span>}
                  </div>
                  <button onClick={() => updateProductCount(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  " type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-3 py-4 font-semibold text-gray-900">
                {product.price} EGP
              </td>
              <td className="px-6 py-4">
                {removeLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : <button onClick={() => deleteProduct(product.product.id)} className="font-medium text-red-600 hover:underline">Remove</button>
                }
              </td>
            </tr>
            )}
          </tbody>
        </table>
        <div className=' p-3 text-2xl text-center'>
          <h3>Total price: <span className=' text-red-900'>{cart.data.totalCartPrice}</span></h3>
        </div>
      </div>
      <div className=' flex justify-center items-center mb-8'>
        <Link to='/checkout' className=' bg-main py-4 px-7 text-white rounded-lg'>Check out</Link>
      </div>
    </div>: <div className=' text-2xl py-16 text-center text-gray-400'>cart is empty</div>}

  </>
}