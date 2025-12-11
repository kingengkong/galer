import { create } from "zustand";

export const usePhotoStore = create((set) => ({
  photos: [],

  addPhoto: (photo) =>
    set((state) => ({
      photos: [photo, ...state.photos],
    })),
}));
