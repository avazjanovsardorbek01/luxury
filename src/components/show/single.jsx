import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaHome,
  FaPhone,
  FaHeart,
  FaBed,
  FaBath,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const SingleApartmentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchApartment = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://127.0.0.1/api/server/object", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }

        const result = await response.json();
        if (Array.isArray(result?.data) && result.data.length > 0) {
          const apartmentData = result.data[0];
          apartmentData.images = result.images?.[0] || [];
          setApartment(apartmentData);
        } else {
          throw new Error("Квартира не найдена");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [id]);

  const handleImageClick = (index) => {
    setActiveImage(index);
    setIsImageModalOpen(true);
  };

  const navigateImage = (direction) => {
    if (direction === "prev") {
      setActiveImage((prev) =>
        prev === 0 ? apartment.images.length - 1 : prev - 1
      );
    } else {
      setActiveImage((prev) =>
        prev === apartment.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Here you would typically make an API call to save to favorites
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
        <p>Загрузка данных...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-6 max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">Произошла ошибка</h2>
          <p className="text-red-300">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  if (!apartment) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">Квартира не найдена</h2>
          <p className="text-gray-300">
            Запрашиваемая недвижимость не существует или была удалена.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-900 via-indigo-1000/20 to-gray-800 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Кнопка возврата на главную */}
        <div className="mb-6 md:mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm md:text-base"
          >
            <FaHome className="text-lg md:text-xl" />
            <span>Главная</span>
          </button>
        </div>

        {/* Заголовок */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 mb-3 md:mb-4">
            <span className="h-px w-6 md:w-8 bg-indigo-500" />
            <span className="text-indigo-400 uppercase text-xs md:text-sm tracking-wider font-medium">
              Детали объекта
            </span>
            <span className="h-px w-6 md:w-8 bg-indigo-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            {apartment.name}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 block mt-1 md:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {apartment.system_prod_price?.toLocaleString() + " $" || ""}
            </span>
          </h1>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Галерея */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="relative group">
              <motion.img
                src={`http://127.0.0.1${apartment.images[activeImage]}`}
                alt="Основное фото"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl md:rounded-2xl lg:rounded-3xl cursor-pointer border-2 border-white/10 hover:border-indigo-500 transition-all"
                onClick={() => setIsImageModalOpen(true)}
                loading="lazy"
              />
              <button
                onClick={toggleFavorite}
                className={`absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${
                  isFavorite
                    ? "bg-red-500/20 text-red-400"
                    : "bg-white/10 backdrop-blur-md text-white hover:text-indigo-400"
                }`}
              >
                <FaHeart className="text-lg md:text-xl" />
              </button>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
              {apartment.images.map((img, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer overflow-hidden rounded-lg md:rounded-xl border-2 ${
                    activeImage === index
                      ? "border-indigo-500"
                      : "border-white/10 hover:border-indigo-400"
                  } transition-all`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={`http://127.0.0.1${img}`}
                    alt={`Фото ${index + 1}`}
                    className="w-full h-16 sm:h-20 md:h-24 object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Информация */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {/* Характеристики */}
            <div className="bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Основные характеристики
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600/20 rounded-lg md:rounded-xl flex items-center justify-center text-indigo-400">
                    <FaMapMarkerAlt className="text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">
                      Расположение
                    </p>
                    <p className="text-white text-sm md:text-base">
                      {apartment.gorod}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600/20 rounded-lg md:rounded-xl flex items-center justify-center text-indigo-400">
                    <FaRulerCombined className="text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Площадь</p>
                    <p className="text-white text-sm md:text-base">
                      {apartment.obshhaya_ploshhad} м²
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600/20 rounded-lg md:rounded-xl flex items-center justify-center text-indigo-400">
                    <FaBed className="text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Комнаты</p>
                    <p className="text-white text-sm md:text-base">
                      {apartment.kolichestvo_komnat}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600/20 rounded-lg md:rounded-xl flex items-center justify-center text-indigo-400">
                    <FaBath className="text-sm md:text-base" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Санузлы</p>
                    <p className="text-white text-sm md:text-base">
                      {apartment.kolichestvo_sanuzlov}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Описание */}
            <div className="bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                {apartment.zagolovok}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {apartment.opisanie || "Описание отсутствует"}
              </p>
            </div>

            {/* Кнопка связи */}
            <motion.a
              href="https://t.me/mehagulyamova"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center w-full px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 text-sm md:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10" />
              <span className="relative flex items-center">
                <FaPhone className="mr-2 text-base md:text-lg" />
                Связаться с агентом
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:text-indigo-400 transition-all z-10"
            >
              <FaTimes className="text-xl" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:text-indigo-400 transition-all z-10"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:text-indigo-400 transition-all z-10"
            >
              <FaChevronRight className="text-xl" />
            </button>

            <motion.img
              src={`http://127.0.0.1${apartment.images[activeImage]}`}
              alt="Увеличенное фото"
              className="max-w-full max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] rounded-xl md:rounded-2xl border-2 border-white/10 cursor-pointer"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={() => setIsImageModalOpen(false)}
              loading="lazy"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default SingleApartmentPage;
