import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const subscription = async data => {
  console.log(data);
  try {
    const res = await axios.post(`${BaseURL}subscription`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Сталася помилка при підписці на новини:", error);

    const errorMessage =
      error.response?.data?.message ||
      error.response?.statusText ||
      "Не вдалося підписатися. Спробуйте пізніше.";

    throw new Error(errorMessage);
  }
};

export const confirmSubscription = async data => {
  console.log(data);
  try {
    const res = await axios.post(`${BaseURL}subscription/confirm`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Сталася помилка при підписці на новини:", error);

    const errorMessage =
      error.response?.data?.message ||
      error.response?.statusText ||
      "Не вдалося підписатися. Спробуйте пізніше.";

    throw new Error(errorMessage);
  }
};
