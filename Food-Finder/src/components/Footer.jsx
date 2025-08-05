import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../services/mealApi";

const Footer = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopular = async () => {
      const categories = await getCategories();
      setPopularCategories(categories.slice(0, 6)); // Top 6 categories
    };
    fetchPopular();
  }, []);

  return (
    <footer className="bg-white text-gray-800 font-poppins" style={{ fontFamily: 'poppins' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Food Finder Logo"
              className="w-36 sm:w-40 mb-3"
            />
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
              <Link to="/meals" className="hover:underline">
                Meals
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/random" className="hover:underline">
                Random Generator
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Popular Categories</h2>
          <ul className="text-sm text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
            {popularCategories.length > 0 ? (
              popularCategories.map((cat) => (
                <li
                  key={cat.idCategory}
                  onClick={() => navigate(`/category/${cat.strCategory}`)}
                  className="hover:underline transition cursor-pointer"
                >
                  {cat.strCategory}
                </li>
              ))
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white shadow-md rounded-full hover:scale-105 transition"
            >
              <FaFacebookF className="text-black" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 shadow-md rounded-full hover:scale-105 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white shadow-md rounded-full hover:scale-105 transition"
            >
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
