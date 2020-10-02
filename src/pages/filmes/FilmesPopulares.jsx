import React, {useEffect, useState} from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Cartao from '../../components/Cartao';
import Cover from '../../components/Cover';
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
            <Capas lista={filmes} link="filmes" qtd={3}/>
        </Pagina>
      )
}