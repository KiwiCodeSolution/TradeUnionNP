"use client";

import { BaseURL, BaseURLImage } from "@/constants/BaseUrl";
import useAuth from "@/hooks/useAuth";
import NoPhoto from "@/images/no-photo.png";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FormImageUploader from "./FormImageUploader";

const getPreviewUrl = fileOrUrl => {
  if (!fileOrUrl) return NoPhoto;
  if (fileOrUrl instanceof File) return URL.createObjectURL(fileOrUrl);
  if (typeof fileOrUrl === "string") {
    if (fileOrUrl.startsWith("blob:")) return fileOrUrl;
    return `${BaseURLImage}${fileOrUrl}`;
  }
  return NoPhoto;
};

const ProjectForm = () => {
  const { _id } = useParams();
  const { token } = useAuth();
  const router = useRouter();

  const [initialData, setInitialData] = useState(null);
  const [formData, setFormData] = useState({
    titleUk: "",
    titleEn: "",
    descriptionUk: "",
    descriptionEn: "",
    image: null,
    _imageFile: null,
    link: "",
    is_active: true,
  });
  const [loading, setLoading] = useState(!!_id);

  useEffect(() => {
    if (!_id || !token) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseURL}defenders/${_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const project = response.data;

        setInitialData(project);

        setFormData({
          titleUk: project.titleUk || "",
          titleEn: project.titleEn || "",
          descriptionUk: project.descriptionUk || "",
          descriptionEn: project.descriptionEn || "",
          image: project.image ? `${BaseURLImage}${project.image}` : null,
          _imageFile: null,
          link: project.link || "",
          is_active: project.is_active ?? true,
        });
      } catch (error) {
        console.error(error);
        toast.error("Не вдалося завантажити дані.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [_id, token]);

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

  const handleChange = e => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "radio" ? value === "true" : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const fd = new FormData();

    // файл
    if (formData._imageFile instanceof File) {
      fd.append("image", formData._imageFile);
    }

    // текстові поля
    fd.append("titleUk", formData.titleUk.trim());
    fd.append("titleEn", formData.titleEn.trim());
    fd.append("descriptionUk", formData.descriptionUk.trim());
    fd.append("descriptionEn", formData.descriptionEn.trim());
    fd.append("link", formData.link.trim());

    // boolean → рядок
    fd.append("is_active", formData.is_active ? "true" : "false");

    try {
      const url = _id ? `${BaseURL}defenders/${_id}` : `${BaseURL}defenders`;
      const method = _id ? "patch" : "post";

      await axios({
        method,
        url,
        data: fd,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(_id ? "Запис оновлено!" : "Запис створено!");
      router.replace(`/uk/admin/defenders`);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Виникла помилка. Спробуйте ще раз.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full xl:w-9/12 py-5 flex flex-col gap-y-4 mx-auto">
      {/* Аватар */}
      <FormImageUploader
        initialImage={formData.image}
        onFileChange={file => setFormData(prev => ({ ...prev, image: file, _imageFile: file }))}
      />

      {/* Заголовок українською */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="titleUk" className="text-main block font-medium">
          Заголовок українською
        </label>
        <input
          id="titleUk"
          name="titleUk"
          type="text"
          value={formData.titleUk}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Заголовок англійською */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="titleEn" className="text-main block font-medium">
          Заголовок англійською
        </label>
        <input
          id="titleEn"
          name="titleEn"
          type="text"
          value={formData.titleEn}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Опис українською */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="descriptionUk" className="text-main block font-medium">
          Опис українською
        </label>
        <input
          id="descriptionUk"
          name="descriptionUk"
          type="text"
          value={formData.descriptionUk}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Опис англійською */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="descriptionEn" className="text-main block font-medium">
          Опис англійською
        </label>
        <input
          id="descriptionEn"
          name="descriptionEn"
          type="text"
          value={formData.descriptionEn}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none focus:outline-red focus:border-none focus:rounded-lg"
        />
      </div>

      {/* Посилання */}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="link" className="text-main block font-medium">
          Посилання на збір
        </label>
        <input
          id="link"
          name="link"
          type="url"
          value={formData.link}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b border-b-gray-300 outline-none focus:outline-red focus:border-none focus:rounded-lg"
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

export default ProjectForm;
