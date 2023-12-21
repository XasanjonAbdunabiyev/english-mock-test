import { toast } from "react-toastify"

import { ToastContainer as Notify } from "react-toastify"
export function ToastNotify(messageType, messageInside) {
    if ((message = "error")) {
        toast.success(`${messageInside}`)
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
