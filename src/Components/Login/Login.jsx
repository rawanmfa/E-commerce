import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { userContext } from '../../Context/userContext'

export default function Login() {

  const [apiError, setApiError] = useState(null);
  let navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  let { setUserData } = useContext(userContext)

  async function login(values) {
    try {
      setLoading(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values);
      localStorage.setItem('userToken', data.token);
      setUserData(data.token)
      navigate('/home')
    } catch (error) {
      setApiError(error.response.data.message);
      setLoading(false)
    }

  }
  let validationSchema = Yup.object().shape({
    email: Yup.string().email('email invalid').required('email is required'),
    password: Yup.string().matches(/^[A-Z]\w{5,10}$/, 'password invalid ex(Rawan123)').required('password is required'),
  })
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    }, validationSchema
    , onSubmit: login
  })

  return <>
    <div className=' md:w-1/3 mx-auto py-10 bg-gray-50 my-16 rounded-3xl'>
      <h2 className=' text-2xl font-bold text-center'>Login Now:</h2>
      <form className=' pt-5 flex flex-col gap-y-5' onSubmit={formik.handleSubmit}>
        {apiError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          {apiError}
        </div>}
        <div className="relative z-0 w-4/5 mx-auto group">
          <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-4 w-full mx-auto text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-black dark:border-gray-900 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Enter Your email</label>
        </div>
        {formik.errors.email && formik.touched.email && <div className=" text-sm text-red-800 mx-auto" role="alert">
          {formik.errors.email}
        </div>}
        <div className="relative z-0 w-4/5 mx-auto group">
          <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-4 w-full mx-auto text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-black dark:border-gray-900 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Enter Your password</label>
        </div>
        {formik.errors.password && formik.touched.password && <div className=" text-sm text-red-800 mx-auto" role="alert">
          {formik.errors.password}
        </div>}
        <div className=' flex justify-evenly items-center'>
          {loading ? <button type="button" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  sm:w-auto px-8 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"><i className=' fas fa-spinner fa-spin-pulse'></i></button>
            : <button type="submit" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  sm:w-auto px-8 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Login</button>}
          <Link to='/forgetpass' className=' text-xs hover:underline'>Forget Password</Link>
        </div>
      </form>
    </div>
  </>
}