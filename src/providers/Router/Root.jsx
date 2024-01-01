import { Outlet } from "react-router-dom"
export function Root() {
    return (
        <div className="router_root detail-root">
            <Outlet />
        </div>
    )
}
