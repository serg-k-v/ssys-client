import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchLogin } from "../store/reducers/AuthReducer";

import "../styles/Login.scss"
import "../styles/Inputs.scss"

const Login = () => {
    const [port, setPort] = useState("")
    const [host, setHost] = useState("")
    const [username, setUsername] = useState("")
    const [pswd, setPswd] = useState("")
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector( state => state.auth.isAuth);

    const login = event => {
        event.preventDefault()
        const addres =  host + ":" + port
        dispatch(fetchLogin( username, pswd ))

        if ( isAuth ) {
            navigate('/audit')
        }
    }

    const Create = event => {
        event.preventDefault()
        navigate('/register')
    }

    return (
        <div className="login-container-outer">
            <div className="login-container">
                <form className="login-form">
                    <input type="text" placeholder="Addres" className="audit-input" 
                        onChange={e => setHost(e.target.value)} />
                    <input type="number" placeholder="Port" min="0" max="65535" className="audit-input" 
                        onChange={e => setPort(e.target.value)}/>
                    <input type="text" placeholder="Username" className="audit-input wide-item"
                        onChange={e => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" className="audit-input wide-item"
                        onChange={e => setPswd(e.target.value)}/>
                </form>
                <button onClick={login} className="login-form-btn pink-btn">Login</button>
            </div>
        </div>
    );
};

export default Login;