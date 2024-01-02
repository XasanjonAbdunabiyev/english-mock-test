import { useLocalStorage } from "@/hooks/useLocalStorage"

export const useAuth = function () {
    const { getItem } = useLocalStorage()
    return {
        user: getItem("login_user"),
    }
}
