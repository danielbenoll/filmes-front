import React, {useEffect, useState} from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../components/Cartao';


export default({lista = [], link = 'filmes', qtd = 2, nome, foto = 'poster_path'}) => {

    const card= (foto) =>(
        <Image src={'http://image.tmdb.org/t/p/w500'+ foto} thumbnail />
    )
    
    return (
        <Row>
            {lista.map(item => (
                <React.Fragment key={item.id}>
                    {item[foto] &&
                        <Col key={item.id} md={qtd} className="mb-3">
                            {link && 
                                <Link to={`/${link}/${item.id}`}>
                                    {card(item[foto])}
                                </Link>
                            }
                            {!link &&
                                card(item[foto])
                            }
                            {item[`${nome}`]}
                        </Col>
                    }
                </React.Fragment>
            ))}
        </Row>
      )
}