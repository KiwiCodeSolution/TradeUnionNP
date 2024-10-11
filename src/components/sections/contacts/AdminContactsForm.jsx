"use client";

import { useState } from "react";

const AdminContactsForm = ({ initialContacts }) => {
  const [contacts, setContacts] = useState(initialContacts);

  const [editMode, setEditMode] = useState(false); // Стейт для режиму редагування

  // Обробка зміни значення в інпуті
  const handleChange = e => {
    const { id, value } = e.target;
    setContacts(prevContacts => ({
      ...prevContacts,
      [id]: value,
    }));
  };

  // Обробка надсилання форми
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contacts),
    });

    if (response.ok) {
      const updatedData = await response.json();
      setContacts(updatedData);
      setEditMode(false); // Вимкнути режим редагування після збереження
    } else {
      console.error("Помилка при збереженні змін");
    }
  };

  const handleCancel = () => {
    setContacts(initialContacts); // Повертаємо значення до початкових
    setEditMode(false); // Вимикаємо режим редагування
  };

  // Визначаємо, чи відображати посилання чи інпут
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
      // Якщо значення порожнє, показуємо текст "Немає інформації"
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
          className="px-4 h-10 border border-red rounded-2xl text-red text-xl font-semibold hover:bg-red hover:text-white"
        >
          {editMode ? "Скасувати редагування" : "Редагувати"}
        </button>
        {editMode && (
          <button
            type="submit"
            className="px-4 h-10 border border-red rounded-2xl text-red text-xl font-semibold hover:bg-red hover:text-white"
          >
            Зберегти зміни
          </button>
        )}
      </div>
    </form>
  );
};

export default AdminContactsForm;
