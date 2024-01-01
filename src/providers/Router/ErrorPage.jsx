import React from "react"

import { useRouteError } from "react-router-dom"

import {NotFound} from "@/pages/NotFound"

export const ErrorPage = () => {
    const error = useRouteError()
    console.error("Not Found", error.message)

    return (
        <NotFound errStatusText={error.statusText} errMessage={error.message} />
    )
}
