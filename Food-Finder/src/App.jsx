import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import MealDetail from "./pages/MealDetail";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryMeals from "./pages/CategoryMeals";
import AboutUs from "./pages/About";
import Random from "./pages/Random";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="font-poppins flex flex-col min-h-screen">
      {/* Header shows on all pages */}
      <Header />

      {/* Main content grows to fill available space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/random" element={<Random />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="/category/:name" element={<CategoryMeals />} />
        </Routes>
      </main>

      {/* Footer shows on all pages */}
      <Footer />
    </div>
  );
}

export default App;
