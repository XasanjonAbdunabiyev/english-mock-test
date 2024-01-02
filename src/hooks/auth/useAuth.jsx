import { useLocalStorage } from "@/hooks/useLocalStorage"

export const useAuth = function () {
    const { getItem } = useLocalStorage()
    let user = getItem("login_user");
    
    return user
}
