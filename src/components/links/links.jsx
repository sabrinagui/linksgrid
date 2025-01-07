import React from 'react';
import link1 from '../../assets/img/1.png';
import link2 from '../../assets/img/2.png';
import link3 from '../../assets/img/3.png';
import './links.css';

function Links() {
  return (
    <div className="links-container">
      <a href="https://wa.me/98991228060?text=Ol%C3%A1%20Grid%20Sites,%20quero%20um%20site%20de%20sucesso" target="_blank" rel="noopener noreferrer">
        <img src={link1} alt="Link 1" className="link-image" />
      </a>
      <a href="https://gridsites.com.br/" target="_blank" rel="noopener noreferrer">
        <img src={link2} alt="Link 2" className="link-image" />
      </a>
      <a href="https://www.google.com/search?q=Sabrina+Mesquita+-+Cria%C3%A7%C3%A3o+de+sites&stick=H4sIAAAAAAAA_-NgU1I1qDAzSU40Tkk2TrUwM0gytTS0MqhINDQzTEo0Tk0ySU61TDRLWcSqGpyYVJSZl6jgm1pcWJpZkqigq-BclJl4ePnhxfkKKakKxZklqcUAcrdd41EAAAA&hl=pt-BR&mat=CQwLLajHgd_pElYBqiIDwvXDtRqxr4qT26XFksohs9QtIMdGpJR6kxwoS50MGJu9K4Hy-da0KuwDF3KUR2p1HECo_U0jIdYZ7Dp4lQsMqDuuBL_0sKDaA2wmRLK8xQsyIw&authuser=0#" target="_blank" rel="noopener noreferrer">
        <img src={link3} alt="Link 3" className="link-image" />
      </a>
    </div>
  );
}

export default Links;

