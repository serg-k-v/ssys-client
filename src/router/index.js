
import Login from "../pages/Login"
import Audit from "../pages/Audit"
import Error from "../pages/Error"

export const privateRoutes = [
    { path: '/audit-list', component: Audit,   exact: true},
    // { path: '/account', component: Account, exact: true},
]

export const publicRoutes = [
    // { path: '/',               component: Home,          exact: true},
    { path: '/login',          component: Login,         exact: true},
    { path: '/error',          component: Error,         exact: true},
    //{ path: '/create-account', component: CreateAccount, exact: true},
    // { path: '/about',   component: About,     exact: true},
    // { path: '/contact', component: Contact,   exact: true},
]