import heroMeal from "../assets/main-dish.png"; 
import decore from "../assets/decore.png";

function Hero() {
  return (
    <section className="relative px-4 sm:px-8 md:px-18 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Left Side - Text + Search */}
      <div className="space-y-6">
        <h1
          className="text-4xl sm:text-5xl font-volkhov font-bold leading-snug text-gray-700"
          style={{ fontFamily: 'Volkhov' }}
        >
          Discover Meals, <br />
          Around the World <br />
          Target Audience
        </h1>
        
        <p
          className="text-gray-500 text-base sm:text-lg max-w-md"
          style={{ fontFamily: 'Poppins' }}
        >
          Discover delicious meals from around the world. 
          Search by ingredient, browse categories, or find your next favorite dish 
          from our collection of thousands of recipes!
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-md">
          <div
            className="flex items-center bg-gray-200 rounded-full overflow-hidden w-full shadow"
            style={{ fontFamily: 'Poppins' }}
          >
            <input
              type="text"
              placeholder="Search anything...."
              className="flex-1 px-4 sm:px-6 py-3 bg-transparent focus:outline-none text-gray-700"
            />
            <button className="bg-gray-700 text-white px-4 sm:px-5 py-3 hover:bg-gray-900 transition">
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
        </div>
      </div>

      {/* Right Side - Image with Decorations */}
      <div className="relative flex justify-center">
        <img
          src={heroMeal}
          alt="Delicious meal"
          className="w-full max-w-md drop-shadow-xl"
        />

        {/* Decorative Elements (adjusted for Tailwind compatibility) */}
        <img 
          src={decore} 
          alt="decoration" 
          className="hidden sm:block absolute top-0 right-8 w-10"
        />
        <img 
          src={decore} 
          alt="decoration" 
          className="hidden sm:block absolute bottom-2 left-0 w-10"
        />
        <img 
          src={decore} 
          alt="decoration" 
          className="hidden sm:block absolute bottom-2 right-20 w-10"
        />
        <img 
          src={decore} 
          alt="decoration" 
          className="hidden sm:block absolute top-3 right-[140px] w-10"
        />
      </div>
    </section>
  );
}

export default Hero;
