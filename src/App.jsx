import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// navbar

//pages
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import Navbar from "./assets/pages/Navbar";
import PostListPage from "./assets/pages/posts/PostListPage";
import PostDetailPage from "./assets/pages/posts/PostDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar sempre visibile */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path="/posts">
          <Route path="" element={<PostListPage />} />
          <Route path=":id" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
