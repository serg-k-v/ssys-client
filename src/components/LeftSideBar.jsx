import '../styles/LeftSideBar.scss'

import market from '../images/market.svg'
import home from '../images/home.svg'
import newAuditRule from '../images/add-new-rule.svg'

const LeftSideBar = () => {

    return (
        <div className="left-side-bar">
            <nav className="upper-bar">
                <svg height="14" width="14"><circle id="left-side-menu-circle" cx="7" cy="7" r="3.5" /></svg>
                <button className="square-btn pink-btn">
                    <img src={home} alt="Home" className="btn-icon"/>
                </button>
                <button className="square-btn pink-btn">
                    <img src={newAuditRule} alt="New audit rule" className="btn-icon"/>
                </button>
                <button className="square-btn black-btn"></button>
                <button className="square-btn black-btn"></button>
            </nav>
            
            <div className="down-bar">
                <button className="square-btn black-btn">
                    <img src={market} alt="Market" className="btn-icon"/>
                </button>
            </div>
        </div>
    );
}

export default LeftSideBar;