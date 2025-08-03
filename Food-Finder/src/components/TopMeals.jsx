import { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { useNavigate } from "react-router-dom";

function TopMeals() {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        // Fetch 3 random meals
        const responses = await Promise.all([
          fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
          fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
          fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
        ]);
        const data = await Promise.all(responses.map((res) => res.json()));
        setMeals(data.map((d) => d.meals[0]));
      } catch (error) {
        console.error("Error fetching top meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <section className="px-12 py-20 text-center">
      <h2
        className="text-3xl font-volkhov font-bold text-gray-800 mb-12"
        style={{ fontFamily: "Volkhov" }}
      >
        Top Meals
      </h2>

      {/* Meal Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {meals.length > 0 ? (
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p className="text-gray-600 font-poppins">Loading meals...</p>
        )}
      </div>

      {/* See More Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/meals")}
          className="bg-gray-200 px-8 py-3 rounded-lg font-poppins font-medium text-gray-600 hover:bg-gray-300 cursor-pointer transition flex items-center gap-2 mx-auto"
          style={{ fontFamily: "Poppins" }}
        >
          See More <span className="text-lg">➜</span>
        </button>
      </div>
    </section>
  );
}

export default TopMeals;
