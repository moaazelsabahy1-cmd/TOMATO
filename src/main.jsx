import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./app.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

