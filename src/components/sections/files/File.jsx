import { useEffect, useState } from "react";

const FileExample = ({ file }) => {
  const [newFile, setNewFile] = useState(null);
  const [fileLink, setFileLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFileLink(`${window.location.origin}${file.link}`);
    }
  }, [file.link]);
  // const fileLink = `${window.location.origin}${file.link}`;

  // Обробник зміни файлу
  const handleFileChange = e => {
    const selectedFile = e.target.files[0]; // Вибраний файл
    console.log("Selected file:", selectedFile); // Додаємо лог для перевірки
    setNewFile(selectedFile);
  };

  // Обробник завантаження нового файлу
  const handleReplaceClick = () => {
    if (newFile) {
      console.log("Replacing with:", newFile); // Додаємо лог для перевірки
      // onReplace(file.id, newFile);
      setNewFile(null); // Очистити після заміни
    }
  };

  // Обробник видалення
  const handleDeleteClick = () => {
    console.log("Deleting file with id:", file.id);
    // onDelete(file.id);
  };

  return (
    <li className="flex items-center gap-4 p-2 border-b">
      <p className="w-1/3">{file.name}</p>
      <a
        href={fileLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red hover:underline hover:underline-offset-1"
      >
        Переглянути файл
      </a>

      <input
        type="file"
        onChange={handleFileChange}
        className="w-1/4"
        accept=".pdf,.png,.jpg,.jpeg" // Формати файлів
      />
      <button
        onClick={handleReplaceClick}
        disabled={!newFile}
        className={`px-4 py-2 rounded border 
          ${
            !newFile
              ? "bg-gray-400 text-gray-700 border-gray-400 cursor-not-allowed"
              : "bg-white text-red border-red hover:shadow-redButton"
          }`}
      >
        Зберегти зміни
      </button>

      <button
        onClick={handleDeleteClick}
        className="px-4 py-2 bg-red text-white rounded hover:shadow-standardShadow"
      >
        Видалити
      </button>
    </li>
  );
};

export default FileExample;
