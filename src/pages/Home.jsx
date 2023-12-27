import { lazy } from "react"
import { useModal } from "../hooks/modal-hooks/useModal"

const Alert = lazy(() =>
    import("../components/Commons/Alert").then((module) => {
        return { default: module.Alert }
    })
)


const Layout = lazy(() =>
    import("../layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

const Carousel = lazy(() =>
    import("../components/Commons/Carousel").then((module) => {
        return {
            default: module.Carousel,
        }
    })
)

const Mock = lazy(() =>
    import("../components/Views/Mock").then((module) => {
        return {
            default: module.Mock,
        }
    })
)

export default function Home() {
    const { isOpen, onClose } = useModal()

    return (
        <>
            <Alert
                isOpen={isOpen}
                onClose={onClose}
                title="Welcome to Mock English Test"
            >
                <div className="font-bold text-base">
                    On this site, you can test your knowledge by taking an
                    English test
                </div>
            </Alert>

            <Layout>
                <Carousel />
                <Mock />
            </Layout>
        </>
    )
}
