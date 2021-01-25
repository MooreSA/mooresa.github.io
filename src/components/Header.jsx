import React from 'react';
import githubLogo from '../lib/GitHub-Mark-64px.png';
import linkedInLogo from '../lib/linkedin-logo.png';

const Header = () => (
  <header className="header">
    <div className="header__content">Seamus Moore</div>
    <nav className="header__nav">
      <span>Contact</span>
      <a href="https://github.com/MooreSA" className="header__link">
        <img src={githubLogo} alt="GitHub Logo" className="header__img" />
      </a>
      <a href="https://www.linkedin.com/in/seamus-moore-ns/" className="header__link">
        <img src={linkedInLogo} alt="LinkedIn Logo" className="header__img" />
      </a>
    </nav>
  </header>
);

export default Header;
