"use client";
import Image from "next/image";
import { useState } from "react";

import NoPhoto from "@/images/no-photo.png";
import AvatarCropper from "@/components/UI/AvatarCropper";
import { Edit, EditPhoto } from "@/components/icons/IconsComponents";

export default function RegionalOfficeAvatarEditor({ initialAvatar, onAvatarChange }) {
  const [avatarPreview, setAvatarPreview] = useState(initialAvatar || null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSaveCropped = croppedBlob => {
    const previewUrl = URL.createObjectURL(croppedBlob);
    setAvatarPreview(previewUrl);
    onAvatarChange(croppedBlob);
  };

  return (
    <div className="w-24 h-24 flex flex-col items-center gap-3 relative mx-auto">
      <div className="relative w-24 h-24 rounded-full overflow-hidden z-[1] group">
        <Image
          src={avatarPreview || NoPhoto}
          alt="Фото корівника ППО (аватар)"
          fill
          className="object-cover"
        />
        <button
          className="absolute w-full h-full bg-white/50 flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
          onClick={() => setSelectedImage(avatarPreview)}
        >
          <Edit className="fill-red w-6 h-6 " />
        </button>
      </div>

      <label className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center group bg-white hover:bg-red absolute bottom-0.5 right-0.5 border border-red z-[2]">
        <EditPhoto
          className={
            "fill-red group-hover:fill-white w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          }
        />
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </label>

      {selectedImage && (
        <AvatarCropper
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSave={handleSaveCropped}
        />
      )}
    </div>
  );
}
