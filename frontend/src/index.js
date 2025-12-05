import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function LenisWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return children;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LenisWrapper>
      <App />
    </LenisWrapper>
  </React.StrictMode>,
);
