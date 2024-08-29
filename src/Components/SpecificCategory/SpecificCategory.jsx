import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { cartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";
import { wishlistContext } from "../../Context/wishlistContext";

export default function SpecificCategory({ specificCatId }) {

    const [specificCat, setSpecificCat] = useState([]);
    let { addProductToCart } = useContext(cartContext);
    let { addWishlist } = useContext(wishlistContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    async function getSpecificCat(catId) {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${catId}`);
            setSpecificCat(data.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSpecificCat(specificCatId);
    }, [])

    return <>
        <div className="slider-container pb-10">
            <h2 className=" text-[40px]">You may also like:</h2>
            <Slider {...settings}>
                {specificCat?.map((cate, index) => <div key={index} className=" product hover:border-0 relative">
                <div onClick={() => { addWishlist(cate._id) }} className=' absolute bottom-24 right-3 my-icon w-[35px] h-[35px] flex items-center justify-center cursor-pointer rounded-full'><i className="fa-regular fa-heart"></i></div>
                    <Link to={`/productdetails/${cate._id}`}> {/* it doesn't go to the product details immediatly i have to refresh the page from crome for it so the data shows*/}
                        <img src={cate.imageCover} alt={cate.title} />
                        <h2 className=" mx-4 mt-2">{cate.title.split(' ').slice(0, 2).join(' ')}</h2>
                        <div className=" flex justify-between items-center mx-4">
                            <h3 className=" text-red-900">{cate.price} EGP</h3>
                            <h3><i className=' fas fa-star rating-color'></i>{cate.ratingsAverage}</h3>
                        </div>
                    </Link>
                    <button onClick={() => addProductToCart(cate._id)} className=' btn w-full bg-main rounded text-white py-1'>Add To Cart</button>
                </div>)}
            </Slider>
        </div>
    </>
}
