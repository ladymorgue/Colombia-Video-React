import React from 'react'

import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'

import './styles.css'


function Index(){
    return(
        <>
        <Header/>
        <Main/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
        <Footer/>
        </>
    )
}


export default Index