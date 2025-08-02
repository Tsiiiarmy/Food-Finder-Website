import mealImg from "../assets/meal.jpg"; 
function MealCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72" style={{fontFamily: 'poppins'}}>
      {/* Meal Image */}
      <img
        src={mealImg}
        alt="Meal"
        className="w-full h-48 object-cover"
      />

      {/* Meal Info */}
      <div className="p-3 space-y-3">
        <h3 className="text-lg font-poppins font-semibold text-gray-600">
          Peach & Blueberry Grunt
        </h3>

        {/* Tags */}
        <div className="flex gap-2">
          <span className="px-3 py-1 text-xs border rounded-full text-gray-600 cursor-pointer hover:bg-gray-300 transition">
            Dessert
          </span>
          <span className="px-3 py-1 text-xs border rounded-full text-gray-600 cursor-pointer hover:bg-gray-300 transition">
            American
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-gray-200 py-2 rounded-lg font-semibold text-gray-600 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-300 transition">
          <span role="img" aria-label="cutlery">🍴</span> View Recipe
        </button>
      </div>
    </div>
  );
}

export default MealCard;
