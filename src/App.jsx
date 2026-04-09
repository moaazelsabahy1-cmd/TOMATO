import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero.jsx";
import About from "./components/About.jsx";
import FoodMenu from "./components/foodmenu.jsx";
import BranchesSection from "./components/branchessection.jsx";
import ServicesSection from "./components/servicesection.jsx";
import AboutPage from "./about/page.jsx";
import MenuPage from "./menu/page.jsx";
import ServicesPage from "./services/page.jsx";
import BranchesPage from "./branches/page.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FoodMenu />
              <ServicesSection />
              <BranchesSection />
              <About />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/branches" element={<BranchesPage />} />
      </Routes>
    </>
  );
}
