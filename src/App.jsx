import Header from "./components/header";
import Hero from "./pages/hero";
import About from "./pages/about";
import Properties from "./pages/properties";
import Services from "./pages/services";
import Agents from "./pages/agents";
import Contact from "./pages/contact";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Properties />
      <Services />
      <Agents />
      <Contact />
      <Footer />
    </div>
  );
}
