import api from "./api";

export const getFilteredProducts = async (filters) => {
  try {
    const response = await api.post("/server/virtuoso/", { filter: filters });
    return response.data;
  } catch (error) {
    console.error("Ошибка получения продуктов:", error);
    throw error;
  }
};
