import tsionImg from "../assets/decore.png"; 
import birtukanImg from "../assets/decore.png";
import placeholderImg from "../assets/decore.png";
import cookingImg from "../assets/chicken.png"; 
import NewsletterForm from "./Newsletter";

function About() {
  return (
    <div className="font-poppins">
      
      {/* Intro Hero */}
      <section className="bg-gray-50 py-20 text-center">
        <h1 className="text-5xl font-volkhov font-bold text-gray-800 mb-6" style={{fontFamily: 'Volkhov'}}>
          About Food Finder
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'poppins'}}>
          Food Finder is a web application that helps users discover delicious 
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
        <h2 className="text-3xl font-volkhov font-bold text-gray-800 mb-12 " style={{fontFamily: 'Volkhov'}}>
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-3 hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold text-gray-800" style={{fontFamily: 'Volkhov'}}>Search</h3>
            <p className="text-gray-600" style={{fontFamily: 'poppins'}}>
              Enter ingredients, meal names, or categories to instantly find 
              recipes tailored to your taste.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-3 hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold text-gray-800" style={{fontFamily: 'Volkhov'}}>Explore</h3>
            <p className="text-gray-600" style={{fontFamily: 'poppins'}}>
              Browse through curated categories and discover meals from 
              different cuisines worldwide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-3 hover:scale-105 transition transform">
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
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 hover:scale-105 transition transform">
            <img src={tsionImg} alt="Tsion Getachew" className="w-full h-56 object-contain "/>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Tsion Getachew</h3>
              <p className="text-sm text-gray-600">4th Year Software Engineering Student</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>📧 tsiiiarmy@gmail.com</p>
                <p>📞 +251 953 420 184</p>
                <p>💻 GitHub: <a href="https://github.com/tsiiiarmy" className="text-green-600 hover:underline">tsion</a></p>
              </div>
            </div>
          </div>

          {/* Birtukan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 hover:scale-105 transition transform">
            <img src={birtukanImg} alt="Birtukan Kussa" className="w-full h-56 object-contain"/>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Birtukan Kussa</h3>
              <p className="text-sm text-gray-600">4th Year Software Engineering Student</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>📧 birtukankussa@gmail.com</p>
                <p>📞 +251 905 043 657</p>
                <p>💻 GitHub: <a href="https://github.com/Birtukan-kussa" className="text-green-600 hover:underline">birtukan</a></p>
              </div>
            </div>
          </div>

          {/* Yishurun*/}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 hover:scale-105 transition transform">
            <img src={placeholderImg} alt="Yishurun Getachew" className="w-full h-56 object-contain"/>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Yishurun Getachew</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>📧 Yishurung@gmail.com</p>
                <p>📞 +251 985 116 850</p>
                <p>💻 GitHub: <a href="https://github.com/Yishurun1G" className="text-green-600 hover:underline">Yishurun</a></p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter Subscription */}
    <NewsletterForm />

    </div>
  );
}

export default About;
