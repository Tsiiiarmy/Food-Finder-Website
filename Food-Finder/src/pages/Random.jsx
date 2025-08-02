import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Random() {
  const [meal, setMeal] = useState(null);

  const handleGenerateMeal = () => {
    // Temporary static data (we’ll replace with API fetch later)
    setMeal({
      name: "Spaghetti Carbonara",
      category: "Pasta",
      country: "Italian",
      instructions: "A delicious pasta dish with eggs, cheese, pancetta, and pepper.",
      image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10">
        <h1
          className="text-4xl font-volkhov font-bold text-gray-800 mb-6"
          style={{ fontFamily: "volkhov" }}
        >
          Random Meal Generator
        </h1>
        <p
          className="text-lg text-gray-600 font-poppins max-w-xl mb-8"
          style={{ fontFamily: "poppins" }}
        >
          Click the button below to discover a random meal from our collection!
        </p>
        <button
          onClick={handleGenerateMeal}
          className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition"
          style={{ fontFamily: "poppins" }}
        >
          Generate Meal
        </button>

        {/* Show Meal if Generated */}
        {meal && (
          <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-left">
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {meal.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              {meal.category} | {meal.country}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {meal.instructions}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Random;
