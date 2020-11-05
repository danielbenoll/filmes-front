import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Capas from '../../components/Capas';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

export default() => {

    const [filmes, setFilmes] = useState([])
    
    const buscar = (event) =>{
        const busca = event.target.value;

        if(busca.length>2){
            apiFilmes.get(`search/movie?language=pt-BR&query=${busca}`).then(results => {
                setFilmes(results.data.results)
            })
        }
    }

    return (
        <Pagina titulo="Buscar Filmes">
            <Form>
                <Form.Group controlId="busca">
                    <Form.Control type="text" placeholder="Pesquise um filme" onChange={buscar}/>
                </Form.Group>
            </Form>

            <Capas lista={filmes} link='filmes'/>
        </Pagina>
      )
}