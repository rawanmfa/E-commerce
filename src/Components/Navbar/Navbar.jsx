import React, { useContext, useState } from 'react'
import freshCartLogo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../../Context/userContext';
import { cartContext } from '../../Context/cartContext';
import useCart from '../../Hooks/useCart';

export default function Navbar() {

  const [clicked, setClicked] = useState(false);
  let navigate = useNavigate();
  let { userData, setUserData } = useContext(userContext);
  let { cart } = useContext(cartContext);
  useCart();
  function logout() {
    localStorage.removeItem('userToken')
    setUserData(null);
    navigate('/login')
  }

  return <>

    <div className=' bg-gray-200 py-2 lg:fixed top-0 inset-x-0 z-[999]'>
      <div className={` w-[95%] mx-auto flex justify-between ${clicked ? '' : 'items-center'}`}>
        <div className={`${clicked ? '' : 'items-center'} flex space-x-3`}>
          <button onClick={() => clicked ? setClicked(false) : setClicked(true)} data-collapse-toggle="navbar-hamburger" type="button" className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-hamburger" aria-expanded="false">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className= {`lg:flex space-x-3 items-center ${clicked?'pt-2':''}`} >
            <img src={freshCartLogo} width={120} alt="" />
            {userData && <ul className={`${clicked ? '' : 'hidden lg:flex'} text-gray-500 lg:flex  lg:space-x-3`} >
              <li><NavLink to='home'>Home</NavLink></li>
              <li><NavLink to='productpage'>Products</NavLink></li>
              <li><NavLink to='categories'>Categories</NavLink></li>
              <li><NavLink to='brands'>Brands</NavLink></li>
              <li><NavLink to='wishlist'>Wishlist</NavLink></li>
              <li><NavLink to='cart'>Cart<div className=' inline-block text-main ms-1'><span>{cart ? cart.numOfCartItems : 0}</span><i className="fa-solid fa-cart-shopping text-main mx-1"></i></div></NavLink></li>
            </ul>
            }
          </div>
        </div>
        <div className={` flex space-x-3 ${clicked?'pt-2':''}`} >
          <ul className=' flex space-x-3'>
            <li><NavLink to=''><i className='fab fa-facebook-f'></i></NavLink></li>
            <li><NavLink to=''><i className='fab fa-linkedin-in'></i></NavLink></li>
            <li><NavLink to=''><i className='fab fa-youtube'></i></NavLink></li>
            <li><NavLink to=''><i className='fab fa-twitter'></i></NavLink></li>
            <li><NavLink to=''><i className='fab fa-instagram'></i></NavLink></li>
          </ul>
          <ul className=' flex space-x-3 text-gray-500'>
            {userData ? <li className=' cursor-pointer' onClick={() => logout()}><span>logout</span></li> :
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