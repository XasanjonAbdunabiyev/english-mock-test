import { create } from "zustand";

export const useGetAudioUrl = create(
    (set) => ({
        audioUrl: '',
        changeAudioUrl: (url) => set(() => ({ audioUrl: url }))
    })
)