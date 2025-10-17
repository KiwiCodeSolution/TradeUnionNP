"use client";

import { BaseURLImage } from "@/constants/BaseUrl";
import { NEWS_SECTIONS } from "@/constants/news_sections";
import useAuth from "@/hooks/useAuth";
import { useStore } from "@/store/StoreProvider";
import { fixTinyMCEImages } from "@/utils/fixTinyMCEImages";
import { Editor } from "@tinymce/tinymce-react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const NewsForm = observer(({ news, part }) => {
  const apiKey = process.env.NEXT_PUBLIC_EDITOR_API_KEY;
  const { token } = useAuth();
  const { newsStore, photoReportsStore } = useStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: news?.title || "",
    sections: news?.sections || [],
    metaTags: news?.metaTags.join(", ") || [],
    status: news?.status || "published",
    author: news?.author ?? "Пресслужба",
    publishDate: news?.publishDate
      ? new Date(news.publishDate).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    content: news?.content || "",
  });

  useEffect(() => {
    if (news?.content) {
      setFormData(prev => ({
        ...prev,
        content: fixTinyMCEImages(news.content, BaseURLImage),
      }));
    }
  }, [news?.content]);

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

  function resetForm() {
    setFormData({
      title: "",
      sections: [],
      metaTags: "",
      status: "published",
      author: "",
      date: "",
      content: "",
    });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    // Валідація форми
    if (!formData.title) {
      toast.error("Поле 'Назва' є обов'язковим полем");
      return;
    }
    if (formData.sections.length === 0) {
      toast.error("Виберіть хоча б одну категорію");
      return;
    }
    if (!formData.content) {
      toast.error("Контент має бути заповненим");
      return;
    }

    const metaTagsArray = formData.metaTags.split(", ").map(tag => tag.trim());

    const itemData = {
      ...formData,
      metaTags: metaTagsArray,
    };

    const handleDataAction = async (part, data, slug) => {
      try {
        let response;
        if (!data) {
          response =
            part === "news"
              ? await newsStore.createNews(itemData, token, router)
              : await photoReportsStore.createReports(itemData, token, router);
          toast.success(part === "news" ? "Новину створено!" : "Запис створено!");
        } else if (news) {
          response =
            part === "news"
              ? await newsStore.updateNews(slug, itemData, token, router, news._id)
              : await photoReportsStore.updateReports(slug, itemData, token, router, news._id);

          toast.success(part === "news" ? "Новину оновлено!" : "Запис оновлено!");
        }

        if (response) {
          resetForm();
        }
      } catch (error) {
        // Виводимо конкретне повідомлення з помилки
        toast.error(
          error.message ||
            `Сталася помилка при ${data ? "оновленні" : "створенні"} ${
              part === "news" ? "новини" : "запису"
            }.`
        );
      }
    };

    // Вибір обробки для новин чи фото
    if (part === "news") {
      await handleDataAction("news", news, news?.slug);
    } else if (part === "photo") {
      await handleDataAction("photo", news, news?.slug);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5 pr-4">
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
          className="border border-gray-300 p-2 w-full outline-none focus:border-red focus:rounded-lg"
          // required
        />
      </div>

      {/* Розділи */}
      <div>
        <label className="block font-medium mb-2">Розділи</label>
        <div className="flex flex-wrap gap-4">
          {NEWS_SECTIONS.map(section => (
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
          Мета-теги (слова чи фрази через кому, щонайменше 2)
        </label>
        <textarea
          id="metaTags"
          name="metaTags"
          value={formData.metaTags}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full outline-none focus:border-red focus:rounded-lg"
          rows="3"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-8 items-center mb-2">
        {/* автор */}
        <div className="">
          <label htmlFor="author" className="text-main block font-medium">
            Автор
          </label>
          <input
            type="author"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="border h-10 border-gray-300 p-2 w-full outline-none focus:border-red focus:rounded-lg"
            // required
          />
        </div>
        {/* дата */}
        <div className="">
          <label htmlFor="publishDate" className="text-main block font-medium">
            Дата
          </label>
          <input
            type="date"
            id="publishDate"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
            className="border h-10 border-gray-300 p-2 w-full outline-none focus:border-none focus:outline-red focus:rounded-lg"
            // required
          />
        </div>
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
          className="border border-gray-300 p-2 w-full outline-none focus:border-red focus:rounded-lg"
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
          apiKey={apiKey}
          // value={formData.content}
          value={formData.content}
          id="news-editor"
          init={{
            height: 1000,
            menubar: true,
            language: "uk",
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
            // external_plugins: {
            //   preview: "/tinymce/plugins/preview/plugin.min.js",
            //   searchreplace: "/tinymce/plugins/searchreplace/plugin.min.js",
            //   directionality: "/tinymce/plugins/directionality/plugin.min.js",
            //   visualchars: "/tinymce/plugins/visualchars/plugin.min.js",
            //   visualblocks: "/tinymce/plugins/visualblocks/plugin.min.js",
            //   autolink: "/tinymce/plugins/autolink/plugin.min.js",
            //   fullscreen: "/tinymce/plugins/fullscreen/plugin.min.js",
            //   media: "/tinymce/plugins/media/plugin.min.js",
            //   codesample: "/tinymce/plugins/codesample/plugin.min.js",
            //   charmap: "/tinymce/plugins/charmap/plugin.min.js",
            //   pagebreak: "/tinymce/plugins/pagebreak/plugin.min.js",
            //   anchor: "/tinymce/plugins/anchor/plugin.min.js",
            //   nonbreaking: "/tinymce/plugins/nonbreaking/plugin.min.js",
            //   insertdatetime: "/tinymce/plugins/insertdatetime/plugin.min.js",
            //   advlist: "/tinymce/plugins/advlist/plugin.min.js",
            //   wordcount: "/tinymce/plugins/wordcount/plugin.min.js",
            //   help: "/tinymce/plugins/help/plugin.min.js",
            // },
            images_upload_handler: function (blobInfo, success, failure) {
              // Конвертація зображення у Base64
              const reader = new FileReader();
              reader.readAsDataURL(blobInfo.blob()); // Читання зображення у форматі Base64
              reader.onloadend = function () {
                success(reader.result); // Повертаємо результат у форматі Base64
              };
              reader.onerror = function () {
                failure("Failed to load image");
              };
            },
            automatic_uploads: false, // Вимикаємо автоматичне завантаження через сервер
            file_picker_types: "image", // Вибираємо тільки зображення
            images_reuse_filename: true,
          }}
          onEditorChange={handleEditorChange}
        />
      </div>

      {/* Кнопка для відправки */}
      <button type="submit" className="px-4 py-2 bg-red text-white rounded hover:shadow-redButton">
        {part === "news" && news && "Оновити новину"}
        {part === "news" && !news && "Створити новину"}
        {part === "photo" && news && "Оновити запис"}
        {part === "photo" && !news && "Створити запис"}
      </button>
    </form>
  );
});

export default NewsForm;
