import { useState, useEffect } from "react";
import routes from "../routes/router";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="relative bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* ЛОГОТИП */}
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">L</span>
              </div>
              <span className="text-white text-xl font-bold">
                Luxury Estate
              </span>
            </a>

            {/* НАВИГАЦИЯ ДЛЯ ДЕСКТОПА */}
            <div className="hidden lg:flex items-center space-x-8">
              {routes.map(({ id, label }) => (
                <a
                  key={id}
                  href={id ? id : "/"}
                  onClick={(e) => {
                    e.preventDefault();
                    id ? null : navigate("/");
                    const section = document.querySelector(id);
                    if (section) {
                      window.scrollTo({
                        top: section.offsetTop - 80,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors relative group py-2"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </div>

            {/* КОНТАКТНЫЙ ТЕЛЕФОН */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+998917777931"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <i className="fas fa-phone-alt mr-2 text-indigo-400"></i>
                +998 (91) 777-79-31
              </a>
            </div>

            {/* КНОПКА МЕНЮ ДЛЯ МОБИЛЬНЫХ */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-white bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* МОБИЛЬНОЕ МЕНЮ */}
        <div
          className={`lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
            {routes.map(({ path, label }) => (
              <a
                key={path}
                href={path}
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10">
              <a
                href="tel:+998917777931"
                className="flex items-center text-gray-300 hover:text-white transition-colors py-2"
              >
                <i className="fas fa-phone-alt mr-2 text-indigo-400"></i>
                +998 (91) 777-79-31
              </a>
              <button className="w-full mt-4 group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                <span className="relative flex items-center">
                  <i className="fas fa-headset mr-2"></i>
                  Заказать звонок
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
