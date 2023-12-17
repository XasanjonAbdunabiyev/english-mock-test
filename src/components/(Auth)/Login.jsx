import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Stack,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { lazy, useEffect, useState } from "react"

import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { getLoginData } from "../../services/docs"

const PasswordField = lazy(() =>
    import("./PasswordField").then((module) => {
        return { default: module.PasswordField }
    })
)

const Logo = lazy(() =>
    import("../UI/Logo").then((module) => {
        return { default: module.Logo }
    })
)

export const Login = () => {
    const { register, handleSubmit } = useForm()
    const [loginData, setLoginData] = useState([])

    const navigate = useNavigate();
    
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

    const onSubmit = (data) => {
        loginData?.map(({ password, email }) => {
            if (password === data?.password && email === data?.email) {
                toast.success("Login successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                navigate("/dashboard");
                localStorage.setItem("token", "you_are_admin");
            } else {
                toast.error("Wrong login password", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
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
                        <div className="flex items-center justify-center">
                            <Logo />
                        </div>
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
                        sm: "md",
                    }}
                    borderRadius={{
                        base: "none",
                        sm: "xl",
                    }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <form
                                onSubmit={handleSubmit((data) =>
                                    onSubmit(data)
                                )}
                            >
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    {...register("email")}
                                    id="email"
                                    type="email"
                                    my={3}
                                />
                                <PasswordField {...register("password")} />
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
