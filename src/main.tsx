import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import { PerformanceOptimizedApp } from "./components/PerformanceOptimizedApp.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <PerformanceOptimizedApp>
      <App />
    </PerformanceOptimizedApp>
  </StrictMode>
);
