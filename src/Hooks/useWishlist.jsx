import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function useWishlist() {

    function getWishlist() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:{token: localStorage.getItem('userToken')}})
    }
    let response = useQuery({
      queryKey:['wishlist'],
      queryFn: getWishlist,
      select:(data)=>data?.data.data
    })

  return response
}