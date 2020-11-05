import React, {useEffect, useState} from 'react';
import {Card, Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Cartao from '../../components/Cartao';
import Cover from '../../components/Cover';
import Pagina from '../../components/Pagina';
import Slide from '../../components/Slide';
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
    console.log(atores)
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
                        <Capas lista={filme.production_companies} foto="logo_path" link=''/>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Principais Atores</h1>
                        <Cartao lista={atores} link='atores' foto='profile_path'/>
                    </Col>
                    {!contraCapas.length==0 &&
                        <div className="mb-5">
                            <hr/>
                            <h1>Contra Capas</h1>
                            <Capas lista={contraCapas} foto='file_path'/>
                        </div>
                    }{!posters.length==0 &&
                        <div className="mb-5">
                            <h1>Posteres</h1>
                            <Capas lista={posters} foto='file_path'/>
                        </div>
                    }
                </Row>
            }
        </Pagina>
      )
}
