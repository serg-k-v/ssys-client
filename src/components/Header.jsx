import "../styles/Header.scss";
import "../styles/Buttons.scss";

const Header = () => {
  return (
    <div className="header">
      <img srs="logo.svg" alt="Audit logo" />
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
