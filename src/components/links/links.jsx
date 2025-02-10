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
      <a href="https://www.google.com/search?q=Grid+Cria%C3%A7%C3%A3o+de+Sites&stick=H4sIAAAAAAAA_-NgU1I1qDBKNElNM7c0TTU1MUtKNbK0MqhIMTBKMrM0Tku0tExJsjS3WMQq7l6UmaLgXJSZeHj54cX5CimpCsGZJanFAJGLiS5DAAAA&hl=pt-BR&mat=CaLOGdC4IAl7ElcBmzl_pSSO_cDPIdXIMOBOak7eV26V0YjMeeOxRHD40u0SziMoTLAFPwbT-vgWIfFMZhsKiCpp2v7v9ITGdtYEPyZLDtb-HONRhsSW0Yw_nCrYn-L9xV0&authuser=1&ved=2ahUKEwjvrN3N4rmLAxVJBLkGHYc1AbQQ-MgIegQIKBAe" target="_blank" rel="noopener noreferrer">
        <img src={link3} alt="Link 3" className="link-image" />
      </a>
    </div>
  );
}

export default Links;

