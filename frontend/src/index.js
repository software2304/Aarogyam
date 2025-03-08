import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css';

import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './store/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AuthContextProvider>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </AuthContextProvider>

  </React.StrictMode>
);

