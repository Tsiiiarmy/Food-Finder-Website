import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import MealDetail from "./pages/MealDetail";
import CategoriesPage from "./pages/CategoriesPage";
import AboutUs from "./pages/About";
import Random from "./pages/Random";
import './App.css'

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/random" element={<Random />} /> 
        <Route path="/meal/:id" element={<MealDetail />} />
      </Routes>
    </div>
  );
}

export default App;
