import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";

function Meals() {
  const [allMeals, setAllMeals] = useState([]);
  const [visibleMeals, setVisibleMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async (query = "") => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      if (data.meals) {
        setAllMeals(data.meals);
        setVisibleMeals(data.meals.slice(0, visibleCount));
      } else {
        setAllMeals([]);
        setVisibleMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMeals(searchTerm);
  };

  const handleLoadMore = () => {
    const newCount = visibleCount + 12;
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
          Meals Collection
        </h1>
        <p
          className="text-gray-600 mb-8"
          style={{ fontFamily: "Poppins" }}
        >
          Browse through our collection or search for your favorite meal.
        </p>

        {/* Search Bar*/}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-md mx-auto mb-10"
        >
          <div
            className="flex items-center bg-gray-200 rounded-full overflow-hidden w-full shadow"
            style={{ fontFamily: "Poppins" }}
          >
            <input
              type="text"
              placeholder="Search anything...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 sm:px-6 py-3 bg-transparent focus:outline-none text-gray-700"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 sm:px-5 py-3 hover:bg-gray-900 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        </form>

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
        ) : (
          <p
            className="text-gray-600 text-lg mt-10"
            style={{ fontFamily: "Poppins" }}
          >
            No meals found. Try another search!
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Meals;
