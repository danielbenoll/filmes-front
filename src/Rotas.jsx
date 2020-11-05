import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import AtoresDetalhes from './pages/atores/AtoresDetalhes';
import FilmesAvalaiados from './pages/filmes/FilmesAvalaiados';
import FilmesBusca from './pages/filmes/FilmesBusca';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import FilmesGeneros from './pages/filmes/FilmesGeneros';
import FilmesLancamentos from './pages/filmes/FilmesLancamentos';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import Home from './pages/Home';
import SeriesAvalaiados from './pages/series/SeriesAvalaiados';
import SeriesDetalhes from './pages/series/SeriesDetalhes';
import SeriesNoAr from './pages/series/SeriesNoAr';
import SeriesPopulares from './pages/series/SeriesPopulares';

export default() => {
    return(
        <>
            <BrowserRouter>
                <Cabecalho/>
                <Switch>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/filmes/populares" component={FilmesPopulares}/>
                    <Route exact path="/filmes/lancamentos" component={FilmesLancamentos}/>
                    <Route exact path="/filmes/bem-avaliados" component={FilmesAvalaiados}/>
                    <Route exact path="/filmes/busca" component={FilmesBusca}/>
                    <Route exact path="/filmes/:id" component={FilmesDetalhes}/>
                    <Route exact path="/atores/:id" component={AtoresDetalhes}/>
                    <Route exact path="/series/populares" component={SeriesPopulares}/>
                    <Route exact path="/series/no-ar" component={SeriesNoAr}/>
                    <Route exact path="/series/bem-avaliados" component={SeriesAvalaiados}/>
                    <Route exact path="/series/:id" component={SeriesDetalhes}/>
                    <Route exact path="/generos/:id/filmes" component={FilmesGeneros}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}