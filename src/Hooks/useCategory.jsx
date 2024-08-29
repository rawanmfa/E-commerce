import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function useCategory() {

    function getCategories() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
    let response = useQuery({
      queryKey:['category'],
      queryFn: getCategories,
      select:(data)=>data?.data.data
    })

  return response
}