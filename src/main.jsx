import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { App } from "./app/App";
import "./assets/styles/globals.css";
import { theme } from "./theme/config";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <Router>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </Router>
);
