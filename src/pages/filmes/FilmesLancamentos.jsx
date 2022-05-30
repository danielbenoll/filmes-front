import React, {useEffect, useState} from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default() => {


    const [filmes, setFilmes] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        apiFilmes.get('movie/now_playing?language=pt-BR').then(results => {
            setFilmes(results.data.results)
        })  
        
    }, [])

    return (
        <Pagina titulo="Filmes Lançamentos">
            <Capas lista={filmes} link={"filmes"}/>
        </Pagina>
      )
}