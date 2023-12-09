
import React from 'react';
import Slider from 'react-slick';
import { slides } from "../../db/carusel-data";
export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='px-7 rounded-md '>
            <Slider {...settings}>
                {slides?.map(({ id, imageUrl }) => (
                    <div key={id}>
                        <img
                            className='w-full h-[350px] max-[700px]:h-[250px] max-[500px]:h-full'
                            src={imageUrl}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

