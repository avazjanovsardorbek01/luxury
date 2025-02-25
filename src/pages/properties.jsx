import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Apartments() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "",
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    microDistrict: "",
  });

  const perPage = 6;
  const navigate = useNavigate();

  const fetchApartments = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1/api/server/virtuoso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filter: {
            kategoriya_obekta: filters.category,
            price_ot: filters.priceMin,
            price_do: filters.priceMax,
            obshhaya_ploshhad_ot: filters.areaMin,
            obshhaya_ploshhad_do: filters.areaMax,
            subrajon: filters.microDistrict,
          },
          limit: 1000,
          page: 0,
        }),
      });
      if (!response.ok) throw new Error(`Ошибка сервера: ${response.status}`);
      const result = await response.json();
      if (Array.isArray(result?.data)) {
        const mergedApartments = result.data.map((apartment, index) => ({
          ...apartment,
          image: result.images?.[index] || "/no-image.jpg",
        }));
        setApartments(mergedApartments);
      } else {
        throw new Error("Неверный формат данных от сервера");
      }
    } catch (error) {
      console.error("Ошибка загрузки:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApartments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchApartments();
  };

  const currentApartments = apartments.slice(
    (page - 1) * perPage,
    page * perPage
  );
  const totalPages = Math.ceil(apartments.length / perPage);

  return (
    <section className="relative py-32 bg-gray-900" id="properties">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="h-px w-8 bg-indigo-500" />
            <span className="text-indigo-400 uppercase text-sm tracking-wider font-medium">
              Наши объекты
            </span>
            <span className="h-px w-8 bg-indigo-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Эксклюзивная
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 ml-2">
              недвижимость
            </span>
          </h2>
        </div>

        {/* Блок-обёртка для формы фильтрации */}
        <div className="mb-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 md:p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <i className="fas fa-filter text-indigo-400 mr-3" />
            Фильтр
          </h3>

          {/* Фильтры по категории */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() => setFilters({ ...filters, category: "" })}
              className={`px-6 py-2 rounded-full ${
                filters.category === ""
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              } transition-all duration-300 transform hover:scale-105 active:scale-95`}
            >
              Все объекты
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "Квартира" })}
              className={`px-6 py-2 rounded-full ${
                filters.category === "Квартира"
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              } transition-all duration-300 transform hover:scale-105 active:scale-95`}
            >
              Квартиры
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "Дом" })}
              className={`px-6 py-2 rounded-full ${
                filters.category === "Дом"
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              } transition-all duration-300 transform hover:scale-105 active:scale-95`}
            >
              Дома
            </button>
          </div>

          {/* Форма фильтрации */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Поле «Район» */}
            <div className="relative">
              <label className="text-gray-300 text-sm mb-1 inline-block">
                Район / Микрорайон
              </label>
              <div className="relative">
                <i className="fas fa-map-marker-alt absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="microDistrict"
                  placeholder="Введите район"
                  value={filters.microDistrict}
                  onChange={handleFilterChange}
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-white border border-white/30 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700 transition-all duration-300"
                />
              </div>
            </div>

            {/* Поле «Тип объекта» */}
            <div className="relative">
              <label className="text-gray-300 text-sm mb-1 inline-block">
                Тип объекта
              </label>
              <div className="relative">
                <i className="fas fa-building absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-white border border-white/30 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700 transition-all duration-300"
                >
                  <option value="">Все</option>
                  <option value="Жилая">Жилая</option>
                  <option value="Коммерческая">Коммерческая</option>
                </select>
              </div>
            </div>

            {/* Поле «Цена от» */}
            <div className="relative">
              <label className="text-gray-300 text-sm mb-1 inline-block">
                Цена от
              </label>
              <div className="relative">
                <i className="fas fa-ruble-sign absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <select
                  name="priceMin"
                  value={filters.priceMin}
                  onChange={handleFilterChange}
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-white border border-white/30 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700 transition-all duration-300"
                >
                  <option value="" disabled>
                    Не выбрано
                  </option>
                  <option value="50000">50 000 ₽</option>
                  <option value="100000">100 000 ₽</option>
                  <option value="200000">200 000 ₽</option>
                  <option value="300000">300 000 ₽</option>
                  <option value="500000">500 000 ₽</option>
                </select>
              </div>
            </div>

            {/* Поле «Цена до» */}
            <div className="relative">
              <label className="text-gray-300 text-sm mb-1 inline-block">
                Цена до
              </label>
              <div className="relative">
                <i className="fas fa-ruble-sign absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <select
                  name="priceMax"
                  value={filters.priceMax}
                  onChange={handleFilterChange}
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-white border border-white/30 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700 transition-all duration-300"
                >
                  <option value="" disabled>
                    Не выбрано
                  </option>
                  <option value="1000000">1 000 000 ₽</option>
                  <option value="2000000">2 000 000 ₽</option>
                  <option value="3000000">3 000 000 ₽</option>
                  <option value="4000000">4 000 000 ₽</option>
                  <option value="5000000">5 000 000 ₽</option>
                </select>
              </div>
            </div>

            {/* Поле «Площадь от» */}
            <div className="relative">
              <label className="text-gray-300 text-sm mb-1 inline-block">
                Площадь от
              </label>
              <div className="relative">
                <i className="fas fa-ruler-combined absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <select
                  name="areaMin"
                  value={filters.areaMin}
                  onChange={handleFilterChange}
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-white border border-white/30 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700 transition-all duration-300"
                >
                  <option value="" disabled>
                    Не выбрано
                  </option>
                  <option value="50">50 м²</option>
                  <option value="70">70 м²</option>
                  <option value="100">100 м²</option>
                </select>
              </div>
            </div>

            {/* Поле «Площадь до» */}
            <div className="relative">
              <label className="text-gray-300 text-sm mb-1 inline-block">
                Площадь до
              </label>
              <div className="relative">
                <i className="fas fa-ruler-combined absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <select
                  name="areaMax"
                  value={filters.areaMax}
                  onChange={handleFilterChange}
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-white border border-white/30 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700 transition-all duration-300"
                >
                  <option value="" disabled>
                    Не выбрано
                  </option>
                  <option value="80">80 м²</option>
                  <option value="100">100 м²</option>
                  <option value="150">150 м²</option>
                </select>
              </div>
            </div>

            {/* Кнопка отправки */}
            <div className="relative flex items-end justify-center mt-4 md:mt-8">
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 rounded-xl text-white hover:bg-indigo-700 transition"
              >
                Применить фильтры
              </button>
            </div>
          </form>
        </div>

        {/* Состояние загрузки и ошибки */}
        {loading && (
          <p className="text-yellow-500 text-center text-xl">Загрузка...</p>
        )}
        {error && <p className="text-red-500 text-center text-xl">{error}</p>}

        {/* Сетка квартир */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentApartments.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={`http://127.0.0.1${item.image[0]}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Фото квартиры"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Бейдж категории */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-indigo-600 text-white">
                    {item.category || "Квартира"}
                  </span>
                </div>

                {/* Цена */}
                <div className="absolute bottom-4 left-4">
                  <div className="text-2xl font-bold text-white">
                    {item.system_prod_price || item.system_rent_price} $
                  </div>
                  <div className="text-sm text-gray-300">
                    {item.obshhaya_ploshhad} м²
                  </div>
                </div>
              </div>

              {/* Информация */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {item.zagolovok || "Без названия"}
                </h3>

                <div className="flex items-center text-gray-300">
                  <i className="fas fa-map-marker-alt text-indigo-400 mr-2" />
                  {item.rajon || "Не указан район"}
                </div>

                {/* Характеристики */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-gray-300 mb-1">
                      <i className="fas fa-bed text-indigo-400 mr-2" />
                      {item.kolichestvo_spalen || "-"}
                    </div>
                    <div className="text-xs text-gray-400">Спален</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-300 mb-1">
                      <i className="fas fa-bath text-indigo-400 mr-2" />
                      {item.kolichestvo_santuzlov || "-"}
                    </div>
                    <div className="text-xs text-gray-400">Санузлов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-300 mb-1">
                      <i className="fas fa-ruler-combined text-indigo-400 mr-2" />
                      {item.obshhaya_ploshhad || "-"}
                    </div>
                    <div className="text-xs text-gray-400">м²</div>
                  </div>
                </div>

                {/* Кнопка подробнее */}
                <button
                  onClick={() => navigate(`/show/single/${item.id}`)}
                  className="group/button relative w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-center overflow-hidden"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/button:w-full group-hover/button:h-full opacity-10" />
                  <span className="relative flex items-center justify-center">
                    Подробнее
                    <i className="fas fa-arrow-right ml-2 transform group-hover/button:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="group relative inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl text-white rounded-full overflow-hidden hover:bg-white/10 transition-all duration-300 disabled:opacity-50"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10" />
              <span className="relative">Назад</span>
            </button>

            <span className="text-white/70">Страница {page}</span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === Math.ceil(apartments.length / perPage)}
              className="group relative inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl text-white rounded-full overflow-hidden hover:bg-white/10 transition-all duration-300 disabled:opacity-50"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10" />
              <span className="relative">Вперед</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
