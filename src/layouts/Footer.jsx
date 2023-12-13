import React from "react"

import { Box, Text, Link } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box mt={2} borderTop="1px solid" py={4} as="footer" borderColor="gray">
            <Text marginRight={4} my={3}>
                &copy; Copyright 2022
            </Text>
            <div className="flex items-center justify-between max-[815px]:flex-col max-[815px]:items-start gap-5">
                <div className="font-lg">
                    <Link href="#" mx="2">
                        MultiLevel.uz
                    </Link>
                    <Link href="#" mx="2">
                        Services Licensed
                    </Link>
                    <Link href="#" mx="2" marginRight={6}>
                        № 154864
                    </Link>
                </div>

                <div className="font-lg">
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
                </div>
            </div>
        </Box>
    )
}
