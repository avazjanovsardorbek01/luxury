import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-20"></div>
        <div className="relative h-full w-full">
          <img
            src="https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/shaxar/cropped-images/AdobeStock_596864804-0-0-0-0-1738671594.jpeg"
            className="h-full w-full object-cover object-center scale-110 animate-slow-zoom"
            alt="Luxury Estate Background"
          />
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8" data-aos="fade-right">
            <div className="flex items-center space-x-2 text-indigo-400">
              <span className="h-px w-8 bg-indigo-400"></span>
              <span className="text-sm uppercase tracking-wider">
                Luxury Real Estate
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block transform transition-transform hover:translate-x-2 duration-300">
                Найдите Свой
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 transform transition-transform hover:translate-x-2 duration-300 delay-100">
                Идеальный Дом
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-lg">
              Эксклюзивная недвижимость для тех, кто ценит непревзойденное
              качество и роскошь в каждой детали
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#properties"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 overflow-hidden rounded-full"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                <span className="relative flex items-center">
                  Смотреть объекты
                  <svg
                    className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white overflow-hidden rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                <span className="relative">Связаться с нами</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-white text-center"
          data-aos="fade-up"
        >
          <div className="p-4 sm:p-6 backdrop-blur-md bg-white/10 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
            <div className="text-gray-300">Объектов в продаже</div>
          </div>
          <div className="p-4 sm:p-6 backdrop-blur-md bg-white/10 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold mb-2">1000+</div>
            <div className="text-gray-300">Довольных клиентов</div>
          </div>
          <div className="p-4 sm:p-6 backdrop-blur-md bg-white/10 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold mb-2">15</div>
            <div className="text-gray-300">Лет на рынке</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
