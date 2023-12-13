import { lazy } from 'react'
import { wait } from '../../services/wait'

const MainTestComponent = lazy(() =>
    wait(1000).then(() =>
        import('../../components/__tests__/Test').then((module) => {
            return { default: module.Test }
        })
    )
)

const Test = function () {
    return <MainTestComponent />
}
export default Test
