import { Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "./components/Navbar";
import MovieDetailPage from "./pages/MovieDetailPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
