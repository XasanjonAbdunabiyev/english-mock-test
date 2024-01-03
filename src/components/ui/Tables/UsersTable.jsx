import React, { useState } from "react"

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
    Button,
    useToast,
} from "@chakra-ui/react"

import { updateDoc, doc } from "firebase/firestore"
import { db } from "@/firebase/config"

import { useQueryClient } from "@tanstack/react-query"
import { FaEdit } from "react-icons/fa"

export function UsersTable({ tableData }) {
    const toast = useToast()
    const queryClient = useQueryClient()

    const handleUpdateUserIsPaid = async (user_db) => {
        const updateUserIsPaidCollection = doc(db, "users", user_db?.id)
        let initialState;
        if (user_db.isPaid === true) {
            initialState = { ...user_db, isPaid: false }
        } else {
            initialState = { ...user_db, isPaid: true }
        }

        await updateDoc(updateUserIsPaidCollection, initialState)
            .then(() => {
                toast({
                    title: "Update user is paid",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })

                queryClient.invalidateQueries({ queryKey: ["users"] })
            })
            .catch(() => {
                toast({
                    title: "something went wrong",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                })
            })
    }

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
                            <Th>Crud Operations</Th>
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
                                    <Td>
                                        <Button
                                            onClick={() =>
                                                handleUpdateUserIsPaid(
                                                    userTable
                                                )
                                            }
                                            leftIcon={<FaEdit />}
                                            className="bg-gray-300 text-black"
                                        >
                                            Update
                                        </Button>
                                    </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
