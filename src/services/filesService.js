import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl"; // Переконайся, що BaseURL імпортується правильно

export const uploadFile = async (file, token) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${BaseURL}files/upload`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Помилка при завантаженні файлу:", error);
    throw new Error("Не вдалося завантажити файл");
  }
};
