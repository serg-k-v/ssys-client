import { withRouter, useNavigate } from "react-router-dom";

const Login = () => {

    let history = useNavigate();

    const Login = event => {
        event.preventDefault()
        history.push('/audit')
    }

    const Create = event => {
        event.preventDefault()
        history.push('/register')
    }

    return (
        <div className="login-container">
            <input ></input>
            <input></input>
            <input></input>
            <button onClick={Login} className="pink-btn">Login</button>
        </div>
    );
};

export default Login;