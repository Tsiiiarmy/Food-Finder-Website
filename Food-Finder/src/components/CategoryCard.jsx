import sampleImg from "../assets/category.png"; 

function CategoryCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-64 hover:scale-105 transition transform cursor-pointer py-10" style={{fontFamily: 'poppins'}}>
      {/* Category Image */}
      <img
        src={sampleImg}
        alt="Category"
        className="w-auto h-auto object-cover"
      />

      {/* Category Info */}
      <div className="p-4 text-center space-y-2">
        <h3 className="text-lg font-poppins font-semibold text-gray-800">
          Desserts
        </h3>
        <p className="text-sm text-gray-600 font-poppins">
          Explore delicious dessert recipes
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
