import React from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

apiFilmes.get('movie/popular').then(results => {
    console.log(results.data.results)
})

// console.log(filmes)

export default() => {

    return(
        <>
            <Pagina titulo="Filmes Populares">
                <p>Filmes</p>
            </Pagina>
        </>
    )
}