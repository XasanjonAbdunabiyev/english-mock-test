import { useLocalStorage } from "@/hooks/useLocalStorage"

export const Profile = () => {
    const { getItem } = useLocalStorage();
    
    const user = getItem("login_user");
    return <div>Profile</div>
}
