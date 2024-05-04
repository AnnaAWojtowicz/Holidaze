import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardHome from './CardHome';
import CarouselHome from './CarouselHome';

function Home() {
    const [items, setData] = useState([]);

    useEffect(() => {
        fetch("https://v2.api.noroff.dev/holidaze/venues")
            .then((response) => response.json())
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('API request failed:', error);
                console.error('Current data:', items);
            });
    }
        , []);

    return (
        <div>
            <CarouselHome />
            <Row xs={1} md={2} lg={3} className="g-4 my-5 mx-2">
                {/* {data.map(item => (
                    
                    <Col key={item.id}>
                        <CardHome img={item.media[0].url} alt={item.media[0].alt} name={item.name} price={item.price} />
                    </Col>
                ))} */}
                {items.map((item, index) => {
                    const img = item.media && item.media.length > 0 ? item.media[0].url : '';
                    const alt = item.media && item.media.length > 0 ? item.media[0].alt : '';
                    return (
                        <Col>
                            <CardHome key={index} card={item} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Home;