import "../styles/Header.scss";

const Header = () => {
  return (
    <div>
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
