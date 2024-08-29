import React, { useContext, useState } from 'react'
import freshCartLogo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../../Context/userContext';
import { cartContext } from '../../Context/cartContext';
import useCart from '../../Hooks/useCart';

export default function Navbar() {

  let navigate = useNavigate();
  let { userData, setUserData } = useContext(userContext);
  let{cart} = useContext(cartContext);
  useCart();
  function logout() {
    localStorage.removeItem('userToken')
    setUserData(null);
    navigate('/login')
  }

  return <>

    <div className=' bg-gray-200 py-2 md:fixed top-0 inset-x-0 z-[999]'>
      <div className=' w-[95%] mx-auto flex justify-between md:items-center'>
        <div className=' md:flex space-x-3 items-center'>
          <img src={freshCartLogo} width={120} alt="" />
          {userData && <ul className=' text-gray-500 md:flex md:space-x-3'>
            <li><NavLink to='home'>Home</NavLink></li>
            <li><NavLink to='productpage'>Products</NavLink></li>
            <li><NavLink to='categories'>Categories</NavLink></li>
            <li><NavLink to='brands'>Brands</NavLink></li>
            <li><NavLink to='wishlist'>Wishlist</NavLink></li>
            <li><NavLink to='cart'>Cart<div className=' inline-block text-main ms-1'><span>{cart? cart.numOfCartItems : 0}</span><i className="fa-solid fa-cart-shopping text-main mx-1"></i></div></NavLink></li>
          </ul>
          }
        </div>
        <div className=' flex space-x-3'>
          <ul className=' flex space-x-3'>
            <li><NavLink to=''><i className='fab fa-facebook-f'></i></NavLink></li>
            <li><NavLink to=''><i className='fab fa-linkedin-in'></i></NavLink></li>
            <li><NavLink to=''><i className='fab fa-youtube'></i></NavLink></li>
            <li><NavLink to=''><i className='fab fa-twitter'></i></NavLink></li>
            <li><NavLink to=''><i className='fab fa-instagram'></i></NavLink></li>
          </ul>
          <ul className=' flex space-x-3 text-gray-500'>
            {userData ? <li className=' cursor-pointer' onClick={()=>logout()}><span>logout</span></li> :
              <>
                <li><NavLink to=''>Register</NavLink></li>
                <li><NavLink to='login'>Login</NavLink></li>
              </>}
          </ul>
        </div>
      </div>
    </div>
  </>
}