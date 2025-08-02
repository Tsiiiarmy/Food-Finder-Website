import tsionImg from "../assets/decore.png"; 
import birtukanImg from "../assets/decore.png";
import placeholderImg from "../assets/decore.png";
import cookingImg from "../assets/chicken.png"; 

function About() {
  return (
    <div className="font-poppins">
      
      {/* Intro Hero */}
      <section className="bg-gray-50 py-20 text-center">
        <h1 className="text-5xl font-volkhov font-bold text-gray-800 mb-6" style={{fontFamily: 'Volkhov'}}>
          About Foodie Finder
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'poppins'}}>
          Foodie Finder is a web application that helps users discover delicious 
          meals from around the world. Whether you’re searching by ingredient, 
          category, or just looking for something random, we’ve got you covered!
        </p>
      </section>

      {/* Our Mission */}
      <section className="px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={cookingImg} alt="Cooking Illustration" className="rounded-2xl shadow-lg"/>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-volkhov font-bold text-gray-800" style={{fontFamily: 'Volkhov'}}>
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'poppins'}}>
            Our mission is simple: to make exploring food easy, fun, and 
            inspiring. We want to help students, home cooks, and food lovers 
            discover new recipes and cuisines, while practicing modern web 
            development skills like API integration, state management, and 
            responsive design.
          </p>
          <ul className="list-disc list-inside text-gray-700" style={{fontFamily: 'poppins'}}>
            <li>Search meals by ingredient, category, or country.</li>
            <li>Get step-by-step cooking instructions with videos.</li>
            <li>Discover random meals when you can’t decide.</li>
            <li>Learn about different cuisines from over 25+ countries.</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 px-12 py-20 text-center">
        <h2 className="text-3xl font-volkhov font-bold text-gray-800 mb-12" style={{fontFamily: 'Volkhov'}}>
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-3">
            <h3 className="text-xl font-semibold text-gray-800" style={{fontFamily: 'Volkhov'}}>Search</h3>
            <p className="text-gray-600" style={{fontFamily: 'poppins'}}>
              Enter ingredients, meal names, or categories to instantly find 
              recipes tailored to your taste.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-3">
            <h3 className="text-xl font-semibold text-gray-800" style={{fontFamily: 'Volkhov'}}>Explore</h3>
            <p className="text-gray-600" style={{fontFamily: 'poppins'}}>
              Browse through curated categories and discover meals from 
              different cuisines worldwide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-3">
            <h3 className="text-xl font-semibold text-gray-800" style={{fontFamily: 'Volkhov'}}>Cook</h3>
            <p className="text-gray-600" style={{fontFamily: 'poppins'}}>
              Get detailed recipes, instructions, and videos to help you cook 
              with confidence at home.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="px-12 py-20 text-center">
        <h2 className="text-3xl font-volkhov font-bold text-gray-800 mb-12" style={{fontFamily: 'Volkhov'}}>
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center" style={{fontFamily: 'poppins'}}>
          
          {/* Tsion */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
            <img src={tsionImg} alt="Tsion Getachew" className="w-full h-56 object-contain "/>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Tsion Getachew</h3>
              <p className="text-sm text-gray-600">4th Year Software Engineering Student</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>📧 tsion@example.com</p>
                <p>📞 +251 900 000 000</p>
                <p>💻 GitHub: <a href="https://github.com/tsiiiarmy" className="text-green-600 hover:underline">tsion</a></p>
              </div>
            </div>
          </div>

          {/* Birtukan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
            <img src={birtukanImg} alt="Birtukan Kussa" className="w-full h-56 object-contain"/>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Birtukan Kussa</h3>
              <p className="text-sm text-gray-600">4th Year Software Engineering Student</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>📧 birtukan@example.com</p>
                <p>📞 +251 911 000 000</p>
                <p>💻 GitHub: <a href="https://github.com/birtukan" className="text-green-600 hover:underline">birtukan</a></p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
            <img src={placeholderImg} alt="Coming Soon" className="w-full h-56 object-contain"/>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Coming Soon</h3>
              <p className="text-sm text-gray-600">Team member info will be added</p>
              <div className="text-sm text-gray-500 italic">Details pending</div>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter Subscription */}
<section className="bg-gray-50 py-26 px-6 text-center">
  <h2 className="text-3xl font-volkhov font-bold text-gray-800 mb-4" style={{fontFamily: 'Volkhov'}}>
    Join Our Foodie Community
  </h2>
  <p className="text-gray-600 font-poppins mb-8 max-w-xl mx-auto" style={{fontFamily: 'poppins'}}>
    Subscribe to our newsletter and get the latest recipes, cooking tips, 
    and updates straight to your inbox.
  </p>

  <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto" style={{fontFamily: 'poppins'}}>
    <input
      type="email"
      placeholder="Enter your email address"
      className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
    />
    <button
      type="submit"
      className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
    >
      Subscribe
    </button>
  </form>

</section>



    </div>
  );
}

export default About;
