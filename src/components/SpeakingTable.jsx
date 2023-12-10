import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
} from '@chakra-ui/react'
import { CiWarning } from 'react-icons/ci'
import { TbClockHour3 } from 'react-icons/tb'

export const SpeakingTable = () => {
    return (
        <TableContainer className='my-5'>
            <Table>
                <Thead>
                    <Tr>
                        <Th fontSize={25} fontWeight="bold">
                            Time to think
                        </Th>
                        <Th fontSize={25} fontWeight="bold">
                            Question
                        </Th>
                        <Th fontSize={25} fontWeight="bold">Time to answer</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <CiWarning fontSize={40} className="mb-3" />
                            <Heading fontSize={18}>5 second</Heading>
                        </Td>

                        <Td>
                            <Heading fontSize={20}>
                                What is your full name
                            </Heading>
                        </Td>

                        <Td>
                            <TbClockHour3 fontSize={40} className="mb-3" />
                            <Heading fontSize={18}>30 second</Heading>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}
