import MyForm from "@/components/__tests__/NewTestForm"
import PaginationComponent from "@/components/__tests__/Pagination"

import { Text } from "@chakra-ui/react"

const ResponsiveText = () => <Text>Responsive Font Size</Text>

const Test = function () {
    return (
        <>
            <PaginationComponent />
            <br />
            <hr />
            <MyForm />
            <br />
            <hr />
            <ResponsiveText />
        </>
    )
}
export default Test
