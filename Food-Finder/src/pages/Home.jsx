import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TopMeals from "../components/TopMeals";
import Categories from "../components/Categories";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");  // keep state here

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term.trim()) return;
    navigate(`/meals?search=${encodeURIComponent(term.trim())}`);
  };

  return (
    <div>
      <Hero searchTerm={searchTerm} onSearch={handleSearch} />
      <Services />
      <TopMeals />
      <Categories />
    </div>
  );
}

export default Home;
