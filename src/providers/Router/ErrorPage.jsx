import React from "react"

import { useRouteError } from "react-router-dom"

import { NotFound } from "@/pages/NotFound"

export const ErrorPage = () => {
    const error = useRouteError()
    return (
        <NotFound errStatusText={error.statusText} errMessage={error.message} />
    )
}
