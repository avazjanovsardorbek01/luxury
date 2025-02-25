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
  FaParking,
} from "react-icons/fa";

const SingleApartmentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Создаем навигацию
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

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

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Загрузка данных...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <h2>Произошла ошибка</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!apartment) {
    return (
      <div className="not-found-container">
        <h2>Квартира не найдена</h2>
        <p>Запрашиваемая недвижимость не существует или была удалена.</p>
      </div>
    );
  }

  return (
    <motion.section
      className="relative py-32 bg-gradient-to-b from-gray-900 via-indigo-1000/20 to-gray-800"
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
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            <FaHome className="text-xl" />
            <span>Главная</span>
          </button>
        </div>

        {/* Заголовок */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="h-px w-8 bg-indigo-500" />
            <span className="text-indigo-400 uppercase text-sm tracking-wider font-medium">
              Детали объекта
            </span>
            <span className="h-px w-8 bg-indigo-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {apartment.name}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 block mt-2">
              {apartment.system_prod_price?.toLocaleString() + " $" || ""}
            </span>
          </h1>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Галерея */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="relative group">
              <motion.img
                src={`http://127.0.0.1${apartment.images[activeImage]}`}
                alt="Основное фото"
                className="w-full h-96 object-cover rounded-3xl cursor-pointer border-2 border-white/10 hover:border-indigo-500 transition-all"
                onClick={() => setIsImageModalOpen(true)}
              />
              <button className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:text-indigo-400 transition-all">
                <FaHeart className="text-xl" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {apartment.images.map((img, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer overflow-hidden rounded-xl border-2 ${
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
                    className="w-full h-24 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Информация */}
          <motion.div
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {/* Характеристики */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Основные характеристики
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Расположение</p>
                    <p className="text-white">{apartment.gorod}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400">
                    <FaRulerCombined />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Площадь</p>
                    <p className="text-white">
                      {apartment.obshhaya_ploshhad} м²
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400">
                    <FaBed />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Комнаты</p>
                    <p className="text-white">{apartment.kolichestvo_komnat}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400">
                    <FaBath />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Санузлы</p>
                    <p className="text-white">
                      {apartment.kolichestvo_sanuzlov}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Описание */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Описание</h2>
              <p className="text-gray-300 leading-relaxed">
                {apartment.zagolovok || "Описание отсутствует"}
              </p>
            </div>

            {/* Кнопка связи */}
            <motion.a
              href="https://t.me/mehagulyamova"
              target="_blank"
              className="group relative inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10" />
              <span className="relative flex items-center">
                <FaPhone className="mr-2" />
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
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.img
              src={`http://127.0.0.1${apartment.images[activeImage]}`}
              alt="Увеличенное фото"
              className="max-w-full max-h-[90vh] rounded-3xl border-2 border-white/10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default SingleApartmentPage;
