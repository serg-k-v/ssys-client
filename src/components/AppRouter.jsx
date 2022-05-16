import {
    Route,
    Routes,
    Navigate
} from "react-router-dom"
import {privateRoutes, publicRoutes} from '../router'
import { useAppSelector } from '../hooks/redux'

const AppRouter = () => {
    const isAuth = useAppSelector( state => state.auth.isAuth);

    return (
        <Routes>
            isAuth ?
            { privateRoutes.map(route => <Route  path={route.path} element={route.component} key={route.path} /> )}
            :
            { publicRoutes.map( route => <Route  path={route.path} element={route.component} key={route.path} /> )}
            <Route path="*" element={<Navigate to="/error"/>} />
        </Routes>
    );
}

export default AppRouter;