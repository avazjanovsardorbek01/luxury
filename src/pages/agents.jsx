import React from "react";

const Agents = () => {
  return (
    <section id="agents" class="relative py-32 bg-gray-900">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-5"></div>
        <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="inline-flex items-center space-x-2 mb-4">
            <span class="h-px w-8 bg-indigo-500"></span>
            <span class="text-indigo-400 uppercase text-sm tracking-wider font-medium">
              Наша команда
            </span>
            <span class="h-px w-8 bg-indigo-500"></span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Эксперты в сфере
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              элитной недвижимости
            </span>
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Профессионалы с многолетним опытом работы на рынке премиальной
            недвижимости
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group relative" data-aos="fade-up" data-aos-delay="100">
            <div class="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10">
              <div class="relative h-96 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Agent Name"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <div class="flex justify-center space-x-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-white mb-2">
                  Александр Петров
                </h3>
                <p class="text-indigo-400 mb-4">Старший брокер</p>

                <div class="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div class="text-2xl font-bold text-white">150+</div>
                    <div class="text-sm text-gray-400">Сделок</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-white">10</div>
                    <div class="text-sm text-gray-400">Лет опыта</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-white">98%</div>
                    <div class="text-sm text-gray-400">Довольных клиентов</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  class="group/button inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/button:w-full group-hover/button:h-full opacity-10"></span>
                  <span class="relative flex items-center">
                    Связаться
                    <i class="fas fa-arrow-right ml-2 transform group-hover/button:translate-x-1 transition-transform"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="group relative" data-aos="fade-up" data-aos-delay="200">
            <div class="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10">
              <div class="relative h-96 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Agent Name"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <div class="flex justify-center space-x-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-white mb-2">
                  Александр Петров
                </h3>
                <p class="text-indigo-400 mb-4">Старший брокер</p>

                <div class="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div class="text-2xl font-bold text-white">150+</div>
                    <div class="text-sm text-gray-400">Сделок</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-white">10</div>
                    <div class="text-sm text-gray-400">Лет опыта</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-white">98%</div>
                    <div class="text-sm text-gray-400">Довольных клиентов</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  class="group/button inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/button:w-full group-hover/button:h-full opacity-10"></span>
                  <span class="relative flex items-center">
                    Связаться
                    <i class="fas fa-arrow-right ml-2 transform group-hover/button:translate-x-1 transition-transform"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="group relative" data-aos="fade-up" data-aos-delay="300">
            <div class="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10">
              <div class="relative h-96 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Agent Name"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <div class="flex justify-center space-x-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-white mb-2">
                  Александр Петров
                </h3>
                <p class="text-indigo-400 mb-4">Старший брокер</p>

                <div class="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div class="text-2xl font-bold text-white">150+</div>
                    <div class="text-sm text-gray-400">Сделок</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-white">10</div>
                    <div class="text-sm text-gray-400">Лет опыта</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-white">98%</div>
                    <div class="text-sm text-gray-400">Довольных клиентов</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  class="group/button inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/button:w-full group-hover/button:h-full opacity-10"></span>
                  <span class="relative flex items-center">
                    Связаться
                    <i class="fas fa-arrow-right ml-2 transform group-hover/button:translate-x-1 transition-transform"></i>
                  </span>
                </a>
              </div>
            </div>
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
                Присоединиться к команде
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

export default Agents;
