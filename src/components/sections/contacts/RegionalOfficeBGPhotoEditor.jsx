"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import NoPhoto from "@/images/no-photo.png";

import { Edit, EditPhoto } from "@/components/icons/IconsComponents";
import BgImageCropper from "@/components/UI/BgImageCropper";

export default function RegionalOfficeBGPhotoEditor({ initialImage, onImageChange }) {
  const [imagePreview, setImagePreview] = useState(() => {
    return initialImage ? initialImage : NoPhoto;
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setImagePreview(initialImage || NoPhoto);
  }, [initialImage]);

  const handleFileChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSaveCropped = croppedBlob => {
    const file = new File([croppedBlob], "image.png", { type: croppedBlob.type });

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    onImageChange(file); // тепер передаємо File, а не Blob
    setSelectedImage(null);
  };

  return (
    <div className="w-fit h-200 mx-auto overflow-hidden relative">
      <div className="relative w-fit mx-auto bg-black z-[1] group">
        <Image
          src={imagePreview}
          alt="Фото учасників ППО"
          width={560}
          height={320}
          className="mx-auto h-full max-h-[320px] object-cover opacity-50"
        />
        <button
          className="absolute w-full h-full bg-white/50 flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
          onClick={() => setSelectedImage(imagePreview)}
          type="button"
        >
          <Edit className="fill-red w-6 h-6 " />
        </button>
      </div>

      <label className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center group bg-white hover:bg-red absolute bottom-0.5 right-0 border border-red z-[2]">
        <EditPhoto
          className={
            "fill-red group-hover:fill-white w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          }
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={e => {
            e.stopPropagation(); // Зупиняє поширення події
            e.preventDefault(); // Запобігає стандартній поведінці
            handleFileChange(e); // Викликає ваш обробник
          }}
        />
      </label>

      {selectedImage && (
        <BgImageCropper
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSave={handleSaveCropped}
        />
      )}
    </div>
  );
}
