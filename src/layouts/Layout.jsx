import React from 'react'
import { PageHeader } from './PageHeader'

export const Layout = ({ children }) => {
    return (
        <>
            <PageHeader />
            <div className='pages'>
                {children}
            </div>
        </>
    )
}
