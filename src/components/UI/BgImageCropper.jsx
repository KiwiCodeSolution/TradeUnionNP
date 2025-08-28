"use client";
import getCroppedImg from "@/utils/cropImage";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

export default function BgImageCropper({ imageSrc, onClose, onSave }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    onSave(croppedImage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-4 w-[90%] max-w-2xl">
        <div className="relative w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1.8}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <div className="w-full md:w-2/3">
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={e => setZoom(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              type="button"
            >
              Скасувати
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-red text-white rounded-lg hover:bg-red/80"
              type="button"
            >
              Зберегти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
