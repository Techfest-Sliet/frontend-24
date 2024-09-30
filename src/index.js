import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const THEME = createTheme({
        typography: {
                fontFamily: `"Nova Square", "Helvetica", "Arial", sans-serif`,
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 500,
        },
});

root.render(
        <ThemeProvider theme={THEME}>
                <BrowserRouter>

                        <React.StrictMode>
                                <App />
                        </React.StrictMode>

                </BrowserRouter>
        </ThemeProvider>
);
