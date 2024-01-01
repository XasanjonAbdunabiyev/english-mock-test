import React from "react"
import Slider from "react-slick"
import { slides } from "@/db/carusel-data"
import { Box } from "@chakra-ui/react"
export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Slider {...settings}>
            {slides?.map(({ id, imageUrl }) => (
                <Box key={id} mx={3} px={3}>
                    <img
                        className="w-full h-[350px] max-[700px]:h-[300px] max-[500px]:h-full object-cover"
                        src={imageUrl}
                    />
                </Box>
            ))}
        </Slider>
    )
}
