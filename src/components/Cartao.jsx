import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default({lista = [], link = 'filmes', qtd = 2}) => {
    return(
        <>

            <Row>
                {lista.map(item => (
                    <React.Fragment key={"serie"+item.id}>
                        {item.profile_path &&
                            <Col md={qtd} className="mb-3">
                                <Link to={`/${link}/${item.id}`}>
                                    <Card className="mb-3">
                                        <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w500'+item.profile_path}/>
                                        <Card.Body>
                                            <p>{item.character}({item.name})</p>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        }
                    </React.Fragment>
                ))}
            </Row>


            
        </>
    )
}