import { create } from "zustand"

export const useGetAddSpeakingData = create((set) => ({
    questions_data: {
        question_title: "",
        timeAnswer: 0,
        timeThink: 0,
    },
    
    addSpeakingData: (data) => set(() => ({ questions_data: data })),
    questionAudioUrl: "",
    setQuestionAudioUrl: (url) => set(() => ({ questionAudioUrl: url })),
}))
