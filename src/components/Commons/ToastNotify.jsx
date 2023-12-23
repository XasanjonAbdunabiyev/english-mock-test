import { toast } from "react-toastify"

import { ToastContainer as Notify } from "react-toastify"

const defaultToastStyle = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export function toastNotify(toastType) {
    const { title, message } = toastType
    switch (title) {
        case "success":
            return toast.success(`${message}`, defaultToastStyle)
        case "warning":
            return toast.warn(`${message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        case "error":
            return toast.error(`${message}`, defaultToastStyle)
        default:
            toast(`${message}`, defaultToastStyle)
            break
    }
}
export const ToastContainer = ({ ...props }) => {
    return (
        <Notify
            {...props}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
}
