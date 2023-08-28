import "./header.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/icon-hamburger.svg";
import close_menu_btn from "../../assets/icon-close-menu.svg";
import { useState } from "react";

const Header = ({ handleOverlay }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
    handleOverlay();
  };
  return (
    <header>
      <nav className="navigation">
        <div className="header__img">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__menu">
          <button
            className="header__menu-btn"
            type="button"
            onClick={handleMenu}
          >
            {showMenu ? (
              <img src={close_menu_btn} alt="icon-close-menu" />
            ) : (
              <img src={menu} alt="icon-hamburger" />
            )}
          </button>
          {showMenu && (
            <ul className="header__menu-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Get Started</a>
              </li>
            </ul>
          )}
        </div>
        <div className="navbar">
          <ul className="navbar__links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
