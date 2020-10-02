import React, {useEffect, useState} from 'react';
import {Card, Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';


export default(props) => {

    
    const [serie, setSeries] = useState({})
    const [atores, setAtores] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        const id = props.match.params.id

        apiFilmes.get('tv/'+ id +'?language=pt-BR').then(results => {
            setSeries(results.data)
        }) 
        
        apiFilmes.get('tv/'+ id +'/credits?language=pt-BR').then(results => {
            setAtores(results.data.cast)
        }) 
        
    }, [props])

    return (
        <Pagina titulo={serie?.name}>
            {serie.id &&
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={'http://image.tmdb.org/t/p/w500'+ serie?.poster_path} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>

                        <p>{serie.overview}</p>
                        <p><strong>Data de Estréia:</strong> {serie.first_air_date}</p>
                        
                        {serie.status === "Ended" &&
                            <p><strong>Data de Fim:</strong> {serie.last_air_date}</p>
                        }
                        <p><strong>Data do Último Episódio:</strong> {serie.last_episode_to_air.air_date}</p>
                        <p><strong>Situação:</strong> {serie.status}</p>
                        <p><strong>Nota:</strong> {serie.vote_average}</p>
                        <p><strong>Gêneros:</strong> 
                        {serie.genres.map(item => (
                            <span key={item.id}>{item.name}, </span>
                        ))}
                        </p>
                        <p><strong>Linguagem:</strong> {serie.original_language}</p>
                        <p><strong>Popularidade:</strong> {serie.popularity}</p>
                        <Row>
                            {serie.production_companies.map(item => (
                                <React.Fragment key={"serie"+item.id}>
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
                        <Cartao lista={atores} link='atores' foto='profile_path'/>
                    </Col>
                </Row>
            }
        </Pagina>
      )
}
