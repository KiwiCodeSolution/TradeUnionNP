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

export const deleteReport = async (slug, userId) => {
  try {
    const res = await fetch(`${BaseURL}gallerey/${slug}/${userId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      let errorMessage = "Сталася помилка при видаленні фотозвіту";
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        console.error("Сталася помилка при видаленні фотозвіту", e);
      }

      throw new Error(errorMessage);
    }

    return;
  } catch (error) {
    console.error("Сталася помилка при видаленні фотозвіту", error);
    throw error;
  }
};
