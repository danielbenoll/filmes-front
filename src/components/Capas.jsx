import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default ({ lista = [], link = true, qtd = 2, foto = '' }) => {

  const card = (foto) => (
    <Card>
      <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w500" + foto} />
    </Card>
  )

  const exibirCard = (item) => {

    let imagem

    if (foto) {
      imagem = foto
    } else {
      imagem = item.media_type == 'person' ? 'profile_path' : 'poster_path'
    }

    let href = link;

    //// Código comentado fazia com que quando clicasse numa série ele levasse pra um filme

    // let href = 'filmes'

    // if(item.media_type == 'person'){
    //     href = 'atores'
    // } else if (item.media_type == 'tv'){
    //     href = 'series'
    // }

    return (
      <>
        {
          item[imagem] &&
          <Col md={qtd} key={item.id} className="mb-3">
            {link &&
              <Link to={`/${href}/${item.id}`}>
                {card(item[imagem])}
              </Link>
            }
            {!link &&
              card(item[imagem])
            }
          </Col>
        }
      </>
    )
  }

  return (
    <>
      <Row>
        {lista.map(item => (
          <React.Fragment key={item.id}>
            {exibirCard(item)}
          </React.Fragment>
        ))}
      </Row>
    </>
  )
}