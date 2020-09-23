import React, {useEffect, useState} from 'react';
import { Button, Card, Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';
import { useParams } from "react-router";


export default(props) => {

    
    const [filme, setFilmes] = useState({})
    const [atores, setAtores] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        const id = props.match.params.id

        apiFilmes.get('movie/'+ id +'?language=pt-BR').then(results => {
            setFilmes(results.data)
        }) 
        
        apiFilmes.get('movie/'+ id +'/credits?language=pt-BR').then(results => {
            setAtores(results.data.cast)
        }) 
        
    }, [])

    console.log(filme)
    return (
        <Pagina titulo={filme?.title}>
            {filme.id &&
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={'http://image.tmdb.org/t/p/w500'+ filme?.poster_path} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>

                        <p>{filme.overview}</p>
                        <p><strong>Data Lançamento:</strong> {filme.release_date}</p>
                        <p><strong>Orçamento:</strong> {filme.budget}</p>
                        <p><strong>Gêneros:</strong> 
                        {filme.genres.map(item => (
                            <span key={item.id}>{item.name}, </span>
                        ))}
                        </p>
                        <p><strong>Linguagem:</strong> {filme.original_language}</p>
                        <p><strong>Popularidade:</strong> {filme.popularity}</p>
                        <Row>
                            {filme.production_companies.map(item => (
                                <React.Fragment key="item.id">
                                    {item.logo_path && 
                                        <Col md={2}>
                                            <OverlayTrigger
                                                key={item.id}
                                                placement="auto"
                                                overlay={<Tooltip id={'tooltip_'+item.id} >{item.name}</Tooltip>}
                                            >
                                                <Card className="mb-3">
                                                    <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w500'+item.logo_path}/>
                                                </Card>
                                            </OverlayTrigger>
                                        </Col>
                                    }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Principais Atores</h1>
                        <Row>
                            {atores.map(item => (
                                <React.Fragment key="item.id">
                                    {item.profile_path &&
                                        <Col md={2} className="mb-3">
                                            <Card className="mb-3">
                                                <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w500'+item.profile_path}/>
                                                <Card.Body>
                                                    <p>{item.character}({item.name})</p>
                                                </Card.Body>
                                            </Card>
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
