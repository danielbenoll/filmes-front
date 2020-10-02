import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default({lista, tipo, foto = 'poster_path', qtd=2}) => {
    return(
        <>
            <Row>
                {lista.map(item => (
                    <React.Fragment key={item.id}>
                    {
                        item[foto] &&
                        
                    <Col key={item.id} md={qtd} className="mb-3">
                        <Link to={`/${tipo}/${item.id}`}>
                            <Image src={'http://image.tmdb.org/t/p/w500'+ item[foto]} thumbnail />
                        </Link>
                    </Col>
                    }
                    </React.Fragment>
                ))}
            </Row>
        </>
    )
}