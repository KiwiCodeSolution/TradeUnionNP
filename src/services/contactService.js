import { BaseURL } from "@/constants/BaseUrl";

export const sendContactForm = async formData => {
  const response = await fetch(`${BaseURL}email/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Помилка відправки");
  }

  return;
};
