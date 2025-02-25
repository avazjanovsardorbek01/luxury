import React, { useState } from "react";
import { getObjects } from "../services/contact";

const FilterForm = () => {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [area, setArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filter = { search, propertyType, budget, bedrooms, area };
    setLoading(true);
    setError(null);
    try {
      const response = await getObjects(filter);
      setResults(response.data);
    } catch (err) {
      setError("Ошибка при поиске объектов");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="backdrop-blur-md bg-black/10 rounded-3xl p-8 shadow-2xl"
      data-aos="fade-left"
    >
      <div className="text-white mb-8">
        <h3 className="text-2xl font-bold mb-2">Найти недвижимость</h3>
        <p className="text-gray-300">
          Используйте фильтры для поиска идеального варианта
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"></i>
          </div>
          <input
            type="text"
            placeholder="Введите адрес или район"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-3 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="block w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300"
            >
              <option value="" disabled>
                Тип недвижимости
              </option>
              <option value="apartment">Квартиры</option>
              <option value="house">Дома</option>
              <option value="villa">Виллы</option>
              <option value="penthouse">Пентхаусы</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>

          <div className="relative">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="block w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300"
            >
              <option value="" disabled>
                Бюджет
              </option>
              <option value="50">до 50 млн ₽</option>
              <option value="100">50-100 млн ₽</option>
              <option value="200">100-200 млн ₽</option>
              <option value="max">более 200 млн ₽</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="block w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300"
            >
              <option value="" disabled>
                Спальни
              </option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>

          <div className="relative">
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="block w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/30 transition-all duration-300"
            >
              <option value="" disabled>
                Площадь
              </option>
              <option value="100">до 100 м²</option>
              <option value="200">100-200 м²</option>
              <option value="300">200-300 м²</option>
              <option value="max">более 300 м²</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
          <span className="relative flex items-center">
            <i className="fas fa-search mr-2"></i>
            Найти
          </span>
        </button>
      </form>
      {loading && <p className="text-white">Загрузка...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {results && (
        <div className="mt-6">
          <h4 className="text-white">Найденные объекты:</h4>
          <pre className="text-white">{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FilterForm;
