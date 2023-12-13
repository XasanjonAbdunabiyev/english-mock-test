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

import { MdOutlineKeyboardVoice } from "react-icons/md"
import { FaBookOpen, FaHeadphones } from "react-icons/fa"
import { CiUnlock } from "react-icons/ci"
import { useSpeakingModal } from "../hooks/useSpeakingModal"

export const MockTable = () => {
    const { onOpen } = useSpeakingModal()
    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
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
                    <Tr>
                        <Td>
                            <div className="flex items-center justify-center">
                                <CiUnlock fontSize={40} color="green" />
                            </div>
                        </Td>
                        <Td>
                            <div className="flex items-center justify-center flex-col">
                                <FaHeadphones
                                    fontSize={40}
                                    color="gray"
                                    className="my-3"
                                />
                                <Button colorScheme="purple">Submission</Button>
                            </div>
                        </Td>
                        <Td>
                            <div className="flex items-center flex-col justify-evenly">
                                <MdOutlineKeyboardVoice
                                    fontSize={40}
                                    className="my-3"
                                    color="gray"
                                />
                                <Button onClick={onOpen} colorScheme="telegram">
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
                                <Button colorScheme="yellow">Submission</Button>
                            </div>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}
