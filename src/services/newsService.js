import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const getAllNews = async () => {
  try {
    const res = await axios.get(`${BaseURL}news`);
    return res;
  } catch (error) {
    console.error("Сталася помилка при створенні новини.", error);

    throw new Error("Сталася помилка при створенні новини.");
  }
};

export const createNews = async (newsData, token) => {
  try {
    const res = await axios.post(`${BaseURL}news`, newsData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.error("Сталася помилка при створенні новини.", error);

    throw new Error("Сталася помилка при створенні новини.");
  }
};

export const updateNews = async (newsId, newsData, token) => {
  try {
    const res = await axios.put(`${BaseURL}news/${newsId}`, newsData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.error("Сталася помилка при створенні новини.", error);
    throw new Error("Сталася помилка при оновленні новини.");
  }
};

export const deleteNews = async (slug, userId) => {
  try {
    const res = await fetch(`${BaseURL}news/${slug}/${userId}`, {
      method: "DELETE",
    });

    // Перевіряємо, чи статус відповіді вказує на успішну операцію
    if (!res.ok) {
      let errorMessage = "Failed to delete news";

      // Якщо сервер повертає тіло помилки, читаємо його
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        console.error("Failed to parse error response", e);
      }

      throw new Error(errorMessage);
    }

    // Якщо статус 204 (No Content), просто повертаємо
    return; // Нічого не потрібно повертати, якщо 204
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
};
