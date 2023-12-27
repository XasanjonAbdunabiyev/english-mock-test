import { create } from "zustand"

export const usePaymentModal = create((set) => ({
    isPaymentOpen: false,
    onPaymentClose: () => set(() => ({ isPaymentOpen: false })),
    openPaymentModal: () => set(() => ({ isPaymentOpen: true })),
}))
