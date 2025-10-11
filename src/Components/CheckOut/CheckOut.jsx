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
        <div className=' md:w-1/3 mx-auto py-10 bg-gray-50 my-16 rounded-3xl'>
            <h2 className=' text-2xl font-bold text-center'>ChekOut Now:</h2>
            <form className=' pt-5 flex flex-col gap-y-5' onSubmit={formik.handleSubmit}>
                <div className="relative z-0 w-4/5 mx-auto group">
                    <input type="text" name="details" id="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-2 w-full mx-auto text-sm text-gray-800 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
                    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Enter Your details</label>
                </div>
                <div className="relative z-0 w-4/5 mx-auto group">
                    <input type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-2 w-full mx-auto text-sm text-gray-800 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
                    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Enter Your city</label>
                </div>
                <div className="relative z-0 w-4/5 mx-auto group">
                    <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-2 w-full mx-auto text-sm text-gray-800 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Enter Your phone</label>
                </div>
                <div className=' flex justify-evenly items-center'>
                    <button type="submit" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Pay by Visa</button>
                    <span className=' text-gray-400'>or</span>
                    <Link to='/allorders' className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Pay Cash</Link>
                </div>
            </form>
        </div>
    </>
}