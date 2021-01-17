import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header__wrapper">
        <div className="logo">
          <h1>Company Logo</h1>
          <p>Logo Sub-title</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Support Forum</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
