import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const getAllReports = async () => {
  try {
    const res = await axios.get(`${BaseURL}gallerey`);
    return res;
  } catch (error) {
    console.error("Сталася помилка при отриманні фотозвітів.", error);

    throw new Error("Сталася помилка при отриманні фотозвітів.");
  }
};

export const createReport = async (data, token) => {
  try {
    const res = await axios.post(`${BaseURL}gallerey`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      const message = error.response.data?.message || "Запис з такою назвою вже існує.";
      console.error("Конфлікт при створенні запису: ", message);
      throw new Error(message);
    }

    console.error("Сталася помилка при створенні фотозвіту.", error);

    throw new Error("Сталася помилка при створенні фотозвіту.");
  }
};

export const updateReport = async (reportId, data, token) => {
  try {
    const res = await axios.put(`${BaseURL}gallerey/${reportId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.error("Сталася помилка при оновленні фотозвіту.", error);
    throw new Error("Сталася помилка при оновленні фотозвіту.");
  }
};

export const toggleArchiveReportStatus = async (reportId, currentStatus, token) => {
  try {
    const updatedStatus = currentStatus === "archived" ? "created" : "archived";

    const res = await axios.put(
      `${BaseURL}gallerey/${reportId}`,
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
    console.error("Сталася помилка при оновленні статусу фотозвіту.", error);
    throw new Error("Сталася помилка при оновленні статусу фотозвіту.");
  }
};

export const deleteReport = async (slug, userId, token) => {
  try {
    const res = await axios.delete(`${BaseURL}gallerey/${slug}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (res.status !== 200) {
      throw new Error("Сталася помилка при видаленні звіту");
    }

    console.log("Звіт успішно видалено");
    return res.data;
  } catch (error) {
    console.error("Сталася помилка при видаленні фотозвіту", error);
    throw error;
  }
};
