import { create } from "zustand"

export const useSpeakingTable = create((set) => ({
    timeAnswersStart: false,
    startTimeAnswers: () => set(() => ({ timeAnswersStart: true })),
    timeThinkStart: false,
    startTimeThink: () => set(() => ({ timeThinkStart: true })),
    endTimeThink: () => set(() => ({ timeThinkStart: false })),
}))
