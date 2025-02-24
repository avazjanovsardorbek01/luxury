import React from "react";

const About = () => {
  return (
    <section
      id="about"
      class="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900"
    >
      <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5"></div>
        <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="inline-flex items-center space-x-2 mb-4">
            <span class="h-px w-8 bg-indigo-500"></span>
            <span class="text-indigo-400 uppercase text-sm tracking-wider font-medium">
              О нашей компании
            </span>
            <span class="h-px w-8 bg-indigo-500"></span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Создаем пространство для
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              вашей жизни
            </span>
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            15 лет безупречной работы в сфере элитной недвижимости. Мы не просто
            продаем дома – мы помогаем воплотить ваши мечты в реальность.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative" data-aos="fade-right">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
                    class="w-full h-64 object-cover"
                    alt="Luxury Home 1"
                  />
                </div>
                <div class="rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    class="w-full h-48 object-cover"
                    alt="Luxury Home 2"
                  />
                </div>
              </div>
              <div class="space-y-4 pt-8">
                <div class="rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                    class="w-full h-48 object-cover"
                    alt="Luxury Home 3"
                  />
                </div>
                <div class="rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
                    class="w-full h-64 object-cover"
                    alt="Luxury Home 4"
                  />
                </div>
              </div>
            </div>
            <div class="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div class="space-y-8" data-aos="fade-left">
            <div class="grid gap-6">
              <div class="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i class="fas fa-award text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">
                      Экспертность
                    </h3>
                    <p class="text-gray-300">
                      Более 1000 успешных сделок с элитной недвижимостью
                    </p>
                  </div>
                </div>
              </div>

              <div class="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i class="fas fa-gem text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">
                      Премиум сервис
                    </h3>
                    <p class="text-gray-300">
                      Индивидуальный подход к каждому клиенту
                    </p>
                  </div>
                </div>
              </div>

              <div class="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i class="fas fa-shield-alt text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">
                      Надежность
                    </h3>
                    <p class="text-gray-300">
                      Гарантия безопасности и прозрачности сделок
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-6 mt-12">
              <div class="text-center">
                <div class="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <span class="counter" data-target="15">
                    0
                  </span>
                  +
                </div>
                <p class="text-gray-400 text-sm">Лет опыта</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <span class="counter" data-target="1000">
                    0
                  </span>
                  +
                </div>
                <p class="text-gray-400 text-sm">Сделок</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <span class="counter" data-target="98">
                    0
                  </span>
                  %
                </div>
                <p class="text-gray-400 text-sm">Довольных клиентов</p>
              </div>
            </div>

            <div class="mt-12">
              <a
                href="#contact"
                class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full overflow-hidden"
              >
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                <span class="relative flex items-center">
                  Начать сотрудничество
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
      </div>
    </section>
  );
};

export default About;
