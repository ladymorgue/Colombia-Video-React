import React from 'react'
import './styles.css'

import Google from '../../assets/imagenes/google-icon.png'
import Twitter from '../../assets/imagenes/twitter-icon.png'

function Hero (){
    return(
        <section className="login">
        <section className="login_contenedor">
            <h2>Inicia sesión</h2>
            <form className="login_contenedor_form">
                <input className="input" type="text" placeholder="Correo"/>
                 <input className="input" type="password" placeholder="Contraseña"/>
                <button className="boton">Iniciar sesión</button>
                <div className="login_contenedor_recuerdame">
                    <label>
                            <input type="checkbox" id="caja1" value="first_checkbox"/>Recuérdame
                     </label>
                         <a href="">Olvidé mi contraseña</a>
                     </div>
            </form>

        <section className="login_contenedor_redes">
            <div className="redes">
                <img src={Google}/>Inicia sesión con Google
            </div>
            <div className="redes">
                <img src={Twitter}/>Inicia sesión con Twitter
            </div>
        </section>
        <p className="login_contenedor_registro">
            No tienes ninguna cuenta
            <a href=""> Regístrate</a>
        </p>
    </section>
</section>
    )
}


export default Hero