import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./pages/hero";
import About from "./pages/about";
import Properties from "./pages/properties";
import Services from "./pages/services";
import Agents from "./pages/agents";
import Contact from "./pages/contact";
import SingleApartmentPage from "./components/show/single"; // Страница одной квартиры

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Properties />
              <Services />
              <Agents />
              <Contact />
            </>
          }
        />
        <Route path="/show/single/:id" element={<SingleApartmentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
