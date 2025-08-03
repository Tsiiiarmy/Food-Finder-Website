import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import CategoriesPage from "./pages/CategoriesPage";
import AboutUs from "./pages/About";
import Random from "./pages/Random";
import Header from "./components/Header"; // ✅ Header import
import Footer from "./components/Footer"; // ✅ Footer import
import './App.css';

function App() {
  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <Header /> {/* ✅ Displayed on all pages */}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/random" element={<Random />} /> 
        </Routes>
      </main>

      <Footer /> {/* ✅ Displayed on all pages */}
    </div>
  );
}

export default App;
