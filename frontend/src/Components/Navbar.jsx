import React , { useState } from "react";
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";


function Navbar(){

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <div className="header">
      <div className="menu">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Planet List</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/registration">Registration</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/login">Login</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Logout</a>
          </li>
          
        </ul>
      </div>
      <ul className="user-data">
        <li>Signed in as USERNAME</li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
}

export default Navbar;