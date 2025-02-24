import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-20"></div>
        <div class="relative h-full w-full">
          <img
            src="https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/shaxar/cropped-images/AdobeStock_596864804-0-0-0-0-1738671594.jpeg"
            class="h-full w-full object-cover object-center scale-110 animate-slow-zoom"
            alt="Luxury Estate Background"
          />
        </div>
      </div>

      <div class="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-white space-y-8" data-aos="fade-right">
            <div class="flex items-center space-x-2 text-indigo-400">
              <span class="h-px w-8 bg-indigo-400"></span>
              <span class="text-sm uppercase tracking-wider">
                Luxury Real Estate
              </span>
            </div>

            <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
              <span class="block transform transition-transform hover:translate-x-2 duration-300">
                Найдите Свой
              </span>
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 transform transition-transform hover:translate-x-2 duration-300 delay-100">
                Идеальный Дом
              </span>
            </h1>

            <p class="text-xl text-gray-300 max-w-lg">
              Эксклюзивная недвижимость для тех, кто ценит непревзойденное
              качество и роскошь в каждой детали
            </p>

            <div class="flex space-x-4">
              <a
                href="#properties"
                class="group relative inline-flex items-center px-8 py-4 bg-indigo-600 overflow-hidden rounded-full"
              >
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                <span class="relative flex items-center">
                  Смотреть объекты
                  <svg
                    class="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#contact"
                class="group relative inline-flex items-center px-8 py-4 border-2 border-white text-white overflow-hidden rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                <span class="relative">Связаться с нами</span>
              </a>
            </div>
          </div>

          <div
            class="backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-2xl"
            data-aos="fade-left"
          >
            <div class="text-white mb-8">
              <h3 class="text-2xl font-bold mb-2">Найти недвижимость</h3>
              <p class="text-gray-300">
                Используйте фильтры для поиска идеального варианта
              </p>
            </div>

            <form class="space-y-6">
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-search text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"></i>
                </div>
                <input
                  type="text"
                  placeholder="Введите адрес или район"
                  class="block w-full pl-10 pr-3 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="relative">
                  <select class="block w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300">
                    <option value="" disabled selected>
                      Тип недвижимости
                    </option>
                    <option value="apartment">Квартиры</option>
                    <option value="house">Дома</option>
                    <option value="villa">Виллы</option>
                    <option value="penthouse">Пентхаусы</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>

                <div class="relative">
                  <select class="block w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300">
                    <option value="" disabled selected>
                      Бюджет
                    </option>
                    <option value="50">до 50 млн ₽</option>
                    <option value="100">50-100 млн ₽</option>
                    <option value="200">100-200 млн ₽</option>
                    <option value="max">более 200 млн ₽</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="relative">
                  <select class="block w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300">
                    <option value="" disabled selected>
                      Спальни
                    </option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>

                <div class="relative">
                  <select class="block w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300">
                    <option value="" disabled selected>
                      Площадь
                    </option>
                    <option value="100">до 100 м²</option>
                    <option value="200">100-200 м²</option>
                    <option value="300">200-300 м²</option>
                    <option value="max">более 300 м²</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="w-full relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden group"
              >
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                <span class="relative flex items-center">
                  <i class="fas fa-search mr-2"></i>
                  Найти
                </span>
              </button>
            </form>
          </div>
        </div>

        <div
          class="mt-16 grid grid-cols-3 gap-8 text-white text-center"
          data-aos="fade-up"
        >
          <div class="p-6 backdrop-blur-md bg-white/10 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div class="text-4xl font-bold mb-2">500+</div>
            <div class="text-gray-300">Объектов в продаже</div>
          </div>
          <div class="p-6 backdrop-blur-md bg-white/10 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div class="text-4xl font-bold mb-2">1000+</div>
            <div class="text-gray-300">Довольных клиентов</div>
          </div>
          <div class="p-6 backdrop-blur-md bg-white/10 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div class="text-4xl font-bold mb-2">15</div>
            <div class="text-gray-300">Лет на рынке</div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
