import React from "react";
import { Image } from "@chakra-ui/react";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
export const Logo = () => {
  const navigate = useNavigate();
  return (
    <Image
      objectFit="cover"
      onClick={() => navigate("/")}
      boxSize="57%"
      src={logo}
      alt="logo"
    />
  );
};
