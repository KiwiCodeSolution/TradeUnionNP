import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const getDefendersData = async () => {
  try {
    const res = await fetch(`${BaseURL}defenders`, {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Помилка завантаження:", error);
    return [];
  }
};

export const deleteItem = async (id, token) => {
  try {
    const response = await axios.delete(`${BaseURL}defenders/${id}`, {
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

export const toggleVisible = async (id, token) => {
  try {
    const response = await axios.patch(`${BaseURL}defenders/${id}/toggle`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Помилка при зміні видимості:", error);
    throw new Error("Не вдалося змінити видимість запису");
  }
};
