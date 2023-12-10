import { create } from 'zustand'

export const useModal = create((set) => ({
    isOpen: true,
    onClose: () => set(() => ({ isOpen: false })),
    onOpen: () => set(() => ({ isOpen: false })),
}))
