import React, {useEffect, useState} from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default() => {


    const [filmes, setFilmes] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        apiFilmes.get('movie/popular?language=pt-BR').then(results => {
            setFilmes(results.data.results)
        })  
        
    }, [])

    return (
        <Pagina titulo="Filmes Populares">
            <Row>
                {filmes.map(item => (
                    <Col key={item.id} xs={3} className="mb-3">
                        <Cartao  titulo={item.title} foto={'http://image.tmdb.org/t/p/w500'+ item.backdrop_path}>
                            <Col>
                                Pontuação: {item.vote_average}
                            </Col>
                            <Col>
                                <Link to={"/filmes/" + item.id}>
                                    <Button variant="primary">Saiba mais</Button>
                                </Link>
                            </Col>
                        </Cartao>
                    </Col>
                ))}
            </Row>
        </Pagina>
      )
}