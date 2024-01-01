import React from "react"

export const NotFound = React.memo(({errStatusText, errMessage}) => {
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errStatusText || errMessage}</i>
            </p>
        </div>
    )
})
