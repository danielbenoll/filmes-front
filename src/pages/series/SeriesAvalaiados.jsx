import React, {useEffect, useState} from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default() => {


    const [series, setSeries] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        apiFilmes.get('tv/top_rated?language=pt-BR').then(results => {
            setSeries(results.data.results)
        })  
        
    }, [])

    return (
        <Pagina titulo="Séries de TV mais bem avaliados">
            <Row>
                {series.map(item => (
                    <Col key={item.id} xs={3} className="mb-3">
                        <Cartao  titulo={item.name} foto={'http://image.tmdb.org/t/p/w500'+ item.backdrop_path}>
                            <Row>
                                Pontuação: {item.vote_average}
                            </Row>
                            <Row>
                            <Link to={"/series/" + item.id}>
                                <Button variant="primary">Saiba mais</Button>
                            </Link>
                            </Row>
                        </Cartao>
                    </Col>
                ))}
            </Row>
        </Pagina>
      )
}