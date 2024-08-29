import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'
import useWishlistadd from '../../Hooks/useWishlistadd';
import { wishlistContext } from '../../Context/wishlistContext';

export default function Products({ product }) {

  let { addProductToCart } = useContext(cartContext);
  let { addWishlist } = useContext(wishlistContext);

  // let {refetch} = useWishlistadd();

  // function addWish() {
  //   refetch({
  //     queryKey: ['wishlistadd' , product.id],
  //     queryFn: ()=>addWishlist(product.id)
  //   })
  // }
  return <>

    <div className="w-1/2 md:w-1/4 lg:w-1/6 product px-2 py-2 rounded relative">
      <div onClick={() => { addWishlist(product.id) }} className=' absolute bottom-32 right-3 my-icon w-[35px] h-[35px] flex items-center justify-center cursor-pointer rounded-full'><i className="fa-regular fa-heart"></i></div>
      <Link to={`/productdetails/${product.id}`}>
        <img src={product.imageCover} className=' w-full' alt={product.title} />
        <h2 className=' text-main text-sm'>{product.category.name}</h2>
        <h2>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
        <div className=' flex justify-between mb-2'>
          <h3>{product.price} EGP</h3>
          <h3><i className=' fas fa-star rating-color'></i>{product.ratingsAverage}</h3>
        </div>
      </Link>
      <button onClick={() => addProductToCart(product.id)} className=' btn w-full bg-main rounded text-white py-1'>Add To Cart</button>
    </div>
  </>
}