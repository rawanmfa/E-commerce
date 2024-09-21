import React from 'react'
import Slider from "react-slick";
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'

export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };

    return <>
        <div className=' my-8 flex'>
            <div className=' w-3/4'>
                <Slider {...settings}>
                    <img src={slider3} alt='' className=' h-[300px] sm:h-[400px] w-full' />
                    <img src={slider1} alt='' className=' h-[300px] sm:h-[400px] w-full' />
                    <img src={slider2} alt='' className=' h-[300px] sm:h-[400px] w-full' />
                </Slider>
            </div>
            <div className=' w-1/4'>
                <img src={slider1} alt='' className=' h-[150px] sm:h-[200px] w-full' />
                <img src={slider2} alt='' className=' h-[150px] sm:h-[200px] w-full' />
            </div>
        </div>
    </>
}