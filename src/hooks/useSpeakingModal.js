import { create } from "zustand"

export const useSpeakingModal = create((set) => ({
    isOpen: false,
    onClose: () => set(() => ({ isOpen: false })),
    onOpen: () => set(() => ({ isOpen: true })),
}))
