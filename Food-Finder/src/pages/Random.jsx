import { useState } from "react";

function Random() {
  const [meal, setMeal] = useState(null);

  const handleGenerateMeal = async () => {
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await res.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-10">
      <h1
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
        style={{ fontFamily: "Volkhov" }}
      >
        Random Meal Generator
      </h1>

      <p
        className="text-base sm:text-lg text-gray-600 max-w-xl mb-6 sm:mb-8"
        style={{ fontFamily: "Poppins" }}
      >
        Click the button below to discover a random meal from our collection!
      </p>

      <button
        onClick={handleGenerateMeal}
        className="bg-gray-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition cursor-pointer"
        style={{ fontFamily: "Poppins" }}
      >
        Generate Meal
      </button>

      {meal && (
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-5 sm:p-6 w-full max-w-5xl text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
            />

            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 sm:mb-3"
                style={{ fontFamily: "Volkhov" }}
              >
                {meal.strMeal}
              </h2>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "Poppins" }}>
                {meal.strCategory} | {meal.strArea}
              </p>
              <div className="h-40 sm:h-48 overflow-y-auto pr-2">
                <p
                  className="text-gray-700 text-sm leading-relaxed"
                  style={{ fontFamily: "Poppins" }}
                >
                  {meal.strInstructions}
                </p>
              </div>
            </div>
          </div>

          {meal.strYoutube && (
            <div className="mt-8">
              <h3
                className="text-lg sm:text-xl font-semibold mb-4"
                style={{ fontFamily: "Volkhov" }}
              >
                Watch Tutorial
              </h3>
              <div className="w-full aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
                  title="Meal Tutorial"
                  className="w-full h-full rounded-lg shadow"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default Random;
