import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      class="relative py-32 bg-gradient-to-b from-gray-900 via-indigo-900/50 to-gray-900"
    >
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-5"></div>
        <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-20 flex flex-col items-center"
          data-aos="fade-up"
        >
          <div class="flex flex-col items-center space-y-2 mb-4">
            <span class="h-px w-16 bg-indigo-500"></span>
            <span class="text-indigo-400 uppercase text-sm tracking-wider font-medium">
              Наши услуги
            </span>
            <span class="h-px w-16 bg-indigo-500"></span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white flex flex-col">
            Премиальный сервис для
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mt-2">
              требовательных клиентов
            </span>
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Мы предоставляем полный спектр услуг в сфере элитной недвижимости
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 hover:transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="relative w-16 h-16 mb-8">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div class="relative w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                <i class="fas fa-home text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"></i>
              </div>
            </div>

            <h3 class="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
              Продажа недвижимости
            </h3>
            <p class="text-gray-400 mb-6">
              Профессиональное сопровождение сделок купли-продажи элитной
              недвижимости
            </p>

            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Оценка рыночной стоимости
              </li>
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Профессиональная фотосъемка
              </li>
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Юридическая проверка
              </li>
            </ul>

            <a
              href="#contact"
              class="group/button relative inline-flex items-center text-white"
            >
              <span class="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-indigo-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 group-hover/button:after:scale-x-100">
                Подробнее
              </span>
              <svg
                class="ml-2 w-5 h-5 transform group-hover/button:translate-x-1 transition-transform"
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
            </a>
          </div>

          <div
            class="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 hover:transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="relative w-16 h-16 mb-8">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div class="relative w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                <i class="fas fa-key text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"></i>
              </div>
            </div>

            <h3 class="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
              Подбор недвижимости
            </h3>
            <p class="text-gray-400 mb-6">
              Индивидуальный поиск объектов недвижимости по вашим критериям
            </p>

            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Персональный менеджер
              </li>
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Закрытая база объектов
              </li>
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                VIP-просмотры
              </li>
            </ul>

            <a
              href="#contact"
              class="group/button relative inline-flex items-center text-white"
            >
              <span class="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-indigo-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 group-hover/button:after:scale-x-100">
                Подробнее
              </span>
              <svg
                class="ml-2 w-5 h-5 transform group-hover/button:translate-x-1 transition-transform"
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
            </a>
          </div>

          <div
            class="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 hover:transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="relative w-16 h-16 mb-8">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div class="relative w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                <i class="fas fa-chart-line text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"></i>
              </div>
            </div>

            <h3 class="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
              Инвестиции
            </h3>
            <p class="text-gray-400 mb-6">
              Профессиональные консультации по инвестициям в недвижимость
            </p>

            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Анализ рынка
              </li>
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Расчет доходности
              </li>
              <li class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Управление портфелем
              </li>
            </ul>

            <a
              href="#contact"
              class="group/button relative inline-flex items-center text-white"
            >
              <span class="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-indigo-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 group-hover/button:after:scale-x-100">
                Подробнее
              </span>
              <svg
                class="ml-2 w-5 h-5 transform group-hover/button:translate-x-1 transition-transform"
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
            </a>
          </div>
        </div>
        <div class="mt-20 text-center" data-aos="fade-up">
          <div class="inline-block p-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">
            <a
              href="#contact"
              class="group relative inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full overflow-hidden hover:bg-gray-800 transition-colors"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
              <span class="relative flex items-center">
                Получить консультацию
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
