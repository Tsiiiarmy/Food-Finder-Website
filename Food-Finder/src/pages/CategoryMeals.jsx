import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import { getMealsByCategory } from "../services/mealApi";

function CategoryMeals() {
  const { name } = useParams();
  const [allMeals, setAllMeals] = useState([]);
  const [visibleMeals, setVisibleMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryMeals();
  }, [name]);

  const fetchCategoryMeals = async () => {
    setLoading(true);
    try {
      const meals = await getMealsByCategory(name);
      setAllMeals(meals);
      setVisibleMeals(meals.slice(0, visibleCount));
    } catch (error) {
      console.error("Error fetching category meals:", error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    const newCount = visibleCount + 8;
    setVisibleCount(newCount);
    setVisibleMeals(allMeals.slice(0, newCount));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 px-6 md:px-20 py-10 text-center">
        <h1
          className="text-4xl font-volkhov font-bold text-gray-800 mb-6"
          style={{ fontFamily: "Volkhov" }}
        >
          {allMeals.length} Meals Found Under {name}
        </h1>

        {loading ? (
          <p className="text-gray-600 text-lg" style={{ fontFamily: "Poppins" }}>
            Loading meals...
          </p>
        ) : allMeals.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-center gap-10">
              {visibleMeals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
              ))}
            </div>

            {visibleCount < allMeals.length && (
              <div className="mt-10">
                <button
                  onClick={handleLoadMore}
                  className="bg-gray-200 px-8 py-3 rounded-lg font-poppins font-medium text-gray-800 hover:bg-gray-300 transition cursor-pointer"
                  style={{ fontFamily: "Poppins" }}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <p
            className="text-gray-600 text-lg mt-10"
            style={{ fontFamily: "Poppins" }}
          >
            No meals found for this category.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default CategoryMeals;
