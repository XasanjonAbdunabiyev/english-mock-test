import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client'
import { App } from './app/App';
import "./assets/styles/globals.css";
import { theme } from "./theme/config";

import "slick-carousel/slick/slick.css";
import { BrowserRouter } from "react-router-dom"
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
)