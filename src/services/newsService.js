import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export async function fetchNews() {
  const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json();
}

export const getAllNews = async () => {
  try {
    const res = await axios.get(`${BaseURL}news`);
    return res;
  } catch (error) {
    console.error("Сталася помилка при отриманні новин.", error);

    throw new Error("Сталася помилка при отриманні новин.");
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
    if (error.response && error.response.status === 409) {
      const message = error.response.data?.message || "Новина з такою назвою вже існує.";
      console.error("Конфлікт при створенні новини: ", message);
      throw new Error(message);
    }

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
    console.error("Сталася помилка при оновленні новини.", error);
    throw new Error("Сталася помилка при оновленні новини.");
  }
};

export const toggleArchiveStatus = async (newsId, currentStatus, token) => {
  try {
    const updatedStatus = currentStatus === "archived" ? "created" : "archived";

    const res = await axios.put(
      `${BaseURL}news/${newsId}`,
      { status: updatedStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    console.error("Сталася помилка при оновленні статусу новини.", error);
    throw new Error("Сталася помилка при оновленні статусу новини.");
  }
};

export const deleteNews = async (slug, userId, token) => {
  try {
    const response = await axios.delete(`${BaseURL}news/${slug}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error("Сталася помилка при видаленні новини");
    }

    console.log("Новина успішно видалена");
    return response.data;
  } catch (error) {
    console.error("Сталася помилка при видаленні новини", error);
    throw error;
  }
};
