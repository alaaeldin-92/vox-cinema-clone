import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import OneMovie from "./pages/OneMovie";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoviesContextProvider } from "./context/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <MoviesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<OneMovie />} />
        </Routes>
      </MoviesContextProvider>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
