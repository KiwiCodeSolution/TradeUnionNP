import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const joinUp = async data => {
  try {
    const res = await axios.post(`${BaseURL}email/membership-request`, data);
    return res;
  } catch (error) {
    if (error.response) {
      // Сервер відповів з помилкою
      const status = error.response.status;
      if (status === 500) {
        throw new Error("Сталася помилка на сервері. Спробуйте пізніше.");
      }
      throw new Error(`Помилка ${status}: ${error.response.data?.message || "Невідома помилка"}`);
    } else if (error.request) {
      // Не вдалося отримати відповідь від сервера
      throw new Error("Сервер не відповідає. Перевірте з'єднання.");
    } else {
      // Щось пішло не так під час запиту
      throw new Error("Невідома помилка. Спробуйте ще раз.");
    }
  }
};
