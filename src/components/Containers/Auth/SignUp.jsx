import React from "react"

import {
    Box,
    Heading,
    Container,
    Stack,
    FormLabel,
    Input,
    Button,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { PasswordField } from "./PasswordField"

export const SignUp = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
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
                    <Heading fontSize={22} className="my-3">SignUp</Heading>
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <form
                                autoCapitalize="off"
                                autoComplete="off"
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
            </Container>
        </Box>
    )
}
