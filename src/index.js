import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResponseProvider } from "./context/useContext.js"; // Updated import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResponseProvider> {/* Corrected component name */}
      <App />
    </ResponseProvider>
  </React.StrictMode>
);
