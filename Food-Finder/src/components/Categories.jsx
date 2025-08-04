import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useLocation, useNavigate } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await res.json();
        setCategories(data.categories.slice(0, 6)); // your original top 6 limit
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Get 'highlight' param from URL query
  const searchParams = new URLSearchParams(location.search);
  const highlightRaw = searchParams.get("highlight");
  const highlight = highlightRaw ? highlightRaw.trim().toLowerCase() : null;

  // Find the single category to pop up (case insensitive)
  const poppedCategory = categories.find(
    (cat) => cat.strCategory.toLowerCase() === highlight
  );

  // Render
  return (
    <section className="px-12 py-20 text-center">
      <h2
        className="text-3xl font-volkhov font-bold text-gray-800 mb-12"
        style={{ fontFamily: "Volkhov" }}
      >
        Categories
      </h2>

      {poppedCategory ? (
        // Show only popped category card, centered and popped style
        <div
          onClick={() => navigate("/categories")}
          className="max-w-md mx-auto p-8 rounded-lg bg-yellow-50 border-4 border-yellow-400 shadow-2xl transform scale-125 transition-all duration-300 cursor-pointer"
          title="Click to view all categories"
        >
          <CategoryCard category={poppedCategory} />
        </div>
      ) : categories.length > 0 ? (
        // Show all categories normally if no highlight param
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((cat) => (
            <div
              key={cat.idCategory}
              style={{ cursor: "pointer" }}
            >
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 font-poppins">Loading categories...</p>
      )}

      {!poppedCategory && (
        <div className="mt-10">
          <button
            onClick={() => navigate("/categories")}
            className="bg-gray-200 px-8 py-3 rounded-lg font-poppins font-medium text-gray-800 hover:bg-gray-300 transition flex items-center gap-2 mx-auto cursor-pointer"
            style={{ fontFamily: "Poppins" }}
          >
            View All Categories <span className="text-lg">➜</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Categories;
