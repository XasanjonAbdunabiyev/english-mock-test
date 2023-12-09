import { Heading, Image, StackDivider, VStack } from "@chakra-ui/react";
import mock_ielts from "../assets/images/mock_ielts.jpg";
import { MockTable } from "./MockTable";

export const Mock = () => {
  return (
    <div className="my-[36px]">
      <Heading mt={6} mb={6} as="h4" size="lg" textAlign="center">
        IELTS MOCK TESTS
      </Heading>

      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Image src={mock_ielts} alt="mock_test" />
        <MockTable />
      </VStack>
    </div>
  );
};
