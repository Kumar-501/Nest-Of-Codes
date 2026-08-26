// src/main.jsx
// ⚠️  CRITICAL: theme.css MUST be the very first import
//     It defines all CSS variables before any component CSS loads.

import "./styles/theme.css";   // ← FIRST — global CSS variables
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";          // ← your existing global resets (after theme.css)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);