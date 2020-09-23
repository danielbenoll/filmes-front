import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import FilmesAvalaiados from './pages/filmes/FilmesAvalaiados';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import FilmesLancamentos from './pages/filmes/FilmesLancamentos';
import FilmesPopulares from './pages/filmes/FilmesPopulares';

export default() => {
    return(
        <>
            <BrowserRouter>
                <Cabecalho/>
                <Switch>

                    <Route exact path="/" component={FilmesPopulares}/>
                    <Route exact path="/filmes/populares" component={FilmesPopulares}/>
                    <Route exact path="/filmes/lancamentos" component={FilmesLancamentos}/>
                    <Route exact path="/filmes/bem-avaliados" component={FilmesAvalaiados}/>
                    <Route exact path="/filmes/:id" component={FilmesDetalhes}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}