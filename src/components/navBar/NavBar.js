import React, { useState } from 'react'
import './navBar.css'
import brand from '../../assets/img/brand.png'
import lupa from '../../assets/img/lupa.png'
import perfil from '../../assets/img/ellipse.png'
import MenuProgramacion from './MenuProgramacion'

const NavBar = () => {

    const [active, setActive] = useState("nav__menu");

    const [icon, setIcon] = useState("nav__toggler");

    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };

  return (

    <div className='nav'>
        <div className='navHeader'>

          <div className='divImgNav'>
              <img className='imgNav' src={brand} alt=''/>
          </div>

          <div className='divBrandNav'>
              <h1>CENTRO</h1>
              <h1>CULTURAL</h1>
              <h1>SAN MARTIN</h1>
          </div>

          <div onClick={navToggle} className={icon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div>
        </div>

        <div className='menuOpen'>
            <ul className={active}>
                <div className='divPerfilMenu'>
                    <img src={perfil} alt='foto Usuario'/>
                    <h4>Ingresá a tu perfil</h4>
                </div>

                <li> Institucional   </li>
                <li><MenuProgramacion/> </li>
                <li> Cursos y talleres  </li>
                <li>Preguntas Frecuentes  </li>
                

                <div className='divBuscarMenu'>
                    <input placeholder='Buscar...' />
                    <button>

                    <img src={lupa} alt="buscar"/>
                    </button>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default NavBar