export const useLocalStorage = (key) => {
    // Set Item Function
    const setItem = (value) => {
        try {
            window.localStorage.setItem(key, value)
        } catch (error) {
            console.error(error)
        }
    }

    // Get Item Function
    const getItem = () => {
        try {
            let item = window.localStorage.getItem(key)
            if (item) {
                return JSON.parse(item)
            }
        } catch (error) {
            console.error(error)
        }
    }

    // Remove Item Function

    const removeItem = () => {
        try {
            window.localStorage.removeItem(key)
        } catch (error) {
            console.error(error)
        }
    }
    
    
    return {
        setItem,
        getItem,
        removeItem
    }
}
