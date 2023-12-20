import { lazy } from "react"
import { useModal } from "../hooks/useModal"

const Alert = lazy(() =>
    import("../components/UI/Alert").then((module) => {
        return { default: module.Alert }
    })
)

const Logo = lazy(() =>
    import("../components/UI/Logo").then((module) => {
        return { default: module.Logo }
    })
)

const Layout = lazy(() =>
    import("../layouts/Layout").then((module) => {
        return { default: module.Layout }
    })
)

const Carousel = lazy(() =>
    import("../components/UI/Carousel").then((module) => {
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

const Home = () => {
    const { isOpen, onClose } = useModal()

    return (
        <>
            <Alert
                isOpen={isOpen}
                onClose={onClose}
                title="Welcome to Mock English Test"
            >
                <Logo />
                <div className="my-4 font-bold text-lg">
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

export default Home
