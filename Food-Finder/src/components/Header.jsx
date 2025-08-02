import Logo from "../assets/logo.png";

function Header() {
  return (
        <nav className="flex justify-between items-center px-20 py-8 bg-white shadow-md"> 
        <img src={Logo} alt="food finder Logo" className="w-40 cursor-pointer" />

        <div className="flex items-center gap-10">
          <ul className="flex gap-10 text-gray-700 text-sm font-bold">
            <li className="cursor-pointer hover:underline underline-offset-4 decoration-gray-700 transition">Home</li>
            <li className="cursor-pointer hover:underline underline-offset-4 decoration-gray-700 transition ">Meals</li>
            <li className="cursor-pointer hover:underline underline-offset-4 decoration-gray-700 transition">Categories</li>
            <li className="cursor-pointer hover:underline underline-offset-4 decoration-gray-700 transition">About Us</li> 
          </ul>
          <div className="flex items-center gap-6 text-sm font-bold text-gray-700">
            <button className="border border-gray-700 px-4 py-2  rounded-lg font-bold hover:bg-gray-200 transition cursor-pointer">Random Generator</button>
          </div>
        </div>
      </nav>
  );
}

export default Header;
