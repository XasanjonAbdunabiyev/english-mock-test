import { useState } from "react"
import { Button, IconButton } from "@chakra-ui/react"

import { SlUser } from "react-icons/sl"

// SignOut fuction
import { signOut } from "firebase/auth"
import { auth } from "@/firebase/config"
import { useNavigate } from "react-router-dom"

export function Drobdown({ options }) {
    const [selectedOption, setSelectedOption] = useState(null)

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        setIsOpen(false)

        if (selectedOption === "Sign out") {
            window.localStorage.removeItem("login_user")
            signOut(auth).then(() => {
                navigate("/login", { replace: true })
            })
        }
    }

    return (
        <div className="relative inline-block text-left">
            <IconButton
                onClick={toggleDropdown}
                type="button"
                icon={<SlUser />}
                className="inline-flex justify-center text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
            />

            {/* Dropdown panel, show/hide with the 'hidden' class */}
            <div
                className={`absolute right-0 w-56 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <div className="py-1">
                    {options.map((option) => (
                        <Button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className={`block text-left w-full px-2 py-2 text-sm 
                            } hover:bg-gray-200 focus:outline-none`}
                        >
                            {option}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
