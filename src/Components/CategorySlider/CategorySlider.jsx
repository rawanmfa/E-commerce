import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import useCategory from '../../Hooks/useCategory';

export default function CategorySlider() {

    let { data } = useCategory()

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return <>
        <div className=' my-8'>
        <Slider {...settings}>
            {data?.map((category, index) => <div className=' my-3 text-center cursor-pointer ' key={index}>
                <img src={category.image} className=' w-full h-[250px]' alt={category.name} />
                <h2>{category.name}</h2>
            </div>)}
        </Slider>
        </div>
    </>
}