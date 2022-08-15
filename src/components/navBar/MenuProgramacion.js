import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './menuProgramacion.css'


const MenuProgramacion = () => {

  const [isActiveAccordion, setIsActiveAccordion] = useState(false);
  
  const handleClick = (e) => {
    setIsActiveAccordion((prevState) => !prevState);
  };

  return (
    <div
      
      className={`accordion
      ${isActiveAccordion ? "open" : "" }`}>

      <div className="title">
        <h4>Programacion</h4>
        <div className="arrow-down"
            onClick={handleClick}>
        <FontAwesomeIcon icon={faAngleDown}/>
        </div>
      </div>

      <ul className='ulMenuProgramacion'>
        <li><div className='puntoSubMenu'></div> Artes Escénicas</li>
        <li><div className='puntoSubMenu'></div> Artes Visuales</li>
        <li><div className='puntoSubMenu'></div> Musica</li>
        <li><div className='puntoSubMenu'></div> Talleres</li>
      </ul>
    </div>
  );
};

export default MenuProgramacion