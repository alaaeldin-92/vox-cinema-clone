import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home";
import OneMovie from "./pages/OneMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoviesContextProvider } from "./context/MoviesContext";
import Admin from "./pages/Admin/Admin";
import { AdminMovieEdit } from "./pages/Admin/AdminMovieEdit";
import AdminMovieAdd from "./pages/Admin/AdminMovieAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<OneMovie />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/movies/add" element={<AdminMovieAdd />} />
          <Route path="/admin/movies/:id" element={<AdminMovieEdit />} />
        </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
