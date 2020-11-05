import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Capas from '../components/Capas';
import Pagina from '../components/Pagina';
import Slide from '../components/Slide';
import apiFilmes from '../services/apiFilmes';

export default() => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };

    const [filmes, setFilmes] = useState([])
    const [series, setSeries] = useState([])
    const [atores, setAtores] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        apiFilmes.get('movie/popular?language=pt-BR').then(results => {
            setFilmes(results.data.results)
        })
        apiFilmes.get('tv/popular?language=pt-BR').then(results => {
            setSeries(results.data.results)
        })   
        apiFilmes.get('/person/popular').then(results => {
            setAtores(results.data.results)
        })   
        
    }, [])

    // console.log(atores)
    return(
        <Pagina titulo="Pagina Inicial">
            <div className="mb-5">
                <h2>Filmes <small><Link to="/filmes/populares">Ver mais</Link></small></h2>
                <Slide lista={filmes} link='filmes' />
            </div>
            <div className="mb-5">
                <h2>Séries <small><Link to="/series/populares">Ver mais</Link></small></h2>
                <Slide lista={series} link='series' />
            </div>
            <div className="mb-5">
                <h2>Atores <small><Link to="/atores/populares">Ver mais</Link></small></h2>
                <Slide lista={atores} link='atores' foto='profile_path'/>
            </div>

        
        </Pagina>
    )
}