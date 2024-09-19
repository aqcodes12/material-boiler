import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.css"; // Import the CSS file
import setupAxiosInterceptors from "./utils/setupAxiosInterceptors.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
setupAxiosInterceptors();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
