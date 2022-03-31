import "../styles/Header.scss";
import "../styles/Buttons.scss";

import logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Audit logo" className="main-logo-audit" />
      <nav className="header-nav-bar">
        <div className="header-nav-bar-item left-side">
          <button className="base-styled-btn" />
          <button className="base-styled-btn" />
          <button className="base-styled-btn" />
        </div>
        <div className="header-nav-bar-item right-side">
          <button className="base-styled-btn" />
          <button className="theme-change-btn" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
