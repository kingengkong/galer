"use client";

import { useState } from "react";
import { usePhotoStore } from "../../store/photoStore";

export default function AddPhoto() {
  const { addPhoto } = usePhotoStore();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!image) return alert("Pilih gambar dulu!");

    const newPhoto = {
      id: Date.now(),
      title,
      desc,
      image: preview, // pakai blob preview
    };

    addPhoto(newPhoto);
    alert("Foto berhasil ditambahkan!");
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Tambah Foto</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Judul foto"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Deskripsi foto"
          className="w-full p-2 border rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input type="file" accept="image/*" onChange={handleImage} />

        {preview && (
          <img
            src={preview}
            className="w-full h-60 object-cover rounded"
          />
        )}

        <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full">
          Simpan Foto
        </button>
      </form>
    </div>
  );
}
