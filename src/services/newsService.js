import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

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

export const deleteNews = async (slug, userId) => {
  try {
    const res = await fetch(`${BaseURL}news/${slug}/${userId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      let errorMessage = "Сталася помилка при видаленні новини";
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        console.error("Сталася помилка при видаленні новини", e);
      }

      throw new Error(errorMessage);
    }

    return;
  } catch (error) {
    console.error("Сталася помилка при видаленні новини", error);
    throw error;
  }
};
