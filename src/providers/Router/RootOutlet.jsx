import { useOutlet } from "react-router-dom"

import { Suspense } from "react"

import { PageLoading } from "@/components/ui/Loading"

export function RootOutlet() {
    const outlet = useOutlet()
    return (
        <Suspense fallback={<PageLoading />}>
            <div className="router_root detail-root">{outlet}</div>
        </Suspense>
    )
}
