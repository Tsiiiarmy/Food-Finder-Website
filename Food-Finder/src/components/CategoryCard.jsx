import { useNavigate } from "react-router-dom";

function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${category.strCategory}`)}
      className="bg-white rounded-2xl shadow-md overflow-hidden w-72 cursor-pointer transform transition hover:scale-105 hover:shadow-lg"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Category Image */}
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-48 object-cover"
      />

      {/* Category Info */}
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">
          {category.strCategory}
        </h3>
        <p className="text-sm text-gray-600">
          {category.strCategoryDescription.substring(0, 80)}...
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
