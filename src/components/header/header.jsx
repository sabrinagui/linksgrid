import React from 'react';
import './header.css'; // Importação do CSS
import gridHeader from '../../assets/img/gridheader.png';


function Header() {
  return (
    <div className="header-container">
      <img src={gridHeader} alt="Header Image" className="header-image" />
    </div>
  );
}

export default Header;
