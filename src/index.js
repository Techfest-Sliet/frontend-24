import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/Auth/Auth";
import { BrowserRouter } from "react-router-dom";
import { LoaderProvider } from "./components/Loader/provider";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById("root"));

const THEME = createTheme({
  typography: {
   "fontFamily": `"Nova Square", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

root.render(
  <ThemeProvider theme={THEME}>
  <BrowserRouter>
  <AuthContextProvider>
    <LoaderProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LoaderProvider>
  </AuthContextProvider>
  </BrowserRouter>
  </ThemeProvider>
);
