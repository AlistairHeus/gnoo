import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">Gnoo</div>
        <nav>
          <ul>
            <li>
              <a href="/">discover</a>
            </li>
            <li>
              <a href="/">products</a>
            </li>
            <li>
              <a href="/">solutions</a>
            </li>
            <li>
              <a href="/">reach</a>
            </li>
            <li className="btn">
              <a href="/">order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
