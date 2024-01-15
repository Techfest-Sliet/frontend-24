import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { LoaderProvider } from "./components/Loader/provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoaderProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LoaderProvider>
  </BrowserRouter>
);
