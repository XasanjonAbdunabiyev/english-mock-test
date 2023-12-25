import { createContext, useState } from "react"

export const PaymentContext = createContext()

export function PaymentContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => setIsOpen(false)
    const onOpen = () => setIsOpen(true)

    return (
        <PaymentContext.Provider
            value={{
                isOpen,
                onClose,
                onOpen,
            }}
        >
            {children}
        </PaymentContext.Provider>
    )
}
