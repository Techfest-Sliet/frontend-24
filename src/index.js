import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/Auth/Auth";
import { BrowserRouter } from "react-router-dom";
import { LoaderProvider } from "./components/Loader/provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <LoaderProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LoaderProvider>
  </AuthContextProvider>
  </BrowserRouter>
);
