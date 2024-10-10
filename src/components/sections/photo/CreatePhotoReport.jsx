"use client";

import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const CreatePhotoReport = () => {
  const [formData, setFormData] = useState({
    title: "",
    sections: [],
    metaTags: "",
    status: "created",
    content: "",
  });

  // Обробник зміни текстових полів
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Обробник чекбоксів
  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setFormData(prevData => {
      let newSections = [...prevData.sections];
      if (checked) {
        newSections.push(name);
      } else {
        newSections = newSections.filter(section => section !== name);
      }
      return {
        ...prevData,
        sections: newSections,
      };
    });
  };

  // Обробник для редактора TinyMCE
  const handleEditorChange = content => {
    setFormData({
      ...formData,
      content,
    });
  };

  // Відправка форми
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
      {/* Назва новини */}
      <div>
        <label htmlFor="title" className="text-main block font-medium mb-2">
          Назва
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full focus:border-none focus:outline-red focus:rounded-lg"
          required
        />
      </div>

      {/* Розділи */}
      <div>
        <label className="block font-medium mb-2">Розділи</label>
        <div className="flex flex-wrap gap-4">
          {["Новина", "Звіт", "Інтерв'ю", "Культура", "Наука"].map(section => (
            <div key={section} className="custom-checkbox-container">
              <input
                type="checkbox"
                name={section}
                checked={formData.sections.includes(section)}
                onChange={handleCheckboxChange}
                className="custom-checkbox"
                id={section}
              />
              <label htmlFor={section} className="custom-checkbox-label">
                {section}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Метатеги */}
      <div>
        <label htmlFor="metaTags" className="block font-medium mb-2">
          Мета-теги (слова чи фрази через кому)
        </label>
        <textarea
          id="metaTags"
          name="metaTags"
          value={formData.metaTags}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full focus:border-none focus:outline-red focus:rounded-lg"
          rows="3"
        />
      </div>

      {/* Статус */}
      <div>
        <label htmlFor="status" className="block font-medium mb-2">
          Статус
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full focus:border-none focus:outline-red focus:rounded-lg"
        >
          <option value="published">Опубліковано</option>
          <option value="archived">Архів</option>
          <option value="created">Створено</option>
        </select>
      </div>

      {/* Editor */}
      <div>
        <label htmlFor="content" className="block font-medium mb-2">
          Контент
        </label>
        <Editor
          apiKey="b76g9vsla6spw8xc9itg2m7ap8z9vey1xpn2jrcsq06jcv23"
          initialValue=""
          id="news-editor"
          init={{
            height: 900,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "emoticons textpattern template imagetools quickbars codesample",
              "fontsize",
              "fullscreen",
              "emoticons",
              "advlist",
              "autolink",
              "link",
              "image",
              "lists",
              "charmap",
              "preview",
              "anchor",
              "pagebreak",
              "searchreplace",
              "wordcount",
              "visualblocks",
              "visualchars",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "emoticons",
              "help",
            ],
            toolbar:
              "undo redo | styles | fontsize | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image | emoticons | help | fullscreen |",
            fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
            style_formats: [
              { title: "Заголовок 1", format: "h1" },
              { title: "Заголовок 2", format: "h2" },
              { title: "Заголовок 3", format: "h3" },
              { title: "Заголовок 4", format: "h4" },
              { title: "Заголовок 5", format: "h5" },
              { title: "Заголовок 6", format: "h6" },
              { title: "Параграф", format: "p" },
            ],
          }}
          onEditorChange={handleEditorChange}
        />
      </div>

      {/* Кнопка для відправки */}
      <button type="submit" className="px-4 py-2 bg-red text-white rounded hover:shadow-redButton">
        Створити фотозвіт
      </button>
    </form>
  );
};

export default CreatePhotoReport;
