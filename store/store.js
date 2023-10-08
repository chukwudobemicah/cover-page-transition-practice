// "use client";
import { create } from "zustand";

const useStore = create((set) => ({
  pageCover: false,
  setPageCover: () =>
    set((state) => ({
      pageCover: !state.pageCover,
    })),
  previewData: {},
  setPreviewData: (previewData) => set(() => ({ previewData })),
  // setPopUpModalTitle: (popUpModalTitle) => set(() => ({ popUpModalTitle })),
}));

export default useStore;
