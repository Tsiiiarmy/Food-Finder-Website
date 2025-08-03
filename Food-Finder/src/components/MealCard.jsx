import { useNavigate } from "react-router-dom";

function MealCard({ meal }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden w-72"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Meal Image */}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />

      {/* Meal Info */}
      <div className="p-3 space-y-3">
        <h3 className="text-lg font-poppins font-semibold text-gray-600">
          {meal.strMeal}
        </h3>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs border rounded-full text-gray-600 cursor-pointer hover:bg-gray-300 transition">
            {meal.strCategory}
          </span>
          <span className="px-3 py-1 text-xs border rounded-full text-gray-600 cursor-pointer hover:bg-gray-300 transition">
            {meal.strArea}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate(`/meal/${meal.idMeal}`)}
          className="w-full bg-gray-200 py-2 rounded-lg font-semibold text-gray-600 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-300 transition"
        >
          <span role="img" aria-label="cutlery">🍴</span> View Recipe
        </button>
      </div>
    </div>
  );
}

export default MealCard;
