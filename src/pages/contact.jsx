import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      class="relative py-32 bg-gradient-to-b from-gray-900 via-indigo-900/20 to-gray-900"
    >
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-5"></div>
        <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="inline-flex items-center space-x-2 mb-4">
            <span class="h-px w-8 bg-indigo-500"></span>
            <span class="text-indigo-400 uppercase text-sm tracking-wider font-medium">
              Свяжитесь с нами
            </span>
            <span class="h-px w-8 bg-indigo-500"></span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Готовы обсудить ваш
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              будущий дом?
            </span>
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Оставьте заявку или позвоните нам. Мы всегда рады помочь в поиске
            идеальной недвижимости
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <div class="relative" data-aos="fade-right">
            <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <form class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="relative">
                    <label class="text-sm text-gray-300 mb-2 block">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="Иван Петров"
                    />
                  </div>

                  <div class="relative">
                    <label class="text-sm text-gray-300 mb-2 block">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                      placeholder="+998 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div class="relative">
                  <label class="text-sm text-gray-300 mb-2 block">Email</label>
                  <input
                    type="email"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>

                <div class="relative">
                  <label class="text-sm text-gray-300 mb-2 block">Бюджет</label>
                  <select class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 appearance-none">
                    <option value="" disabled selected>
                      Выберите диапазон
                    </option>
                    <option value="50">До 50 млн ₽</option>
                    <option value="100">50-100 млн ₽</option>
                    <option value="200">100-200 млн ₽</option>
                    <option value="max">Более 200 млн ₽</option>
                  </select>
                  <div class="absolute right-4 top-[41px] pointer-events-none text-gray-400">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>

                <div class="relative">
                  <label class="text-sm text-gray-300 mb-2 block">
                    Сообщение
                  </label>
                  <textarea
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 min-h-[120px] resize-none"
                    placeholder="Опишите, какую недвижимость вы ищете..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
                >
                  <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                  <span class="relative flex items-center">
                    <span>Отправить заявку</span>
                    <i class="fas fa-paper-plane ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div class="space-y-8" data-aos="fade-left">
            <div class="relative h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-white/10">
              <div class="absolute inset-0 opacity-10">
                <svg
                  class="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 L100,0 L100,100 L0,100 Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.5"
                  ></path>
                  <path
                    d="M0,50 Q25,25 50,50 T100,50"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.5"
                  ></path>
                  <path
                    d="M0,30 Q25,75 50,30 T100,30"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </div>
              <div class="relative h-full flex items-center justify-center text-center">
                <div>
                  <div class="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 mx-auto mb-4">
                    <i class="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">
                    Главный офис
                  </h3>
                  <p class="text-gray-400 mb-4">Ташкент, Массив Кашгар 12</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    class="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Построить маршрут</span>
                    <i class="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 class="text-gray-400 text-sm mb-1">Телефон</h4>
                    <a
                      href="tel:+998 (91) 777-79-31"
                      class="text-white hover:text-indigo-400 transition-colors"
                    >
                      +998 (91) 777-79-31
                    </a>
                  </div>
                </div>
              </div>

              <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 class="text-gray-400 text-sm mb-1">Email</h4>
                    <a
                      href="mailto:info@example.com"
                      class="text-white hover:text-indigo-400 transition-colors"
                    >
                      info@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <i class="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 class="text-gray-400 text-sm mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/74951234567"
                      class="text-white hover:text-indigo-400 transition-colors"
                    >
                      +998 (91) 777-79-31
                    </a>
                  </div>
                </div>
              </div>

              <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <i class="fab fa-telegram-plane"></i>
                  </div>
                  <div>
                    <h4 class="text-gray-400 text-sm mb-1">Telegram</h4>
                    <a
                      href="https://t.me/example"
                      class="text-white hover:text-indigo-400 transition-colors"
                    >
                      @example
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-xl font-bold text-white">График работы</h3>
                <div class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
                  Сейчас открыто
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between text-gray-400">
                  <span>Понедельник - Пятница</span>
                  <span>9:00 - 20:00</span>
                </div>
                <div class="flex justify-between text-gray-400">
                  <span>Суббота</span>
                  <span>10:00 - 18:00</span>
                </div>
                <div class="flex justify-between text-gray-400">
                  <span>Воскресенье</span>
                  <span>По записи</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
