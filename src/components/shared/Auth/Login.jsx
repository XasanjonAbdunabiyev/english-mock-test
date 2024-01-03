import { useEffect, useState } from "react"

import { v4 as uuidV4 } from "uuid"

import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
import { getLoginData } from "@/api/docs"
import { toastNotify } from "@/components/ui/Message/ToastNotify"

import { auth } from "@/firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

import { Logo } from "@/components/ui/Logo"
import { PasswordField } from "./PasswordField"

import { addDoc, collection } from "firebase/firestore"
import { db } from "@/firebase/config"
import { useLocalStorage } from "@/hooks/useLocalStorage"

const usersCollection = collection(db, "users")

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [loginData, setLoginData] = useState([])

    const toast = useToast()

    const navigate = useNavigate()

    useEffect(() => {
        const aboartController = new AbortController()

        try {
            getLoginData().then((data) => {
                setLoginData(data)
            })
        } catch (error) {
            console.log("Fetch failted")
        }

        return () => {
            aboartController.abort()
        }
    }, [])

    const { getItem, removeItem, setItem } = useLocalStorage()

    const onSubmit = async (data) => {
        // Login data for admin
        loginData?.map(async ({ password, email }) => {
            if (password === data?.password && email === data?.email) {
                navigate("/dashboard")
                toastNotify({
                    title: "success",
                    message: "You are an admin",
                })
                localStorage.setItem("token", "you_are_admin")
            }
        })

        const registerItem = getItem("register_user")
        const { userPassword, currentUser } = registerItem
    console.log({ userPassword, currentUser })

        if (currentUser && userPassword) {
            if (
                data?.email === currentUser?.email &&
                data?.password === userPassword
            ) {
                // push logged in user to db users collection
                addDoc(usersCollection, {
                    appId: `${uuidV4()}`,
                    email: data?.email,
                    password: data?.password,
                    isPaid: false,
                }).then(() => {
                    toast({
                        title: "Correct Email and Password",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    })

                    navigate("/")
                    setItem("login_user", JSON.stringify(res.user))
                })

                await signInWithEmailAndPassword(
                    auth,
                    data?.email,
                    data?.password
                )
            } else {
                toast({
                    title: "Incorrect Email and Password",
                    description: "Register again",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                })
                removeItem("register_user")
            }
        }else if (data.email !== currentUser?.email && data?.password !== userPassword)  {
            console.log(true)
        }
    }

    return (
        <Container
            maxW="lg"
            py={{
                base: "12",
                md: "24",
            }}
            px={{
                base: "0",
                sm: "8",
            }}
        >
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack
                        spacing={{
                            base: "2",
                            md: "3",
                        }}
                        textAlign="center"
                    >
                        <Box className="flex items-center justify-center">
                            <Logo />
                        </Box>
                        <Heading
                            size={{
                                base: "xs",
                                md: "sm",
                            }}
                        >
                            Log in to your account
                        </Heading>
                    </Stack>
                </Stack>
                <Box
                    py={{
                        base: "0",
                        sm: "8",
                    }}
                    px={{
                        base: "4",
                        sm: "10",
                    }}
                    bg={{
                        base: "transparent",
                        sm: "bg.gray.100",
                    }}
                    boxShadow={{
                        base: "1",
                        sm: "xl",
                    }}
                    borderRadius={{
                        base: "1",
                        sm: "xl",
                    }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <form
                                autoComplete="off"
                                onSubmit={handleSubmit((data) =>
                                    onSubmit(data)
                                )}
                            >
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    {...register("email", { required: true })}
                                    id="email"
                                    type="email"
                                    my={3}
                                />
                                {errors?.email && (
                                    <Text className="text-red-500 block font-bold">
                                        This is Email Address field is required
                                    </Text>
                                )}
                                <PasswordField
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors?.email && (
                                    <Text className="text-red-500 block font-bold">
                                        This is Email Address field is required
                                    </Text>
                                )}
                                <Heading
                                    onClick={() => navigate("/register")}
                                    fontSize={16}
                                    color="blue"
                                    className="underline my-4 cursor-pointer"
                                >
                                    You are new to this site
                                </Heading>
                                <Button
                                    className="bg-green-500"
                                    variant="outline"
                                    type="submit"
                                    width="100%"
                                    my={2}
                                >
                                    Login
                                </Button>
                            </form>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}
