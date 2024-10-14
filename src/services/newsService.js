import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";
import { toast } from "react-toastify";
import { optionsToastify } from "@/constants/configStyles";
import "react-toastify/dist/ReactToastify.css";

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
    console.error(error);
    toast.error("Сталася помилка при створенні новини.", optionsToastify);
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
    console.error(error);
    toast.error("Сталася помилка при створенні новини.", optionsToastify);
    throw new Error("Сталася помилка при оновленні новини.");
  }
};
