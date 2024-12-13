import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export async function fetchContacts() {
  const res = await fetch(`${BaseURL}contacts`, { method: "GET", cache: "no-store" });
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return res.json();
}

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

    return res;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Сталася помилка при оновленні контактів.", error);
      throw error.response.data;
    }
  }
};
