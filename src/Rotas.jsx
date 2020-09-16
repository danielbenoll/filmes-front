import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import FilmesPopulares from './pages/filmes/FilmesPopulares';

export default() => {
    return(
        <>
            <BrowserRouter>
                <Cabecalho></Cabecalho>
                <Route exact path="/" component={FilmesPopulares}/>
                <Route exact path="/filmes/populares" component={FilmesPopulares}/>
            </BrowserRouter>
        </>
    )
}