import React from 'react'
import './styles.css'

import Foto from '../../../assets/imagenes/5.jpg'
import Play from '../../../assets/imagenes/play-icon.png'
import Plus from '../../../assets/imagenes/plus-icon.png'

function Items (){
    return(
        <div className="carousel_fotos">
            <img src={Foto} alt=""/>
             <div className="carousel_informacion">
                <div className="carousel_informacion_img">
                    <img src={Play} alt=""/>
                    <img src={Plus} alt=""/>
                </div>
                <p className="carousel_informacion_titulo">Título descriptivo</p>
                <p className="carousel_informacion_subtitulo">2020 17+ 127 min</p>
            </div>
        </div>    
    )
}


export default Items