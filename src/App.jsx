import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// navbar

//pages
import HomePage from "./assets/pages/HomePage";
import PostsPage from "./assets/pages/PostsPage";
import AboutPage from "./assets/pages/AboutPage";
import Navbar from "./assets/pages/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar sempre visibile */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
