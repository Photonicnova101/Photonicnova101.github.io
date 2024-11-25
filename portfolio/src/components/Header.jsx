import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">
        <h1 className="site-title">Sam Pautrat's Portfolio</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;