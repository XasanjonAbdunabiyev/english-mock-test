import React from "react"

import {
    Box,
    Table,
    TableContainer,
    Th,
    Thead,
    Tbody,
    Tr,
    Td,
    TableCaption,
} from "@chakra-ui/react"



export function UsersTable({ tableData }) {
    return (
        <Box className="users_table">
            <TableContainer>
                <Table variant="simple">
                    <TableCaption>Authentication Users Table</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>User Email</Th>
                            <Th>User Password</Th>
                            <Th>User App ID</Th>
                            <Th>User Is Paid</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData?.map((userTable) => {
                            return (
                                <Tr key={userTable?.appId}>
                                    <Td>{userTable?.email}</Td>
                                    <Td>{userTable?.password}</Td>
                                    <Td>{userTable?.appId}</Td>
                                    <Td>{userTable?.isPaid?.toString()}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
