import recipeIcon from "../assets/search.png";
import stepIcon from "../assets/stepbystep.png";
import randomIcon from "../assets/random.png";
import countryIcon from "../assets/global.png";

function Services() {
  return (
    <section className="px-12 py-35 text-center">
      {/* Title */}
      <h2 className="text-3xl font-volkhov font-bold text-gray-800 mb-16" style={{fontFamily: 'Volkhov'}}>
        Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-8" style={{fontFamily: 'poppins'}}>
        
        {/* Service 1 */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img src={recipeIcon} alt="Recipes" className="w-14 h-14" />
          <h3 className="font-poppins font-bold text-gray-800 text-lg">
            1000+ Recipes
          </h3>
          <p className="text-sm text-gray-600 font-poppins">
            From around the world
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img src={stepIcon} alt="Step by Step" className="w-14 h-14" />
          <h3 className="font-poppins font-bold text-gray-800 text-lg">
            Step-by-step
          </h3>
          <p className="text-sm text-gray-600 font-poppins">
            Detailed instructions
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img src={randomIcon} alt="Random Generation" className="w-14 h-14" />
          <h3 className="font-poppins font-bold text-gray-800 text-lg">
            Random Generation
          </h3>
          <p className="text-sm text-gray-600 font-poppins">
            Choose a random food for you
          </p>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img src={countryIcon} alt="Countries" className="w-14 h-14" />
          <h3 className="font-poppins font-bold text-gray-800 text-lg">
            25+ Countries
          </h3>
          <p className="text-sm text-gray-600 font-poppins">
            International cuisine
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
