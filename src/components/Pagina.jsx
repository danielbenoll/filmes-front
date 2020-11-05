import React, { useState } from 'react';
import { Jumbotron, Container, Form } from 'react-bootstrap';
import apiFilmes from '../services/apiFilmes';
import Capas from './Capas';

export default (props) => {
  const [filmes, setFilmes] = useState([])
  const buscar = (event) => {
    const busca = event.target.value

    if (busca.length > 2) {
      apiFilmes.get(`search/multi?language=pt-BR&query=${busca}`).then(results => {

        console.log(results.data.results);

        setFilmes(results.data.results);
      })
    }
  }

  return (
    <>
      {props.titulo &&
        <Jumbotron>
          <Container>
            <h1>{props.titulo}</h1>

            <Form>
              <Form.Group controlId="busca">
                <Form.Control type="text" placeholder="Pesquise um Filme" onChange={buscar} />
              </Form.Group>
            </Form>

          </Container>
        </Jumbotron>
      }
      <Container>
        {filmes.length > 0 &&
          <Jumbotron>
            <h1>Principais Resultados: </h1>
            <Capas lista={filmes}/>
          </Jumbotron>
        }
        {props.children}
      </Container>
    </>
  )
}