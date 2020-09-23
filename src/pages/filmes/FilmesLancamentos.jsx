import React, {useEffect, useState} from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default() => {


    const [filmes, setFilmes] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        apiFilmes.get('movie/now_playing?language=pt-BR').then(results => {
            setFilmes(results.data.results)
            console.log(results.data.results[0])
        })  
        
    }, [])

    return (
        <Pagina titulo="Filmes Lançamentos">
            <Row>
                {filmes.map(item => (
                    <Col key={item.id} xs={6} md={4}>
                        <Link to={"/filmes/" + item.id}><Image src={'http://image.tmdb.org/t/p/w500'+ item.poster_path} thumbnail /></Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
      )
}