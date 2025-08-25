"use client";

import { useEffect, useState } from "react";
import NoPhoto from "@/images/no-photo.png";
import RegionalOfficeAvatarEditor from "../regional_offices/RegionalOfficeAvatarEditor";
import Image from "next/image";
import { BaseURL, BaseURLImage } from "@/constants/BaseUrl";
import { extractFirstImage } from "@/utils/extractFirstImage";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const getPreviewUrl = fileOrUrl => {
  if (!fileOrUrl) return NoPhoto;
  if (fileOrUrl instanceof File) return URL.createObjectURL(fileOrUrl); // новий файл
  if (typeof fileOrUrl === "string") {
    if (fileOrUrl.startsWith("blob:")) return fileOrUrl; // локальне прев'ю
    return `${BaseURLImage}${fileOrUrl}`; // бекенд-рядок
  }
  return NoPhoto;
};

const EditPpoForm = ({ office }) => {
  const {
    _id,
    director,
    position,
    avatar,
    quantity,
    image,
    email,
    phone,
    admission_address,
    application_address,
    committee,
    link,
    region,
  } = office;
  const { token } = useAuth();
  const [initialData, setInitialData] = useState(office);

  const [formData, setFormData] = useState({
    director: director || "",
    position: position || "",
    avatar: avatar || "", // бекенд-шлях або File
    _avatarFile: null, // новий файл для сабміту
    image: image || "", // бекенд-шлях або File
    _imageFile: null, // новий файл для сабміту
    quantity: quantity || "",
    email: email || "",
    phone: phone || "",
    admission_address: admission_address || "",
    application_address: application_address || "",
    committee: committee?.join(", ") || "",
    link: link || "",
  });

  const handleAvatarChange = file => {
    setFormData(prev => ({
      ...prev,
      avatar: file, // для preview
      _avatarFile: file, // для сабміту
    }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // const parts = avatar.split("/"); // ['','ppo','volinska-ppo']

  // 2. Взяти останній елемент масиву за допомогою pop()
  // const cleanedLink = parts.pop();
  console.log(avatar);

  const validateForm = () => {
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Некоректний email");
      return false;
    }
    if (formData.phone && !/^\+380\d{9}$/.test(formData.phone)) {
      alert("Телефон має бути у форматі +380XXXXXXXXX");
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    const fd = new FormData();

    // Додаємо файли окремо від циклу
    // Логіка для аватара
    if (formData._avatarFile instanceof File) {
      fd.set("avatar", formData._avatarFile);
    } else {
      fd.set("avatar", formData.avatar);
    }

    // Логіка для зображення
    if (formData._imageFile instanceof File) {
      fd.set("image", formData._imageFile);
    } else {
      fd.set("image", formData.image);
    }

    // Тепер, в окремому циклі, перебираємо інші поля
    for (const key in formData) {
      // Ігноруємо допоміжні поля та файли
      if (key.startsWith("_") || key === "avatar" || key === "image") {
        continue;
      }

      // Перевіряємо, чи змінилося поле
      if (JSON.stringify(formData[key]) !== JSON.stringify(initialData[key])) {
        if (key === "committee") {
          const committeeArray = formData.committee
            ? formData.committee.split(",").map(el => el.trim())
            : [];
          committeeArray.forEach(member => {
            fd.append("committee", member);
          });
        } else {
          fd.append(key, formData[key]);
        }
      }
    }
    const parts = link.split("/"); // ['','ppo','volinska-ppo']

    // 2. Взяти останній елемент масиву за допомогою pop()
    const cleanedLink = parts.pop();
    console.log(parts, cleanedLink);
    fd.append("place", cleanedLink);

    // Якщо FormData порожній - нічого не робимо
    if ([...fd.entries()].length === 0) {
      alert("Немає змін для збереження.");
      return;
    }

    // Перевірка у консолі
    for (let [k, v] of fd.entries()) {
      if (v instanceof File) console.log(k, v.name, v.size);
      else console.log(k, v);
    }

    try {
      const response = await axios.put(`${BaseURL}ppo/${_id}`, fd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Відповідь від сервера:", response);

      // Дані успішно оновлено, вони знаходяться у response.data
      console.log("Дані успішно оновлено:", response.data);
      // Можна вивести а також оновити стан, якщо потрібно

      const result = response.data;

      console.log("Дані успішно оновлено:", result);
    } catch (error) {
      console.error(error);
      // axios помилки містять більше інформації
      if (error.response) {
        // Сервер відповів з кодом, що не є 2xx
        console.error("Дані помилки від сервера:", error.response.data);
        alert(`Помилка: ${error.response.data.message} || 'Невідома помилка'}`);
      } else if (error.request) {
        // Запит було зроблено, але відповіді не було
        console.error("Немає відповіді від сервера");
        alert("Немає відповіді від сервера. Перевірте з'єднання.");
      } else {
        // Щось пішло не так при налаштуванні запиту
        console.error("Помилка налаштування запиту", error.message);
        alert("Виникла помилка. Спробуйте ще раз.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full xl:w-9/12 py-5 flex flex-col gap-y-4 mx-auto">
      <div className="w-full h-200 mx-auto overflow-hidden relative">
        <div className="w-fit mx-auto bg-black">
          <Image
            src={getPreviewUrl(formData.image) || NoPhoto}
            width={750}
            height={200}
            className="mx-auto h-full object-cover opacity-50"
            alt={`фото співробітників ${office.region}`}
          />
        </div>
      </div>
      <div className="flex gap-x-4">
        {/* Аватар */}
        <div className="flex flex-col gap-y-1 relative w-1/5 ">
          <label className="text-main block font-medium">Фото Голови</label>
          <RegionalOfficeAvatarEditor
            initialAvatar={formData.director ? getPreviewUrl(formData.avatar) || NoPhoto : NoPhoto}
            onAvatarChange={handleAvatarChange}
            // onAvatarChange={file => {
            //   console.log("avatar", file);
            // }}
          />
        </div>
        <div className="flex flex-col gap-y-4 w-4/5">
          {/* Голова */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="director" className="text-main block font-medium">
              Голова
            </label>
            <input
              id="director"
              type="text"
              name="director"
              value={formData.director}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-none focus:rounded-lg"
            />
          </div>

          {/* Посада */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="position" className="text-main block font-medium">
              Посада
            </label>
            <input
              id="position"
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-transparent focus:rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Кількість членів */}
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="quantity" className="text-main block font-medium">
          Кількість членів
        </label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="email" className="text-main block font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Телефон */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="phone" className="text-main block font-medium">
          Телефон
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="+380675455023"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Адреса прийому */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="admission_address" className="text-main block font-medium">
          Адреса прийому
        </label>
        <textarea
          id="admission_address"
          type="text"
          name="admission_address"
          value={formData.admission_address}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Адреса для заяв */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="application_address" className="text-main block font-medium">
          Адреса для подачі заяв
        </label>
        <textarea
          id="application_address"
          type="text"
          name="application_address"
          value={formData.application_address}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Комітет */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="committee" className="text-main block font-medium">
          Члени комітету (через кому)
        </label>
        <textarea
          id="committee"
          type="text"
          name="committee"
          value={formData.committee}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Посилання на новини */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="link_news" className="text-main block font-medium">
          Посилання на новини
        </label>
        <input
          id="link_news"
          type="url"
          name="link_news"
          value={formData.link_news}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none  focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Кнопка зберегти */}
      <button
        type="submit"
        className="px-4 h-10 mt-8 border border-red rounded text-red text-xl font-semibold hover:bg-red hover:text-white"
      >
        Зберегти
      </button>
    </form>
  );
};

export default EditPpoForm;
