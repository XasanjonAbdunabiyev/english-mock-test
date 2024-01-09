import React from "react"
import { Image } from "@chakra-ui/react"
import logo from "@/assets/images/logo.png"
import { useNavigate } from "react-router-dom"
export const Logo = () => {
    const navigate = useNavigate()
    return (
        <Image
            cursor={"pointer"}
            objectFit="cover"
            onClick={() => navigate("/")}
            boxSize="57%"
            width={100}
            height={75}
            src={logo}
            alt="logo"
        />
    )
}
