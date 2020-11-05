import React, { useState } from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import apiFilmes from '../services/apiFilmes';

export default () => {
    
    const [generos, setGeneros] = useState([])

    useEffect(()=>{
        apiFilmes.get('/genre/movie/list?language=pt-BR').then(results => {
            setGeneros(results.data.genres)
        })
    }, [])
    
    // console.log(generos)
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"><Link to="/">Filmes</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Gêneros" id="basic-nav-dropdown">
                            {generos.map(item => (
                                <NavDropdown.Item><Link key={item.id} to={`/generos/${item.id}/filmes`} >{item.name}</Link></NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <NavDropdown title="Filmes" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/filmes/populares">Populares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/filmes/lancamentos">Lançamentos</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/filmes/bem-avaliados">Bem Avaliados</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/filmes/busca">Busca Filmes</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Séries" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/series/populares">Populares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/series/no-ar">No Ar</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/series/bem-avaliados">Bem Avaliados</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Atores" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/atores/populares">Populares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/atores/lancamentos">Novos</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

