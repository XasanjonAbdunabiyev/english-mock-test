import { Box } from "@chakra-ui/react"
import { Progress } from "@chakra-ui/react"
export function SliderMark({ initialProgress }) {
    return (
        <Box pt={6} className="mb-6" py={20}>
            <Progress className="my-3" value={initialProgress} />
            <Box className="flex justify-between">
                <Box className="bg-blue-600 h-20 rounded-full flex items-center py-2 px-4 font-bold text-white">
                    Part One
                </Box>
                <Box className="bg-blue-600 h-20 rounded-full flex items-center py-2 px-4 font-bold text-white">
                    Part Two
                </Box>
                <Box className="bg-blue-600 h-20 rounded-full flex items-center py-2 px-4 font-bold text-white">
                    Part Three
                </Box>
            </Box>
        </Box>
    )
}
