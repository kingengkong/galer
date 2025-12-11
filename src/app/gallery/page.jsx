"use client";

import { usePhotoStore } from "../../store/photoStore";
import { useState } from "react";

export default function GalleryPage() {
  const { photos } = usePhotoStore();
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <p className="text-3xl font-bold mb-6 text-center">Preserve the Moment. Share the Vision. Inspire the World.</p>

      {/* GRID STYLE PINTEREST */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((p) => (
          <img
            key={p.id}
            src={p.image}       // Pastikan fieldnya bernama "image"
            alt={p.title}
            className="w-full rounded-lg cursor-pointer hover:opacity-80"
            onClick={() => setSelected(p)}
          />
        ))}
      </div>

      {/* LIGHTBOX / FOCUS VIEW */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full p-6 flex gap-6">

            {/* GAMBAR BESAR */}
            <img
              src={selected.image}
              className="w-1/2 object-contain rounded-lg"
            />

            {/* DESKRIPSI */}
            <div className="w-1/2 space-y-3">
              <h2 className="text-2xl font-bold">{selected.title}</h2>
              <p className="text-gray-700">{selected.desc || "Tidak ada deskripsi."}</p>

              <button
                onClick={() => setSelected(null)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
