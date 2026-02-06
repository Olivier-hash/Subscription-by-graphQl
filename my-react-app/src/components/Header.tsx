import React from "react";
import "./Header.css";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title = "My App" }) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{title}</h1>

        <nav className="header__nav">
          <ul className="header__list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
//commen
export default Header;
