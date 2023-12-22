import { create } from "zustand"

export const useGetAudioUrl = create((set) => ({
    questionAudioUrl: "",
    setQuestionAudioUrl: (url) => set(() => ({ questionAudioUrl: url })),
}))
