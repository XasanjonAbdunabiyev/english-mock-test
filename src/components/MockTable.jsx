import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
} from "@chakra-ui/react"

import { useSpeakingModal } from "../hooks/useSpeakingModal"

import { MdOutlineKeyboardVoice } from "react-icons/md"
import { FaBookOpen, FaHeadphones } from "react-icons/fa"
import { usePaymentModal } from "../hooks/usePaymentModal"


import { tableTd } from "../db/mockTableData"

export const MockTable = () => {
    const { onOpen } = useSpeakingModal();
    const { openPaymentModal } = usePaymentModal();
    return (
        <>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th textAlign="center" fontSize={20}>
                                Mock Test Modules
                            </Th>
                            <Th textAlign="center" fontSize={20}>
                                Purchase
                            </Th>
                            <Th textAlign="center" fontSize={20}>
                                LISTENING
                            </Th>
                            <Th textAlign="center" fontSize={20}>
                                SPEAKING
                            </Th>
                            <Th textAlign="center" fontSize={20}>
                                READING
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableTd?.map((mockTable) => {
                            return (
                                <Tr key={mockTable.id}>
                                    <Td>
                                        <div className="flex flex-col items-center justify-center">
                                            {mockTable.nameMockModules}
                                        </div>
                                    </Td>
                                    <Td>
                                        <div className="flex items-center justify-center">
                                            {mockTable.toBuy}
                                        </div>
                                    </Td>
                                    <Td>
                                        <div className="flex items-center justify-center flex-col">
                                            <FaHeadphones
                                                fontSize={40}
                                                color="gray"
                                                className="my-3"
                                            />
                                            <Button colorScheme="purple">
                                                Submission
                                            </Button>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div className="flex items-center flex-col justify-evenly">
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
                                                        openPaymentModal();
                                                    } else {
                                                        onOpen()
                                                    }
                                                }}
                                                colorScheme="telegram"
                                            >
                                                Submission
                                            </Button>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div className="flex items-center flex-col">
                                            <FaBookOpen
                                                fontSize={40}
                                                className="my-3"
                                                color="gray"
                                            />
                                            <Button colorScheme="yellow">
                                                Submission
                                            </Button>
                                        </div>
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
