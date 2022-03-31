import '../styles/LeftSideBar.scss'

const LeftSideBar = () => {

    return (
        <div className="left-side-bar">
            <nav className="upper-bar">
                <svg height="10" width="10"><circle id="left-side-menu-circle" cx="6" cy="6" r="3" /></svg>
                <button className="left-side-bar-btn"></button>
                <button className="left-side-bar-btn"></button>
                <button className="left-side-bar-btn black-btn"></button>
                <button className="left-side-bar-btn black-btn"></button>
            </nav>
            
            <div className="down-bar">
                <button className="left-side-bar-btn black-btn"></button>
            </div>
        </div>
    );
}

export default LeftSideBar;