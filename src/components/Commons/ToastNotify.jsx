import { toast } from "react-toastify"

import { ToastContainer as Notify } from "react-toastify"
export function toastNotify(notifyType = "error" | "succses", message) {
    if ((notifyType = "error")) {
        return toast.error(`${message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    } else if (notifyType === "success") {
        return toast.success(`${message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
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
