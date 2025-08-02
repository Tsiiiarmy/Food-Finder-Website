import MealCard from "./MealCard";

function TopMeals() {
  return (
    <section className="px-12 py-20 text-center">
      <h2 className="text-3xl font-volkhov font-bold text-gray-800 mb-12" style={{fontFamily: 'Volkhov'}}>
        Top Meals
      </h2>

      {/* Meal Cards */}
      <div className="flex flex-wrap justify-center gap-25">
        <MealCard />
        <MealCard />
        <MealCard />
      </div>

      {/* See More Button */}
      <div className="mt-10">
        <button className="bg-gray-200 px-8 py-3 rounded-lg font-poppins font-medium text-gray-600 hover:bg-gray-300 cursor-pointer transition flex items-center gap-2 mx-auto" style={{fontFamily: 'poppins'}}>
          See More <span className="text-lg">➜</span>
        </button>
      </div>
    </section>
  );
}

export default TopMeals;
