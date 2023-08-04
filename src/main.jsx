import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppCities from "./AppCities.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cities" element={<AppCities />} />
    </Routes>
  </BrowserRouter>
);
