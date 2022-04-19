import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
        <ToastContainer />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
