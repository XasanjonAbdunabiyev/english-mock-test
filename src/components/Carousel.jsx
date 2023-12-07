
import React from 'react';
import Slider from 'react-slick';
import { slides } from "../db/carusel-data";
export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='py-2 flex flex-col p-7 rounded-md'>
            <Slider {...settings}>
                {slides?.map(({ id, imageUrl }) => (
                    <div key={id} className='w-full'>
                        <img
                            className='object-cover'
                            src={imageUrl}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

