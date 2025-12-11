"use client";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function GalleryGrid({ photos }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-md border border-white/30 cursor-pointer"
            onClick={() => setSelected(photo)}
          >
            <img src={photo.url} className="w-full object-cover" />
          </motion.div>
        ))}
      </div>

      {selected && (
        <ImageModal photo={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
