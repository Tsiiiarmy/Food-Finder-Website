import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-gray-600 text-lg">Loading categories...</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-20 py-10 font-poppins bg-gray-50 min-h-screen">
      <h2
        className="text-2xl sm:text-3xl font-bold mb-10 text-gray-800 text-center"
        style={{ fontFamily: "volkhov" }}
      >
        Meal Categories
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat.idCategory}
            onClick={() => navigate(`/category/${cat.strCategory}`)}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer transform hover:scale-105"
          >
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{cat.strCategory}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {cat.strCategoryDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
