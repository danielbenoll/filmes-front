import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Filmes" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/filmes/populares">Populares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/filmes/lancamentos">Lançamentos</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Séries" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/series/populares">Populares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/series/lancamentos">Lançamentos</Link></NavDropdown.Item>
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

