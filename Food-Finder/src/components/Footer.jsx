import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 font-poppins" style={{ fontFamily: 'Poppins' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <Link to="/">
            <img src={logo} alt="Food Finder Logo" className="w-36 sm:w-40 mb-3" />
          </Link>
          <p className="text-sm text-gray-600">
            Discover delicious meals from around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                Meals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                Random Generator
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Popular Categories</h2>
          <ul className="text-sm text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                Deserts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                Pasta
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                Vegetarians
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                Quick Meals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                Chicken
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4 decoration-gray-700 transition">
                Meat
              </a>
            </li>
          </ul>
        </div>

        {/* Social + App */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white shadow-md rounded-full hover:scale-105 transition">
              <FaFacebookF className="text-black" />
            </a>
            <a href="#" className="p-2 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 shadow-md rounded-full hover:scale-105 transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-2 bg-white shadow-md rounded-full hover:scale-105 transition">
              <FaTwitter className="text-black" />
            </a>
          </div>
          <p className="text-sm text-gray-600">Discover our app</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 pb-4 mt-4">
        © {new Date().getFullYear()} FoodFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
