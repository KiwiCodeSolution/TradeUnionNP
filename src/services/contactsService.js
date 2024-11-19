import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const updateContacts = async (updateData, token) => {
  try {
    const res = await axios.put(`${BaseURL}contacts`, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Сталася помилка при оновленні контактів.", error);
      throw error.response.data;
    }
  }
};

export const getContacts = async () => {
  try {
    const res = await axios.get(`${BaseURL}contacts`);
    console.log(res);
    return res;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Сталася помилка при оновленні контактів.", error);
      throw error.response.data;
    }
  }
};
