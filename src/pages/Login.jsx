
const Login = () => {

    let history = useHistory();
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const Login = event => {
        event.preventDefault()
        history.push('/eye-history')
        setIsAuth(true)
    }

    const Create = event => {
        event.preventDefault()
        history.push('/create-account')
    }

    return (
        <div className="login-container">
            <input ></input>
            <input></input>
            <input></input>
            <button className="pink-btn">Login</button>
        </div>
    );
};

export default withRouter(Login);