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

    return (
        <Box pt={6} className="mb-6" py={20}> 
            <Box className="flex justify-between">
                <Box>
                    
                </Box>
            </Box>
        </Box>
    )
}
