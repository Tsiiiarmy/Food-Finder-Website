import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";

function CategoryMeals() {
  const { name } = useParams();
  const [allMeals, setAllMeals] = useState([]); // store all meals
  const [visibleMeals, setVisibleMeals] = useState([]); // store currently visible meals
  const [visibleCount, setVisibleCount] = useState(8); // how many to show initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        const data = await res.json();

        // Fetch details for each meal
        const detailedMeals = await Promise.all(
          data.meals.map(async (meal) => {
            const detailRes = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            );
            const detailData = await detailRes.json();
            return detailData.meals[0];
          })
        );

        setAllMeals(detailedMeals);
        setVisibleMeals(detailedMeals.slice(0, visibleCount));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meals by category:", error);
        setLoading(false);
      }
    };
    fetchMeals();
  }, [name]);

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
          <p
            className="text-gray-600 text-lg"
            style={{ fontFamily: "Poppins" }}
          >
            Loading meals...
          </p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-10">
              {visibleMeals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
              ))}
            </div>

            {/* Load More Button */}
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
        )}
      </main>

      <Footer />
    </div>
  );
}

export default CategoryMeals;
