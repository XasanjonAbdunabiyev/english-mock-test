import React from "react"

import { Box, Text, Link } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box mt={2} borderTop="1px solid" py={4} as="footer" borderColor="gray">
            <Text marginRight={4} my={3}>
                &copy; Copyright 2022
            </Text>
            <Box className="flex items-center justify-between max-[815px]:flex-col max-[815px]:items-start gap-5">
                <Box className="font-lg">
                    <Link href="#" mx="2">
                        MultiLevel.uz
                    </Link>
                    <Link href="#" mx="2">
                        Services Licensed
                    </Link>
                    <Link href="#" mx="2" marginRight={6}>
                        № 154864
                    </Link>
                </Box>

                <Box className="font-lg">
                    <Link href="#" mx="2">
                        MultiLevel.uz
                    </Link>
                    <Link href="#" mx="2">
                        About Us
                    </Link>
                    <Link href="#" mx="2">
                        Services
                    </Link>
                    <Link href="#" mx="2" marginRight={6}>
                        Contact Us
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
