import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Импортируем BrowserRouter
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

AOS.init({
  duration: 800,
  offset: 100,
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* ✅ Добавляем Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
