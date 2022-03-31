import '../styles/LeftSideBar.scss'

import market from '../images/market.svg'
import home from '../images/home.svg'

const LeftSideBar = () => {

    return (
        <div className="left-side-bar">
            <nav className="upper-bar">
                <svg height="10" width="10"><circle id="left-side-menu-circle" cx="6" cy="6" r="3" /></svg>
                <button className="square-btn pink-btn">
                    <img src={home} alt="Home" className="icon-left-side-bar"/>
                </button>
                <button className="square-btn pink-btn"></button>
                <button className="square-btn black-btn"></button>
                <button className="square-btn black-btn"></button>
            </nav>
            
            <div className="down-bar">
                <button className="square-btn black-btn">
                    <img src={market} alt="Market" className="icon-left-side-bar"/>
                </button>
            </div>
        </div>
    );
}

export default LeftSideBar;