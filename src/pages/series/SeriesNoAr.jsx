import React, {useEffect, useState} from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default() => {


    const [series, setSeries] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        apiFilmes.get('tv/on_the_air?language=pt-BR').then(results => {
            setSeries(results.data.results)
        })  
        
    }, [])

    return (
        <Pagina titulo="Séries de TV no Ar">
            <Row>
                {series.map(item => (
                    <Col key={item.id} xs={6} md={4}>
                        <Link to={"/series/" + item.id}><Image src={'http://image.tmdb.org/t/p/w500'+ item.poster_path} thumbnail /></Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
      )
}