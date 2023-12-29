import CopyComponent from "@/components/__tests__/CopyComponent"
import MyForm from "@/components/__tests__/NewTestForm"
import PaginationComponent from "@/components/__tests__/Pagination"

import { Text } from "@chakra-ui/react"

const ResponsiveText = () => <Text>Responsive Font Size</Text>

const Test = function () {
    return (
        <>
            <CopyComponent />
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
