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
        isAuth ?
        <Routes>
            { privateRoutes.map(route => 
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Navigate to="/error"/>
        </Routes>
        :
        <Routes>
            { publicRoutes.map(route => 
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Navigate to="/login"/>
        </Routes>
    );
}

export default AppRouter;