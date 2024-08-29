import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import { cartContext } from '../Context/cartContext'

export default function useCart() {
    // const fetchData = function addProductToCart(productId) {
    //     return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
    //         productId
    //     }, {
    //         headers:{
    //             token : localStorage.getItem('userToken')
    //         }
    //     })
    // }
    // const{data,refetch} = useQuery('cart',fetchData,{
    //     enabled:false,
    //     select:(data)=>data?.data.data
    // })
    // const getCart = (productId)=>refetch({
    //   queryKey:['cart',productId],
    //   queryFn: ()=> fetchData(productId)
    // })
    // return {data,getCart}

    let {setCart} = useContext(cartContext);
    async function getCart() {
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers:{
                    token: localStorage.getItem('userToken')
                }
            })
            setCart(data)
            // console.log(data);
            return data
            
    }

    let response = useQuery({
        queryKey:['cart'],
        queryFn: getCart,
        select:(data)=>data?.data.data
      })
  
    return response 

}