import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-8 md:px-20 py-6 font-poppins"  style={{fontFamily: "Poppins"}}>
      <div className="flex justify-between items-center" >
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Food Finder Logo" className="w-32 sm:w-40 cursor-pointer" />
        </Link>

        {/* Hamburger Icon - visible only on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 text-gray-700 text-sm font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 decoration-gray-700 text-gray-900"
                    : "hover:underline underline-offset-4 decoration-gray-700 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meals"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 decoration-gray-700 text-gray-900"
                    : "hover:underline underline-offset-4 decoration-gray-700 transition"
                }
              >
                Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 decoration-gray-700 text-gray-900"
                    : "hover:underline underline-offset-4 decoration-gray-700 transition"
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 decoration-gray-700 text-gray-900"
                    : "hover:underline underline-offset-4 decoration-gray-700 transition"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>

          <button
            onClick={() => navigate("/random")}
            className="border border-gray-700 px-4 py-2 font-semibold rounded-lg hover:bg-gray-200 text-gray-700 transition" style={{fontFamily: "Poppins"}}
          >
            Random Generator
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible only when open) */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm text-gray-700 font-bold">
          <ul className="flex flex-col gap-4">
            <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/meals" onClick={toggleMenu}>Meals</NavLink></li>
            <li><NavLink to="/categories" onClick={toggleMenu}>Categories</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu}>About Us</NavLink></li>
          </ul>
          <div className="flex items-center gap-6 text-sm font-bold text-gray-700" style={{fontFamily: "Poppins"}}>
            <button
              onClick={() => {
                navigate("/random");
                setMenuOpen(false);
              }}
              className="border border-gray-700 px-4 py-2 rounded-lg  hover:bg-gray-200 transition w-full text-left cursor-pointer"
            >
              Random Generator
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
