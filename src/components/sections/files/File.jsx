import { BaseURL } from "@/constants/BaseUrl";
import { uploadFile } from "@/services/filesService";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const FileExample = ({ file, token }) => {
  const [newFile, setNewFile] = useState(null);

  const fileLink = `${BaseURL}${file.link}`;

  const fileInputRef = useRef(null);

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    setNewFile(selectedFile);
  };

  const handleReplaceClick = async () => {
    if (!newFile) return;

    toast.promise(
      (async () => {
        const fileExtension = newFile.name.split(".").pop();
        const renamedFile = new File([newFile], `${file.fileName}.${fileExtension}`, {
          type: newFile.type,
        });

        const data = await uploadFile(renamedFile, token);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        setNewFile(null);
      })(),
      {
        loading: "Оновлення файлу...",
        success: <b>Файл успішно оновлено!</b>,
        error: <b>Не вдалося оновити файл.</b>,
      }
    );
  };

  const handleDeleteClick = () => {
    console.log("Deleting file with id:", file.id);
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
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="w-1/4"
        accept=".pdf,.png,.jpg,.jpeg"
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

      {/* <button
        onClick={handleDeleteClick}
        className="px-4 py-2 bg-red text-white rounded hover:shadow-standardShadow"
      >
        Видалити
      </button> */}
    </li>
  );
};

export default FileExample;
