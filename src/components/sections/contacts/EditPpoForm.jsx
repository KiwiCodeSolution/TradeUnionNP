"use client";

import { useEffect, useState } from "react";
import NoPhoto from "@/images/no-photo.png";
import RegionalOfficeAvatarEditor from "../regional_offices/RegionalOfficeAvatarEditor";
import Image from "next/image";
import { BaseURL, BaseURLImage } from "@/constants/BaseUrl";
import { extractFirstImage } from "@/utils/extractFirstImage";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import RegionalOfficeBGPhotoEditor from "./RegionalOfficeBGPhotoEditor";
import { Router } from "next/router";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const getPreviewUrl = fileOrUrl => {
  if (!fileOrUrl) return NoPhoto;
  if (fileOrUrl instanceof File) return URL.createObjectURL(fileOrUrl); // новий файл
  if (typeof fileOrUrl === "string") {
    if (fileOrUrl.startsWith("blob:")) return fileOrUrl; // локальне прев'ю

    const url = `${BaseURLImage}${fileOrUrl}`;

    return `${url}`;
  }
  return NoPhoto;
};

const EditPpoForm = () => {
  const { _id } = useParams(); // Отримуємо ID з URL
  const { token } = useAuth();
  const router = useRouter();

  const [initialData, setInitialData] = useState(null);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!_id || !token) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${BaseURL}ppo/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const office = response.data;
        setInitialData(office);
        setFormData({
          director: office.director || "",
          position: office.position || "",
          avatar: office.avatar || "",
          _avatarFile: null,
          image: office.image || "",
          _imageFile: null,
          quantity: office.quantity || "",
          email: office.email || "",
          phone: office.phone || "",
          admission_address: office.admission_address || "",
          application_address: office.application_address || "",
          committee: office.committee?.join(", ") || "",
          link_news: office.link_news || "",
          link: office.link || "",
          is_active: office.is_active ?? true,
        });
      } catch (error) {
        console.error("Помилка завантаження даних:", error);
        toast.error("Не вдалося завантажити дані.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [_id, token]); // Виконуємо ефект, коли ID або токен змінюються

  // Обробляємо стан завантаження
  if (loading) {
    return (
      <div className="fixed w-full h-screen top-0 left-0 bg-slate-400 bg-opacity-60 flex items-center justify-center">
        <Image
          src="/images/logo-sm.svg"
          width={164}
          height={165}
          alt="Логотип компанії"
          className="animate-bounce"
        />
      </div>
    );
  }

  if (!formData) {
    return <div>Дані не знайдено.</div>;
  }

  const handleAvatarChange = file => {
    setFormData(prev => ({
      ...prev,
      avatar: file, // для preview
      _avatarFile: file, // для сабміту
    }));
  };

  const handleImageChange = file => {
    setFormData(prev => ({
      ...prev,
      image: file, // для preview
      _imageFile: file, // для сабміту
    }));
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    // Оновлена логіка для обробки радіокнопок
    setFormData(prev => ({
      ...prev,
      [name]: type === "radio" ? value === "true" : value, // Змінено тут
    }));
  };

  const validateForm = () => {
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Некоректний email");
      return false;
    }
    if (formData.phone && !/^\+380\d{9}$/.test(formData.phone)) {
      toast.error("Телефон має бути у форматі +380XXXXXXXXX");
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return; // Обрізаємо пробіли для всіх текстових полів

    const trimmedData = Object.keys(formData).reduce((acc, key) => {
      if (typeof formData[key] === "string") {
        acc[key] = formData[key].trim();
      } else {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    const fd = new FormData(); // Додаємо файли окремо від циклу

    if (trimmedData._avatarFile instanceof File) {
      fd.append("avatar", trimmedData._avatarFile);
    }

    if (trimmedData._imageFile instanceof File) {
      fd.append("image", trimmedData._imageFile);
    } // Перебираємо оновлені поля

    if (trimmedData.is_active !== initialData.is_active) {
      fd.append("is_active", trimmedData.is_active);
    }

    for (const key in trimmedData) {
      if (key.startsWith("_") || key === "avatar" || key === "image" || key === "is_active") {
        continue;
      }

      if (JSON.stringify(trimmedData[key]) !== JSON.stringify(initialData[key])) {
        if (key === "committee") {
          const committeeArray = trimmedData.committee
            ? trimmedData.committee.split(",").map(el => el.trim())
            : [];
          committeeArray.forEach(member => {
            fd.append("committee", member);
          });
        } else {
          fd.append(key, trimmedData[key]);
        }
      }
    }
    const parts = initialData.link.split("/"); // ['','ppo','volinska-ppo']

    const cleanedLink = parts.pop(); // Якщо FormData порожній - нічого не робимо

    if ([...fd.entries()].length === 0) {
      toast.error("Немає змін для збереження.");
      return;
    }

    try {
      const response = await axios.put(`${BaseURL}ppo/${_id}/${cleanedLink}`, fd, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const result = response.data;
      console.log("Успіх:", result);

      if (result) {
        toast.success("Запис оновлено!");
        router.replace(`/uk/admin/ppo`);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error("Дані помилки від сервера:", error.response.data);
        toast.error(`Помилка: ${error.response.data.message || "Невідома помилка"}`);
      } else if (error.request) {
        console.error("Немає відповіді від сервера");
        toast.error("Немає відповіді від сервера. Перевірте з'єднання.");
      } else {
        console.error("Помилка налаштування запиту", error.message);
        toast.error("Виникла помилка. Спробуйте ще раз.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full xl:w-9/12 py-5 flex flex-col gap-y-4 mx-auto">
      <RegionalOfficeBGPhotoEditor
        initialImage={getPreviewUrl(formData.image) || NoPhoto}
        onImageChange={handleImageChange}
      />

      <div className="flex gap-x-4">
        {/* Аватар */}
        <div className="flex flex-col gap-y-1 relative w-1/5 ">
          <label className="text-main block font-medium">Фото Голови</label>
          <RegionalOfficeAvatarEditor
            initialAvatar={formData.director ? getPreviewUrl(formData.avatar) || NoPhoto : NoPhoto}
            onAvatarChange={handleAvatarChange}
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
      {/* Приховати запис */}
      <div className="flex flex-col gap-y-1">
        <label className="text-main block font-medium">Приховати запис?</label>
        <div className="flex items-center gap-x-4">
          <label className="flex items-center gap-x-2">
            <input
              type="radio"
              name="is_active"
              value="false"
              checked={!formData.is_active}
              onChange={handleChange}
              className="w-4 h-4 text-red border-gray-300 focus:ring-red"
            />
            Так
          </label>
          <label className="flex items-center gap-x-2">
            <input
              type="radio"
              name="is_active"
              value="true"
              checked={formData.is_active}
              onChange={handleChange}
              className="w-4 h-4 text-red border-gray-300 focus:ring-red"
            />
            Ні
          </label>
        </div>
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
