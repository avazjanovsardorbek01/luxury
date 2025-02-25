import React from "react";

const Footer = () => {
  return (
    <footer
      class="relative bg-gray-900 pt-24 pb-12 overflow-hidden"
      id="footer"
    >
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-5"></div>
        <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div class="space-y-6">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span class="text-white text-xl font-bold">L</span>
              </div>
              <span class="text-white text-xl font-bold">Luxury Estate</span>
            </div>

            <p class="text-gray-400 text-sm">
              Мы специализируемся на элитной недвижимости, предлагая нашим
              клиентам исключительный сервис и доступ к самым престижным
              объектам.
            </p>

            <div class="flex space-x-4">
              <a
                href="#"
                class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
              >
                <i class="fab fa-facebook-f transform group-hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
              >
                <i class="fab fa-instagram transform group-hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
              >
                <i class="fab fa-youtube transform group-hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
              >
                <i class="fab fa-telegram-plane transform group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-white font-bold mb-6">Быстрые ссылки</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#about"
                  class="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <i class="fas fa-chevron-right text-xs mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  class="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <i class="fas fa-chevron-right text-xs mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  class="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <i class="fas fa-chevron-right text-xs mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                  Объекты
                </a>
              </li>
              <li>
                <a
                  href="#agents"
                  class="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <i class="fas fa-chevron-right text-xs mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                  Команда
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <i class="fas fa-chevron-right text-xs mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold mb-6">Контакты</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-600/20 transition-colors">
                    <i class="fas fa-map-marker-alt text-indigo-400"></i>
                  </div>
                  Ташкент, Массив Кашгар 12
                </a>
              </li>
              <li>
                <a
                  href="tel:+998 (91) 777-79-31"
                  class="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-600/20 transition-colors">
                    <i class="fas fa-phone-alt text-indigo-400"></i>
                  </div>
                  +998 (91) 777-79-31
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@example.com"
                  class="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-600/20 transition-colors">
                    <i class="fas fa-envelope text-indigo-400"></i>
                  </div>
                  info@example.com
                </a>
              </li>
              <li>
                <div class="text-gray-400 flex items-center">
                  <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-clock text-indigo-400"></i>
                  </div>
                  Пн-Вс: 9:00 - 20:00
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold mb-6">Подписка на новости</h3>
            <p class="text-gray-400 text-sm mb-4">
              Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых
              объектах и специальных предложениях
            </p>
            <form class="space-y-3">
              <div class="relative">
                <input
                  type="email"
                  placeholder="Ваш email"
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                class="group relative w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                <span class="relative flex items-center">
                  <span>Подписаться</span>
                  <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                </span>
              </button>
            </form>
          </div>
        </div>

        <div class="pt-8 border-t border-white/10">
          <div class="grid md:grid-cols-2 gap-4 items-center">
            <div class="text-gray-400 text-sm">
              © 2024 Luxury Estate. Все права защищены.
            </div>

            <div class="flex space-x-4 md:justify-end text-sm">
              <a
                href="#"
                class="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                Условия использования
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                Карта сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
