"use client";

import { EditPhoto } from "@/components/icons/IconsComponents";
import NoPhoto from "@/images/no-photo.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FormImageUploader({ initialImage, onFileChange }) {
  const [preview, setPreview] = useState(typeof initialImage === "string" ? initialImage : null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (!initialImage) {
      setPreview(null);
    } else if (typeof initialImage === "string") {
      setPreview(initialImage);
    }
  }, [initialImage]);

  const handleFileChange = e => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    const blobUrl = URL.createObjectURL(file); // завжди рядок
    setPreview(blobUrl);
    onFileChange(file);
  };

  return (
    <div className="flex flex-col items-center gap-2 relative w-[204px] h-[148px]">
      <div className="relative w-[204px] h-[148px] rounded-t-[32px] overflow-hidden border border-gray-300">
        <Image src={preview || NoPhoto} alt="Прев'ю зображення" fill className="object-cover" />
        <label className="absolute bottom-1 right-1 bg-white border border-red rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-red group">
          <EditPhoto className="fill-red w-5 h-5 group-hover:fill-white" />
          <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
    </div>
  );
}
