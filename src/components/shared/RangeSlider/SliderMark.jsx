import { useState } from "react"
import {
    Box,
    Slider,
    SliderMark as SliderMarkChakra,
    SliderThumb,
    SliderFilledTrack,
    SliderTrack,
} from "@chakra-ui/react"

export function SliderMark() {
    const [sliderValue, setSliderValue] = useState(50)

    const labelStyles = {
        mt: "2",
        ml: "-2.5",
        fontSize: "sm",
    }

    return (
        <Box pt={6} pb={2}>
            <Slider
                aria-label="slider-ex-6"
                onChange={(val) => setSliderValue(val)}
            >
                <SliderMarkChakra value={25} {...labelStyles}>
                    Part One
                </SliderMarkChakra>
                <SliderMarkChakra value={50} {...labelStyles}>
                    Part Two
                </SliderMarkChakra>
                <SliderMarkChakra value={75} {...labelStyles}>
                    Part Three
                </SliderMarkChakra>
                <SliderMarkChakra
                    value={sliderValue}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                >
                    {sliderValue}%
                </SliderMarkChakra>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </Box>
    )
}
