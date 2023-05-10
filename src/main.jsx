import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { MailContextProvider } from "./Context/MailContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <MailContextProvider>
      <App />
      </MailContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
