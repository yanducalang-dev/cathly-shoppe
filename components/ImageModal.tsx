"use client";

import Image from "next/image";

type ImageModalProps = {
  image: string;
  name: string;
  onClose: () => void;
};

export default function ImageModal({
  image,
  name,
  onClose,
}: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-2xl font-bold text-black shadow-lg hover:bg-gray-200"
        >
          ×
        </button>

        {/* Large Image */}
        <Image
          src={image}
          alt={name}
          width={900}
          height={1200}
          className="max-h-[90vh] w-auto rounded-xl object-contain"
        />
      </div>
    </div>
  );
}