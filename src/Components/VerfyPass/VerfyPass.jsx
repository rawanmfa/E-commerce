import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function VerfyPass() {

    const [apiError, setApiError] = useState(null);
    let navigate = useNavigate()
    const [loading, setLoading] = useState(false);
  
    async function verfyPass(values) {
      try {
        setLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, values);
        navigate('/changepass')
      } catch (error) {
        setApiError(error.response.data.message);
        setLoading(false)
      }
  
    }
    let formik = useFormik({
      initialValues: {
        resetCode: '',
      }, onSubmit: verfyPass
    })
  
    return <>
      <div className=' w-1/2 mx-auto py-10'>
        <h2 className=' text-2xl'>Enter your verfication code</h2>
        <form className=' pt-5' onSubmit={formik.handleSubmit}>
          {apiError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            {apiError}
          </div>}
          <div className="relative z-0 w-full my-8 group">
            <input type="text" name="resetCode" id="resetCode" value={formik.values.resetCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  border-s-2 rounded-bl-lg border-gray-300 appearance-none dark:text-black dark:border-gray-900 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
            <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 ps-3 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your verfy Code</label>
          </div>
          {formik.errors.resetCode && formik.touched.resetCode && <div className="p-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            {formik.errors.resetCode}
          </div>}
            {loading ? <button type="button" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"><i className=' fas fa-spinner fa-spin-pulse'></i></button>
              : <button type="submit" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Verfy</button>}
        </form>
      </div>
      </>
  }