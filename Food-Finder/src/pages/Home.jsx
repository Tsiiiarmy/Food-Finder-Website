import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TopMeals from "../components/TopMeals";
import Categories from "../components/Categories";
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <TopMeals />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
