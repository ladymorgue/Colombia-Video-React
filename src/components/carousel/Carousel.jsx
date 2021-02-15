import React from 'react'
import Items from './items/Items'
import './styles.css'

function Carousel(){
    return(
       <>
        <h3 className="lista">Mi lista</h3>

        <section className="carousel">
            <div classNAme="carousel_contenedor"> 
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
            </div>
        </section>
        </>
    )
}

export default Carousel