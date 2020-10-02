import React, {useEffect, useState} from 'react';
import Capas from '../../components/Capas';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default() => {


    const [series, setSeries] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        apiFilmes.get('tv/on_the_air?language=pt-BR').then(results => {
            setSeries(results.data.results)
        })  
        
    }, [])

    return (
        <Pagina titulo="Séries de TV no Ar">
            <Capas lista={series} link='series'/>
        </Pagina>
      )
}