import { CiLock, CiUnlock } from "react-icons/ci"

export const tableTd = [
    {
        id: "1",
        toBuy: <CiUnlock fontSize={40} color="green" />,
        nameMockModules: "MULTILEVEL Mock Test 1",
        purchesed: true,
    },
    {
        id: "2",
        toBuy: <CiLock fontSize={40} color="red" />,
        purchesed: false,
        nameMockModules: "MULTILEVEL Mock Test 2",
    },
    {
        id: "3",
        toBuy: <CiLock fontSize={40} color="red" />,
        purchesed: false,
        nameMockModules: "MULTILEVEL Mock Test 3",
    },
    {
        id: "4",
        purchesed: false,
        toBuy: <CiLock fontSize={40} color="red" />,
        nameMockModules: "MULTILEVEL Mock Test 4",
    },
]

export const tableTh = [
    {
        id: "1",
        moduleName: "Mock Test Modules",
    },
    {
        id: "2",
        moduleName: "Purchase",
    },
    {
        id: "3",
        moduleName: "LISTENING",
    },
    {
        id: "4",
        moduleName: "SPEAKING",
    },
    {
        id: "5",
        moduleName: "READING",
    },
]
