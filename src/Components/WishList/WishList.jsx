import React, { useContext, useState } from 'react'
import useWishlist from '../../Hooks/useWishlist'
import Loader from '../Loader/Loader';
import { cartContext } from '../../Context/cartContext';
import { wishlistContext } from '../../Context/wishlistContext';

export default function WishList() {

  let { data, isLoading } = useWishlist();
  console.log(data);
  let { addProductToCart } = useContext(cartContext);
  let { deleteProductFromWishlist, removeLoadingWishlist } = useContext(wishlistContext);



  return <>

    {isLoading ? <div className=' flex justify-center py-32'>
      <Loader /></div> : data ? <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-3/4 lg:mx-auto mt-10 mb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Brand
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
              {data.map((product) => <tr key={product._id} className="bg-white border-b  hover:bg-gray-50 ">
                <td className="p-4">
                  <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.title} />
                </td>
                <td className="px-6 py-4 text-gray-900 w-56">
                  {product.title}
                </td>
                <td className="px-6 py-4 text-gray-900 ">
                  {product.brand.name}
                </td>
                <td className="px-6 py-4 text-gray-900 ">
                  {product.price} EGP
                </td>
                <td className="px-6 py-4 space-x-5">
                  <button onClick={() => addProductToCart(product._id)} className=' btn bg-main rounded text-white py-1 px-4'>Add To Cart</button>
                  {removeLoadingWishlist ? <i className="fa-solid fa-spinner fa-spin"></i> :
                    <button onClick={() => deleteProductFromWishlist(product._id)} className="font-medium text-red-600 hover:underline">Remove</button>
                  }
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> : <div className=' text-2xl py-16 text-center text-gray-400'>Your WishList is empty</div>}

  </>
}