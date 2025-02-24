import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import {
  FaWhatsapp,
  FaTelegram,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";
import { postContact } from "../services/contact";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await postContact(formData);
      setSubmitSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitError("Ошибка при отправке, попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Телефон",
      content: "(97) 777-79-31",
      link: "tel:+998977777931",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "info@example.com",
      link: "mailto:info@example.com",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      content: "+998 (97) 777-79-31",
      link: "https://wa.me/998977777931",
    },
    {
      icon: <FaTelegram />,
      title: "Telegram",
      content: "@example",
      link: "https://t.me/example",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-gray-900 via-indigo-900/20 to-gray-900"
    >
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="h-px w-8 bg-indigo-500" />
            <span className="text-indigo-400 uppercase text-sm tracking-wider font-medium">
              Свяжитесь с нами
            </span>
            <span className="h-px w-8 bg-indigo-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Готовы обсудить ваш
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 ml-2">
              будущий дом?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Оставьте заявку или позвоните нам. Мы всегда рады помочь в поиске
            идеальной недвижимости
          </p>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Левая колонка - Форма */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitSuccess && (
                  <motion.div
                    className="success-message p-4 mb-6 bg-emerald-500/20 text-emerald-400 rounded-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Ваше сообщение успешно отправлено!
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    className="error-message p-4 mb-6 bg-red-500/20 text-red-400 rounded-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitError}
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Имя */}
                  <div className="relative">
                    <label className="text-sm text-gray-300 mb-2 block">
                      Ваше имя
                    </label>
                    <div className="input-icon flex items-center bg-white/5 border border-white/10 rounded-xl px-4">
                      <FaUser className="text-gray-400 mr-2" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                        placeholder="Иван Петров"
                        required
                      />
                    </div>
                  </div>

                  {/* Телефон */}
                  <div className="relative">
                    <label className="text-sm text-gray-300 mb-2 block">
                      Телефон
                    </label>
                    <div className="input-icon flex items-center bg-white/5 border border-white/10 rounded-xl px-4">
                      <FaPhone className="text-gray-400 mr-2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                        placeholder="+998 (__) ___ __ __"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="text-sm text-gray-300 mb-2 block">
                    Email
                  </label>
                  <div className="input-icon flex items-center bg-white/5 border border-white/10 rounded-xl px-4">
                    <FaEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Сообщение */}
                <div className="relative">
                  <label className="text-sm text-gray-300 mb-2 block">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 min-h-[120px] resize-none"
                    placeholder="Опишите, какую недвижимость вы ищете..."
                    required
                  />
                </div>

                {/* Кнопка отправки */}
                <motion.button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10" />
                  <span className="relative flex items-center">
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    <FaPaperPlane className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Правая колонка - Контакты */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Стилизованная карта */}
            <div className="relative h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-white/10">
              <div className="absolute inset-0 opacity-10">
                {/* ... (декоративные элементы карты) */}
              </div>
              <div className="relative h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 mx-auto mb-4">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Главный офис
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Ташкент, Массив Кашгар 12
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Построить маршрут</span>
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Контактные карточки */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">
                        {info.title}
                      </h4>
                      <p className="text-white hover:text-indigo-400 transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* График работы */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">График работы</h3>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
                  Сейчас открыто
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-400">
                  <span>Понедельник - Пятница</span>
                  <span>9:00 - 20:00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Суббота</span>
                  <span>10:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Воскресенье</span>
                  <span>По записи</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
