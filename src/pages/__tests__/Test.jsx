import PaginationComponent from "@/components/__tests__/Pagination"

import MyForm from "@/components/__tests__/TestForm"

import { Text } from "@chakra-ui/react"

const ResponsiveText = () => (
    <Text>
        Responsive Font Size
    </Text>
)

const Test = function () {
    return (
        <>
            <PaginationComponent />
            <MyForm />
            <ResponsiveText />
        </>
    )
}
export default Test
