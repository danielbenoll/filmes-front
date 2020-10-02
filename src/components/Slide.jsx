import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default(props) => {

    const lista= props.lista
    const foto= props.foto ? props.foto : 'poster_path'

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        ...props
    };

    return(
        <>
            <Slider {...settings}>
                {lista.map(item => (
                    <React.Fragment key={`filme${item.id}`}>
                        <Card>
                            <Link to={`/${props.link}/ ${item.id}`}><Card.Img variant="top" src={'http://image.tmdb.org/t/p/w400'+ item[foto]} thumbnail /></Link>
                        </Card>
                    </React.Fragment>
                ))}
            </Slider>
        </>
    )
}