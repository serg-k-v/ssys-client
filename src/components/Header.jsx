import "../styles/Header.scss";
import "../styles/Buttons.scss";

import logo from '../images/logo.svg'
import whiteTheme from '../images/white-theme.svg'

import { fetchLogout } from "../store/reducers/AuthReducer";
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const isAuth = useAppSelector( state => state.auth.isAuth);
    const [logXtext, setLogXtext] = useState(isAuth ? "Logout" : "Login" )
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    
    const logX = event => {
        event.preventDefault()

        console.log("isAuthorised : ", isAuth)

        if ( isAuth ) {
            dispatch(fetchLogout())
            setLogXtext("Login")
        } else {
            navigate('/login')
            setLogXtext("Logout")
        }
    }

    return (
        <div className="header">
            <img src={logo} alt="Audit logo" className="main-logo-audit" />
            <nav className="header-nav-bar">
            <div className="header-nav-bar-item left-side">
                <button className="base-styled-btn"></button>
                <button className="base-styled-btn" />
                <button className="base-styled-btn" />
            </div>
            <div className="header-nav-bar-item right-side">
                <button className="base-styled-btn" onClick={logX}>{logXtext}</button>
                <button className="theme-change-btn">
                <img src={whiteTheme} alt="Theme" className="btn-icon"/>
                </button>
            </div>
            </nav>
        </div>
    );
};

export default Header;
