import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PasswordField } from "./PasswordField";
import { lazy } from "react";

const Logo = lazy(() =>
  import("../UI/Logo").then((module) => {
    return { default: module.Logo };
  })
);

export const Login = () => {
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
            <Text color="fg.muted">
              Don't have an account? <Link href="#">Sign up</Link>
            </Text>
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
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
                <PasswordField />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
