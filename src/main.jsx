import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/main.css";
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./hooks/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
