import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const getAllOffices = async () => {
  try {
    const res = await axios.get(`${BaseURL}ppo`);
    return res;
  } catch (error) {
    console.error("Сталася помилка при отриманні переліку ППО.", error);

    throw new Error("Сталася помилка при отриманні переліку ППО.");
  }
};
