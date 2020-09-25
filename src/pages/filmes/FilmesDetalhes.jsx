import React, {useEffect, useState} from 'react';
import {Card, Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';


export default(props) => {

    
    const [filme, setFilmes] = useState({})
    const [atores, setAtores] = useState([])
    const [contraCapas, setContraCapas] = useState([])
    const [posters, setPosters] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        const id = props.match.params.id

        apiFilmes.get('movie/'+ id +'?language=pt-BR').then(results => {
            setFilmes(results.data)
        }) 
        
        apiFilmes.get('movie/'+ id +'/credits?language=pt-BR').then(results => {
            setAtores(results.data.cast)
        }) 
        apiFilmes.get('movie/'+ id +'/images?language=en').then(results => {
            setPosters(results.data.posters)
            setContraCapas(results.data.backdrops)
        }) 
        
    }, [props])

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
                                            <Link to={"/atores/"+item.id}>
                                                <Card className="mb-3">
                                                    <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w500'+item.profile_path}/>
                                                    <Card.Body>
                                                        <p>{item.character}({item.name})</p>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Contra Capas</h1>
                        <Row>
                            {contraCapas.map(item => (
                                <React.Fragment key="item.id">
                                    {
                                        <Col md={6} className="mb-3">
                                            <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w500'+ item?.file_path} thumbnail />
                                        </Col>
                                    }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Posteres</h1>
                        <Row>
                            {posters.map(item => (
                                <React.Fragment key="item.id">
                                    {
                                        <Col md={2} className="mb-3">
                                            <Image src={'http://image.tmdb.org/t/p/w500'+ item?.file_path} thumbnail />
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
