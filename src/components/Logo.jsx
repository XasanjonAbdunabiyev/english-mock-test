import React from 'react'
import { Image } from '@chakra-ui/react'
import logo from "../assets/images/logo.svg"

export const Logo = () => {
    return (
        <Image objectFit="cover"  boxSize='57%' src={logo} alt="logo" />
    )
}
