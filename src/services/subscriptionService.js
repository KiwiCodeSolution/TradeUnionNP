import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const subscription = async data => {
  try {
    const res = await axios.post(`${BaseURL}subscription`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Сталася помилка при підписці на новини", error);
    throw new Error(error.response?.data?.message || "Сталася помилка при підписці на новини");
  }
};
