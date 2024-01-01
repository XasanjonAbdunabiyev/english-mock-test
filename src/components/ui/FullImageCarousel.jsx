import { Swiper, SwiperSlide } from "swiper/react"

// Slider Module
import { Navigation } from "swiper/modules"

// Import Swiper Styles
import ("swiper/css")
import ("swiper/css/navigation")

// Slides static data
import { slides } from "@/db/carusel-data"
import { Image } from "@chakra-ui/react"
export const FullImageCarousel = () => {
    return (
        <Swiper
            spaceBetween={2}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            navigation={true}
            modules={[Navigation]}
        >
            {slides.map(({ imageUrl }) => (
                <SwiperSlide key={imageUrl}>
                    <Image src={imageUrl} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
