import React from "react"

import {
    Box,
    Heading,
    Container,
    Stack,
    FormLabel,
    Input,
    Button,
    Text,
    useToast,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { PasswordField } from "./PasswordField"

import { Logo } from "@/components/Commons/Logo"
import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "@/firebase/config"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const toast = useToast()

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                toast({
                    title: "Success",
                    description: "Account created successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })

                navigate("/login")
                localStorage.setItem(
                    "register_user",
                    JSON.stringify({
                        currentUser: res?.user,
                        userPassword: data?.password,
                    })
                )
            })
            .catch(() => {
                toast({
                    title: "Error registretions",
                    description:
                        "This email and password is already registered",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                })
            })
    }

    return (
        <Box className="h-screen w-full flex items-center justify-center">
            <Container>
                <Box
                    backdropFilter="auto"
                    p={5}
                    borderRadius={10}
                    border="2px solid gray"
                    className="w-full"
                >
                    <Box className="flex items-center justify-between gap-y-5">
                        <Heading fontSize={22} className="my-3">
                            Create a new account for
                        </Heading>
                        <Logo />
                    </Box>
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
                                    {...register("email", { required: true, min: 6, max: 99 })}
                                    id="email"
                                    type="email"
                                    my={3}
                                />
                                {errors?.email && (
                                    <Text className="text-red-500 font-bold block">
                                        This is Email Address field is required
                                    </Text>
                                )}
                                <PasswordField
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors?.password && (
                                    <Text className="text-red-500 font-bold block">
                                        This is Password field is required
                                    </Text>
                                )}
                                <Button type="submit" width="100%" my={2}>
                                    Register
                                </Button>
                            </form>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}
