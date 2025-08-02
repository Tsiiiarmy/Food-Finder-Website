import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <section className="px-12 py-20 text-center">
      {/* Title */}
      <h2 className="text-3xl font-volkhov font-bold text-gray-800 mb-12"style={{fontFamily: 'Volkhov'}}>
        Categories
      </h2>

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

      {/* View All Categories Button */}
      <div className="mt-10">
        <button className="bg-gray-200 px-8 py-3 rounded-lg font-poppins font-medium text-gray-800 hover:bg-gray-300 transition flex items-center gap-2 mx-auto cursor-pointer"style={{fontFamily: 'poppins'}}>
          View All Categories <span className="text-lg">➜</span>
        </button>
      </div>
    </section>
  );
}

export default Categories;
