export const useLocalStorage = () => {
    // Set Item Function
    const setItem = (key, value) => {
        try {
            window.localStorage.setItem(key, value)
        } catch (error) {
            console.error(error)
        }
    }

    // Get Item Function
    const getItem = (key) => {
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

    const removeItem = (key) => {
        try {
            window.localStorage.removeItem(key)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        setItem,
        getItem,
        removeItem,
    }
}
