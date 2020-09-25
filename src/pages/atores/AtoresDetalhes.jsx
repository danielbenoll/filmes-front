import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default(props) => {
    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])
    const [series, setSeries] = useState([])

    useEffect(()=>{

        const id = props.match.params.id

        apiFilmes.get(`person/${id}?language=pt-BR`).then(results => {
            setAtor(results.data)
        })
        apiFilmes.get(`person/${id}/movie_credits?language=pt-BR`).then(results => {
            setFilmes(results.data.cast)
        })
        apiFilmes.get(`person/${id}/tv_credits?language=pt-BR`).then(results => {
            setSeries(results.data.cast)
        })
    }, [props])
    

    return(
        <Pagina titulo={ator?.name}>
            {ator.id &&
                <Row>
                    <Col md={3}>
                        <Image src={'http://image.tmdb.org/t/p/w500'+ ator?.profile_path} thumbnail />
                    </Col>
                    <Col>
                        <p>{ator.biography}</p>
                        <p><strong>Data Nascimento: </strong>{ator.birthday}</p>
                        {ator.deathday && 
                            <p><strong>Data Nascimento: </strong>{ator.birthday}</p>
                        }
                        <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
                        <p><strong>Conhecido por: </strong>{ator.known_for_department}</p>
                    </Col>
                    <Col md={12}>
                        <h1>Filmes em que atuou</h1>
                        <Row>
                            {filmes.map(item => (
                                <React.Fragment key={item.id}>
                                    {item.poster_path &&
                                        <Col md={3}>
                                            <Link to={`/filmes/${item.id}`}>
                                                <Image src={'http://image.tmdb.org/t/p/w500'+ item?.poster_path} thumbnail />
                                            </Link>
                                        </Col>
                                    }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                    <Col md={12}>
                        <h1>Séries de TV em que atuou</h1>
                        <Row>
                            {series.map(item => (
                                <React.Fragment key={item.id}>
                                    {item.poster_path &&
                                        <Col md={3}>
                                            <Link to={`/series/${item.id}`}>
                                                <Image src={'http://image.tmdb.org/t/p/w500'+ item?.poster_path} thumbnail />
                                            </Link>
                                        </Col>
                                    }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                </Row>
            }
        </Pagina>
    )
}