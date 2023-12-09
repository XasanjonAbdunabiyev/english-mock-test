import { useModal } from "../hooks/useModal";
import { Alert } from "../components/Alert";
import { Layout } from "../layouts/Layout";
import { Carousel } from "../components/Carousel";
import { Logo } from "../components/Logo";
const Home = () => {
    const { isOpen, onClose } = useModal();

    return (
        <>
            <Alert isOpen={isOpen} onClose={onClose} title="Welcome to Mock English Test" >
                <Logo />
                <div className='my-4 font-bold text-lg'>
                    On this site, you can test your knowledge by taking an English test
                </div>
            </Alert>

            <Layout>
                <Carousel />
            </Layout>
        </>
    )
}

export default Home
