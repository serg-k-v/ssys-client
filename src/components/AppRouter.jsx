import React, { useContext } from "react";

import {
    Route,
    Switch,
    Redirect
} from "react-router-dom"


import {privateRoutes, publicRoutes} from '../router'
import { selectIsAuth } from "../store/reducers/AuthReducer";

const AppRouter = () => {
    const isAuth = useSelector(selectIsAuth);
    
    return (
        isAuth ?
        <Switch>
            { privateRoutes.map(route => 
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to="/error"/>
        </Switch>
        :
        <Switch>
            { publicRoutes.map(route => 
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to="/login"/>
        </Switch>
    );
}

export default AppRouter;