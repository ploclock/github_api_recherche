import React from 'react';
import Menu from 'src/components/Menu';
import logo from 'src/assets/images/logo-github.png';
import './style.scss';

export default function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Github Logo" />
      <Menu />
    </header>
  );
}
