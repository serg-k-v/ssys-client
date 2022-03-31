import '../styles/LeftSideBar.scss'

const LeftSideBar = () => {

    return (
        <div className="left-side-bar">
            <nav className="upper-bar">
                <svg height="10" width="10"><circle cx="6" cy="6" r="3"  fill="red" /></svg>
                <button className="left-side-bar-btn"></button>
                <button className="left-side-bar-btn"></button>
                <button className="left-side-bar-btn"></button>
                <button className="left-side-bar-btn"></button>
            </nav>
            
            <button className="left-side-bar-btn"></button>
        </div>
    );
}

export default LeftSideBar;