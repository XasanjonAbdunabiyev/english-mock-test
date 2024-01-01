import React from "react"

import { Box, Text, Link } from "@chakra-ui/react"

import { FaYoutube, FaTelegram } from "react-icons/fa"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <Box mt={2} borderTop="1px solid" py={4} as="footer" borderColor="gray">
            <Text marginRight={4} my={3}>
                &copy; Copyright {year}
            </Text>

            <Box className="flex items-center gap-x-10 mt-10">
                <Link
                    target="_blank"
                    href="https://t.me/ingliztilimtsschool"
                    display="flex"
                    alignItems="center"
                    gap="5"
                >
                    <FaTelegram fontSize={30} />
                    <span>Telegram Channel</span>
                </Link>

                <Link
                    target="_blank"
                    href="https://www.youtube.com/@MonsterEnglish"
                    display="flex"
                    alignItems="center"
                    gap="5"
                >
                    <FaYoutube fontSize={30} />
                    <span>Youtube Channel</span>
                </Link>
            </Box>
        </Box>
    )
}
