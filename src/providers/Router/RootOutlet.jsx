import { Outlet } from "react-router-dom"

import { Suspense } from "react"

import { PageLoading } from "@/components/ui/Loading"

export function RootOutlet() {
    return (
        <Suspense fallback={<PageLoading />}>
            <div className="router_root detail-root">
                <Outlet />
            </div>
        </Suspense>
    )
}
