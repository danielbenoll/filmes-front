import React, {useEffect, useState} from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Cartao from '../../components/Cartao';
import Cover from '../../components/Cover';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default(props) => {


    const [filmes, setFilmes] = useState([])
    const [genero, setGenero] = useState({})

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        const id = props.match.params.id

        apiFilmes.get(`discover/movie?with_genres=${id}&language=pt-BR`).then(results => {
            setFilmes(results.data.results)
        })

        apiFilmes.get(`genre/movie/list?language=pt-BR`).then(results => {
            const generos = results.data.genres.filter(item => item.id == id).pop()
            setGenero(generos)
        })  
        
    }, [props])

    return (
        <Pagina titulo={`Filmes de ${genero.name}`}>
            <Capas lista={filmes} link="filmes" qtd={3}/>
        </Pagina>
      )
}