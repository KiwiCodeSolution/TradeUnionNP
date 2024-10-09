"use client";

import { useState, useEffect } from "react";

const AdminContactsForm = () => {
  const [contacts, setContacts] = useState({
    email: "",
    messenger: "",
    instagram: "",
    youtube: "",
    telegram: "",
    facebook: "",
    viber: "",
  });

  const [editMode, setEditMode] = useState(false); // Стейт для контролю режиму редагування

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/contacts"); // Заміни на свій API
      const data = await response.json();
      setContacts(data);
    };

    fetchData();
  }, []);

  const handleChange = e => {
    const { id, value } = e.target;
    setContacts(prevContacts => ({
      ...prevContacts,
      [id]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/update-contacts", {
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

  return (
    <section className="w-full py-10">
      <form className="w-full flex flex-col gap-y-10" onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-2 gap-x-5 gap-y-10">
          {Object.keys(contacts).map(key => (
            <div key={key} className="flex flex-col gap-y-2">
              <p className="text-xl text-red font-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
              {editMode ? (
                <input
                  type="text"
                  className="w-11/12 outline-none px-4 py-2 border-b border-red focus:border-none focus:outline-red focus:rounded-lg"
                  id={key}
                  value={contacts[key]}
                  onChange={handleChange}
                />
              ) : (
                <span className="text-gray-700">{contacts[key] || "Немає інформації"}</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-10">
          <button
            type="button"
            onClick={() => setEditMode(!editMode)} // Перемикання режиму редагування
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
    </section>
  );
};

export default AdminContactsForm;
