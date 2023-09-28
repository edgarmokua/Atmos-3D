import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PlayProvider } from "./contexts/Play";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PlayProvider>
      <App />
    </PlayProvider>
  </React.StrictMode>
);
