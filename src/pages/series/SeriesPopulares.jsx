import React, {useEffect, useState} from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default() => {


    const [series, setSeries] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        apiFilmes.get('tv/popular?language=pt-BR').then(results => {
            setSeries(results.data.results)
        })  
        
    }, [])

    return (
        <Pagina titulo="Series Populares">
            <Capas lista={series} link='series'/>
        </Pagina>
      )
}