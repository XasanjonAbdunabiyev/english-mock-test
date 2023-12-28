import React, { useState, useEffect } from "react"
import { Button } from "@chakra-ui/react"

import { GoMoveToTop } from "react-icons/go"

export const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false)

    const handleScroll = () => {
        // Show the button when the user scrolls down
        setShowButton(window.scrollY > 100)
    }

    const scrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        // Add a scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll)

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <Button
            onClick={scrollToTop}
            visibility={showButton ? "visible" : "hidden"}
            position="fixed"
            bottom="4"
            rightIcon={<GoMoveToTop />}
            right="4"
        >
            Scroll to Top
        </Button>
    )
}
