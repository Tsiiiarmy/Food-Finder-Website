import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await res.json();
        setCategories(data.categories.slice(0, 4)); // show only 4 top categories for now
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="px-12 py-20 text-center">
      {/* Title */}
      <h2
        className="text-3xl font-volkhov font-bold text-gray-800 mb-12"
        style={{ fontFamily: "Volkhov" }}
      >
        Categories
      </h2>

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {categories.length > 0 ? (
          categories.map((cat) => (
            <CategoryCard key={cat.idCategory} category={cat} />
          ))
        ) : (
          <p className="text-gray-600 font-poppins">Loading categories...</p>
        )}
      </div>

      {/* View All Categories Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/categories")}
          className="bg-gray-200 px-8 py-3 rounded-lg font-poppins font-medium text-gray-800 hover:bg-gray-300 transition flex items-center gap-2 mx-auto cursor-pointer"
          style={{ fontFamily: "Poppins" }}
        >
          View All Categories <span className="text-lg">➜</span>
        </button>
      </div>
    </section>
  );
}

export default Categories;
