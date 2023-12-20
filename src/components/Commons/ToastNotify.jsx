import { toast } from "react-toastify"

export function ToastNotify(messageType, messageInside) {
    if ((message = "error")) {
        toast.success(`${messageInside}`)
    }
}
