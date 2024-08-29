import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function useWishlistadd() {

    async function addWishlist(productId) {
        let data = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            productId
        }, {
            headers: {
                token: localStorage.getItem('userToken')
            }
        })
        toast('item added to your wishlist');
        return data
    }
    let response = useQuery({
        queryKey: ['wishlistadd'],
        queryFn: ()=>addWishlist(),
        select: (data) => data?.data.data,
        enabled:false
    })

    return response
}