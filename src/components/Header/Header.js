import React from 'react';

import './index.css';

export default function Header() {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
      <a href="/"><img alt="Logo" className="logo" src={require("./img/logo.png")} /></a>
      <h4 className="label">Agenda de gentileza</h4>
    </div>
  )
}
