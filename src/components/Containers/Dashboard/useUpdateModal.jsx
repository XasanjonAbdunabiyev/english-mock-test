import { create } from "zustand";

export const useUpdateModal = create(
    (set) => ({
        isUpdateOpen: false,
        onUpdateClose: () => set(() => ({ isUpdateOpen: false })),
        openUpdateModal: () => set(() => ({ isUpdateOpen: true })),
    })
)