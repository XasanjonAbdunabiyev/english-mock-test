import { memo } from "react"

export const NotFound = memo(({ errStatusText, errMessage }) => {
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i></i>
            </p>
        </div>
    )
})
