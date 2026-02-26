import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";

const applyZoom = () => {
  const width = window.innerWidth;
  if (width >= 768) {
    document.body.style.zoom = "80%";
  } else {
    document.body.style.zoom = "90%";
  }
};

applyZoom();
window.addEventListener("resize", applyZoom);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
