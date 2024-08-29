import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export let cartContext = createContext();
export default function CartContextProvider({children}) {
    const[cart,setCart] = useState(null);
    const[countLoading,setCountLoading] = useState(false);
    const[removeLoading,setRemoveLoading] = useState(false);
    
    async function addProductToCart(productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
                productId
            }, {
                headers:{
                    token: localStorage.getItem('userToken')
                }
            })
            toast.success(data.message);
            setCart(data)
            
        }catch (error) {
            console.log(error);

        }
    }
    async function updateProductCount(productId,count) {
        if (count > 0) {
            try {
                setCountLoading(true)
                let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                    count
                }, {
                    headers:{
                        token: localStorage.getItem('userToken')
                    }
                })
                setCart(data)
                setCountLoading(false)
            }catch (error) {
                console.log(error);
                setCountLoading(false)
            }
        }
    }
    async function deleteProduct(productId) {
        try {
            setRemoveLoading(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                headers:{
                    token: localStorage.getItem('userToken')
                }
            })
            setCart(data)
            setRemoveLoading(false)
            
        }catch (error) {
            console.log(error);
            setRemoveLoading(false)

        }
    }
    async function checkOut(shippingAddress) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`, {
                shippingAddress
            }, {
                headers:{
                    token: localStorage.getItem('userToken')
                }
            })
            window.location.href = data.session.url            
        }catch (error) {
            console.log(error);

        }
    }
    // async function checkOutCash(shippingAddress) {
    //     try {
    //         let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cart.data._id}`, {
    //             shippingAddress
    //         }, {
    //             headers:{
    //                 token: localStorage.getItem('userToken')
    //             }
    //         })
    //         console.log(data);
    //         Navigate('/allorders')
    //     }catch (error) {
    //         console.log(error);

    //     }
    // }
    async function deleteCart() {
        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers:{
                    token: localStorage.getItem('userToken')
                }
            })
            setCart(null)
            
        }catch (error) {
            console.log(error);

        }
    }


    return<cartContext.Provider value={{ removeLoading , countLoading , addProductToCart,setCart,cart,updateProductCount , deleteProduct , checkOut , deleteCart }}>
        {children}
    </cartContext.Provider>
}