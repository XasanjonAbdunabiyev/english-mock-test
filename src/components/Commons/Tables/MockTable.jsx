import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Button,
} from "@chakra-ui/react"


import { MdOutlineKeyboardVoice } from "react-icons/md"
import { FaBookOpen, FaHeadphones } from "react-icons/fa"

import { tableTd, tableTh } from "@/db/mockTableData"
import { useSpeakingModal } from "@/hooks/modal-hooks/useSpeakingModal"
import { usePaymentModal } from "@/hooks/modal-hooks/usePaymentModal"

export const MockTable = () => {
    const { onOpen } = useSpeakingModal()
    const { openPaymentModal } = usePaymentModal()
    return (
        <>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            {tableTh?.map(function (th) {
                                return (
                                    <Th
                                        key={th.id}
                                        textAlign="center"
                                        fontSize={20}
                                    >
                                        {th.moduleName}
                                    </Th>
                                )
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableTd?.map((mockTable) => {
                            return (
                                <Tr key={mockTable.id}>
                                    <Td>
                                        <Box className="flex flex-col items-center justify-center">
                                            {mockTable.nameMockModules}
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box className="flex items-center justify-center">
                                            {mockTable.toBuy}
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box className="flex items-center justify-center flex-col">
                                            <FaHeadphones
                                                fontSize={40}
                                                color="gray"
                                                className="my-3"
                                            />
                                            <Button colorScheme="purple">
                                                Submission
                                            </Button>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box className="flex items-center flex-col justify-evenly">
                                            <MdOutlineKeyboardVoice
                                                fontSize={40}
                                                className="my-3"
                                                color="gray"
                                            />
                                            <Button
                                                onClick={() => {
                                                    if (
                                                        mockTable.purchesed !==
                                                        true
                                                    ) {
                                                        openPaymentModal()
                                                    } else {
                                                        onOpen()
                                                    }
                                                }}
                                                colorScheme="telegram"
                                            >
                                                Submission
                                            </Button>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box className="flex items-center flex-col">
                                            <FaBookOpen
                                                fontSize={40}
                                                className="my-3"
                                                color="gray"
                                            />
                                            <Button colorScheme="yellow">
                                                Submission
                                            </Button>
                                        </Box>
                                    </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}
