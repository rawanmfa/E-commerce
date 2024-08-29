import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import Loader from '../Loader/Loader';
import { wishlistContext } from '../../Context/wishlistContext';
import { cartContext } from '../../Context/cartContext';
import SpecificCategory from '../SpecificCategory/SpecificCategory';

export default function ProductDetails() {

    let { id } = useParams();
    const [productDetails, setProductDetails] = useState({})
    const [imgDetails, setImgDetails] = useState([])
    const [loading, setLoading] = useState(true);
    let { addWishlist } = useContext(wishlistContext);
    let { addProductToCart } = useContext(cartContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };

    async function getProductDetails(id) {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        setProductDetails(data.data)
        setImgDetails(data.data.images)
        setLoading(false)
    }

    useEffect(() => {
        getProductDetails(id);
    }, [])


    return <>
        {loading ? <div className=' flex justify-center py-32'>
            <Loader />
        </div>
            : <>
                <div className=' flex items-center justify-center py-10'>
                    <div className=' w-2/5 lg:w-1/4 p-5'>
                        {imgDetails.length == 1 ? <img src={imgDetails} className=' w-full' alt={productDetails.title} /> :
                            <Slider {...settings}>
                                {imgDetails?.map((image, index) => <img src={image} key={index} className=' w-full' alt={productDetails.title} />)}
                            </Slider>}
                    </div>
                    <div className=' w-3/5 lg:w-2/4 p-5 relative'>
                        <div onClick={() => { addWishlist(id) }} className=' absolute top-4 right-3 my-icon w-[35px] h-[35px] flex items-center justify-center cursor-pointer rounded-full'><i className="fa-regular fa-heart"></i></div>
                        <h2>{productDetails.title}</h2>
                        <p className=' text-sm text-gray-500 my-5'>{productDetails.description}</p>
                        <h3>{productDetails.category?.name}</h3>
                        <div className=' flex justify-between my-4'>
                            <h3>{productDetails.price} EGP</h3>
                            <h3><i className=' fas fa-star rating-color'></i>{productDetails.ratingsAverage}</h3>
                        </div>
                        <button onClick={() => addProductToCart(id)} className=' btn w-full bg-main rounded text-white py-1'>Add To Cart</button>
                    </div>
                </div>
                <div className='mt-5 mb-10'>
                    <SpecificCategory specificCatId={productDetails.category._id}/>
                </div>
            </>}
    </>
}