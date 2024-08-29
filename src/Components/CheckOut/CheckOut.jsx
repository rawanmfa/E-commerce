import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { cartContext } from '../../Context/cartContext'
import useCart from '../../Hooks/useCart';
import { Link } from 'react-router-dom';

export default function CheckOut() {

    let { checkOut } = useContext(cartContext);

    let formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: ''
        }, onSubmit: checkOut
    })

    return <>
        <div className=' w-1/2 mx-auto py-10'>
            <h2 className=' text-2xl'>ChekOut Now:</h2>
            <form className=' pt-5' onSubmit={formik.handleSubmit}>
                <div className="relative z-0 w-full my-8 group">
                    <input type="text" name="details" id="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  border-s-2 rounded-bl-lg border-gray-300 appearance-none dark:text-black dark:border-gray-900 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
                    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your details</label>
                </div>
                <div className="relative z-0 w-full my-8 group">
                    <input type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  border-s-2 rounded-bl-lg border-gray-300 appearance-none dark:text-black dark:border-gray-900 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
                    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your city</label>
                </div>
                <div className="relative z-0 w-full my-8 group">
                    <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  border-s-2 rounded-bl-lg border-gray-300 appearance-none dark:text-black dark:border-gray-900 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your phone</label>
                </div>
                <div className=' flex justify-between items-center'>
                <button type="submit" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Pay by Visa</button>
                <span className=' text-gray-400'>or</span>
                <Link to='/allorders' className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Pay Cash</Link>
                </div>
            </form>
        </div>
    </>
}