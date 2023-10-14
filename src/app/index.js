import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import UserContextProvider from "./UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
