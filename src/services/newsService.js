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
