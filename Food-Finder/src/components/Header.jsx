import Logo from "../assets/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-20 py-8 bg-white shadow-md">
      <Link to="/">
        <img src={Logo} alt="Food Finder Logo" className="w-40 cursor-pointer" />
      </Link>

      <div className="flex items-center gap-10">
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

        <div className="flex items-center gap-6 text-sm font-bold text-gray-700">
          <button
            onClick={() => navigate("/random")}
            className="border border-gray-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition cursor-pointer"
          >
            Random Generator
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
