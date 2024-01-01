import React, { useState } from "react"

import { Box } from "@chakra-ui/react"

export function Drobdown() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => setIsOpen(!isOpen)

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    return (
        <Box className="relative inline-block text-left">
            <svg
                className={`ml-2 -mr-0.5 h-4 w-4 transition-transform transform ${
                    isOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                ></path>
            </svg>
        </Box>
    )
}
