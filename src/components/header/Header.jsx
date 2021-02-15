import React from 'react'
import Logo from '../../assets/imagenes/logo_veeam.png'
import User from '../../assets/imagenes/user_icon.png'

import './styles.css'

function Header(){
    return (
        <header class="cabezote">

        <div className="logo">
            <img src={Logo} alt=""/> 
            <p>l Colombia Video</p>
        </div>
        <div className="menu_total">
            <img src={User} alt=""/>

            <nav className="navegacion">
                <ul className="menu">
                    <li><a href="">Perfil</a>
                        <ul className="submenu">
                            <li><a href="">Cuenta</a></li>
                            <li><a href="">Cerrar Sesión</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
      </div>

    </header>
    )
}

export default Header