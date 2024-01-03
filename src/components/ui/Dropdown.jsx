import { useState } from "react"
import { Button, IconButton } from "@chakra-ui/react"

import { SlUser } from "react-icons/sl"

// SignOut fuction
import { signOut } from "firebase/auth"
import { auth, db } from "@/firebase/config"
import { useNavigate } from "react-router-dom"

import { deleteDoc, doc } from "firebase/firestore"

export function Drobdown({ options }) {
    const [selectedOption, setSelectedOption] = useState(null)

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = async (option) => {
        setSelectedOption(option)
        setIsOpen(false)

        if (selectedOption === "Sign out") {
            // Remove the user from login
            window.localStorage.removeItem("login_user")
            signOut(auth).then(() => {
                navigate("/login", { replace: true })
            })
        } else if (selectedOption === "Profile settings 🧐") {
            navigate("/profile", { replace: true })
        }
    }

    return (
        <div className="relative inline-block text-left">
            <IconButton
                onClick={toggleDropdown}
                type="button"
                icon={<SlUser />}
                className="inline-flex justify-center text-sm font-bold rounded-md border focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
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
                            } hover:bg-gray-200 focus:outline-none text-black`}
                        >
                            {option}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
