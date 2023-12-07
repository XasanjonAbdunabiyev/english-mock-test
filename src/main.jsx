import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client'
import { App } from './app/App';
import "./assets/styles/globals.css";
import { theme } from "./theme/config";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> 
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)