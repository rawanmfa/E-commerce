import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import useWishlist from "../Hooks/useWishlist";

export let wishlistContext = createContext();
export default function WishlistContextProvider({ children }) {

    const [removeLoadingWishlist, setRemoveLoadingWishlist] = useState(false);
    let{refetch} = useWishlist()

    async function addWishlist(productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                productId
            }, {
                headers: {
                    token: localStorage.getItem('userToken')
                }
            })
            toast('item added to your wishlist');

        } catch (error) {
            console.log(error);
            
        }
    }
    async function deleteProductFromWishlist(productId) {
        try {
            setRemoveLoadingWishlist(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                headers: {
                    token: localStorage.getItem('userToken')
                }
            })
            refetch();
            setRemoveLoadingWishlist(false);
        } catch (error) {
            console.log(error);
            setRemoveLoadingWishlist(false)

        }
    }


    return <wishlistContext.Provider value={{ addWishlist, deleteProductFromWishlist, removeLoadingWishlist}}>
        {children}
    </wishlistContext.Provider>
}