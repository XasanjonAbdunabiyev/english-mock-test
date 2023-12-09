import { lazy } from "react";

const Logo = lazy(() =>
  import("../components/UI/Logo").then((module) => {
    return { default: module.Logo };
  })
);

import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const PageHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="p-4 bg-white bg-opacity-25 backdrop-blur-xl sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Logo />
          </div>
          <nav>
            <Button colorScheme="blue" onClick={() => navigate("/login")}>
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
