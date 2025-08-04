import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MealDetail() {
  const { id } = useParams(); // capture meal id from URL
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal detail:", error);
      }
    };

    fetchMeal();
  }, [id]);

  return (


      <main className="flex-1 px-6 md:px-20 py-10">
        {meal ? (
          <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto">
            {/* Image + Info */}
            <div className="grid md:grid-cols-2 gap-10">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-96 object-cover rounded-xl shadow-md"
              />

              <div>
                <h1
                  className="text-4xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "Volkhov" }}
                >
                  {meal.strMeal}
                </h1>
                <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: "Poppins" }}>
                  {meal.strCategory} | {meal.strArea}
                </p>

                <h3
                  className="text-xl font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: "Volkhov" }}
                >
                  Instructions
                </h3>
                <div className="h-56 overflow-y-auto pr-2">
                  <p
                    className="text-sm text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {meal.strInstructions}
                  </p>
                </div>
              </div>
            </div>

            {/* YouTube Video */}
            {meal.strYoutube && (
              <div className="mt-10">
                <h3
                  className="text-xl font-semibold text-gray-800 mb-4"
                  style={{ fontFamily: "Volkhov" }}
                >
                  Watch Tutorial
                </h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
                    title="Meal Tutorial"
                    className="w-full h-96 rounded-lg shadow"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p
            className="text-center text-gray-600 text-lg"
            style={{ fontFamily: "Poppins" }}
          >
            Loading meal details...
          </p>
        )}
      </main>


  );
}

export default MealDetail;
