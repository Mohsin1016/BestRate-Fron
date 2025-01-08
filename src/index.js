import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResponseProvider } from "./context/useContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResponseProvider>
      <App />
    </ResponseProvider>
  </React.StrictMode>
);
