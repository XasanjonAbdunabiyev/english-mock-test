import { lazy, useEffect, useState } from "react"

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
import { getLoginData } from "@/services/docs"
import { toastNotify } from "@/components/ui/ToastNotify"

import { auth } from "@/firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"


import { Logo } from "@/components/ui/Logo"
import { PasswordField } from "./PasswordField"

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

    const onSubmit = async (data) => {
        // Login data for admin
        loginData?.map(({ password, email }) => {
            if (password === data?.password && email === data?.email) {
                navigate("/dashboard")
                toastNotify({
                    title: "success",
                    message: "You are an admin",
                })
                localStorage.setItem("token", "you_are_admin")
            }
        })

        let register_user = localStorage.getItem("register_user")
        let register_user_obj = JSON.parse(register_user)

        const { userPassword, currentUser } = register_user_obj

        await signInWithEmailAndPassword(
            auth,
            data?.email,
            data?.password
        ).then((res) => {
            let registered_email = currentUser?.email
            let registered_password = userPassword

            if (
                data?.email === registered_email &&
                data?.password === registered_password
            ) {
                navigate("/")

                toast({
                    title: "Correct Email and Password",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })

                localStorage.setItem("login_user", JSON.stringify(res.user))
            }else {
                toast({
                    title: "Incorrect Email and Password",
                    description: "Register again",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                })

                localStorage.removeItem("register_user")
            }
        })
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
                        sm: "bg.surface",
                    }}
                    boxShadow={{
                        base: "none",
                        sm: "lg",
                    }}
                    borderRadius={{
                        base: "none",
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
                                <Button type="submit" width="100%" my={2}>
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
