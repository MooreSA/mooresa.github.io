import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/brands';
// import githubLogo from '../lib/GitHub-Mark-64px.png';
// import linkedInLogo from '../lib/linkedin-logo.png';

const Header = () => (
  <header className="header">
    <Link to="/" className="header__content">Seamus Moore</Link>
    <nav className="header__nav">
      <Link to="/contact" className="header__link">Contact</Link>
      <a href="https://github.com/MooreSA" className="header__link">
        <i className="fab fa-github header__icon" />
      </a>
      <a href="https://www.linkedin.com/in/seamus-moore-ns/" className="header__link">
        <i className="fab fa-linkedin header__icon" />
      </a>
    </nav>
  </header>
);

export default Header;
