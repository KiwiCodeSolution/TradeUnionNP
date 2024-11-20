"use client";

import { updateContacts } from "@/services/contactsService";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

const AdminContactsForm = ({ initialContacts }) => {
  const [contacts, setContacts] = useState(initialContacts);
  const [editMode, setEditMode] = useState(false);
  const { token } = useAuth();

  const handleChange = e => {
    const { id, value } = e.target;
    setContacts(prevContacts => ({
      ...prevContacts,
      [id]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await updateContacts(contacts, token);

      if (res && res.data) {
        const { _id, __v, ...updatedData } = res.data;

        setContacts(updatedData);
        setEditMode(false);
        toast.success("Контакти успішно оновлено!");
      } else {
        throw new Error("Помилка при збереженні змін");
      }
    } catch (error) {
      console.error("Помилка:", error);

      if (Array.isArray(error.message)) {
        error.message.forEach(msg => toast.error("У полі 'Пошта' має бути валідна адреса"));
      } else {
        toast.error("Не вдалося оновити контакти. Спробуйте знову.");
      }
    }
  };

  const renderField = (label, id, value, isEmail = false) => {
    if (editMode) {
      return (
        <input
          type="text"
          className="w-11/12 outline-none px-4 py-2 border-b border-red focus:border-none focus:outline-red focus:rounded-lg"
          id={id}
          value={value}
          onChange={handleChange}
        />
      );
    }

    if (!value) {
      return <p className="text-gray-500">Немає інформації</p>;
    }

    if (isEmail) {
      return (
        <a href={`mailto:${value}`} className="text-blue-500 underline">
          {value}
        </a>
      );
    }

    return (
      <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        {value}
      </a>
    );
  };

  const handleCancel = () => {
    setContacts(initialContacts);
    setEditMode(false);
  };

  return (
    <form className="w-full flex flex-col gap-y-10" onSubmit={handleSubmit}>
      <div className="w-full grid grid-cols-2 gap-x-5 gap-y-10">
        <div className="flex flex-col gap-y-2">
          <p className="text-xl text-main font-semibold">Пошта</p>
          {renderField("Пошта", "mail", contacts.mail, true)}
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl text-main font-semibold">Messenger</p>
          {renderField("Messenger", "messenger", contacts.messenger)}
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl text-main font-semibold">Instagram</p>
          {renderField("Instagram", "instagram", contacts.instagram)}
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl text-main font-semibold">Youtube</p>
          {renderField("Youtube", "youtube", contacts.youtube)}
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl text-main font-semibold">Telegram</p>
          {renderField("Telegram", "telegram", contacts.telegram)}
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl text-main font-semibold">Facebook</p>
          {renderField("Facebook", "facebook", contacts.facebook)}
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl text-main font-semibold">Viber</p>
          {renderField("Viber", "viber", contacts.viber)}
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={() => {
            if (editMode) {
              handleCancel(); // Скасування редагування
            } else {
              setEditMode(true); // Вмикаємо режим редагування
            }
          }}
          className="px-4 h-10 border border-red rounded text-red text-xl font-semibold hover:bg-red hover:text-white"
        >
          {editMode ? "Скасувати редагування" : "Редагувати"}
        </button>
        {editMode && (
          <button
            type="submit"
            className="px-4 h-10 border border-red rounded text-red text-xl font-semibold hover:bg-red hover:text-white"
          >
            Зберегти зміни
          </button>
        )}
      </div>
    </form>
  );
};

export default AdminContactsForm;
