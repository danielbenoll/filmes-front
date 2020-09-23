import React from 'react';
import { Card } from 'react-bootstrap';

export default(props) => {
    return(
        <>
            <Card className="mb-3">
                <Card.Img variant="top" src={props.foto}  style={{objectFit: 'cover', height: '200px'}}/>
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}