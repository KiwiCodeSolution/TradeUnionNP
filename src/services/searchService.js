import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const searchNews = async searchParams => {
  try {
    const res = await axios.post(
      `${BaseURL}news/search`,
      {
        query: searchParams,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Сталася помилка при пошуку", {
      message: error.message,
    });

    throw new Error("Сталася помилка при пошуку.");
  }
};
