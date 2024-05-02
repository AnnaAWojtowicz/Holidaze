import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardHome from './CardHome';
import CarouselHome from './CarouselHome';

function Home() {
    return (
        <div>
            <CarouselHome />
            <Row xs={1} md={2} lg={3} className="g-4 my-5 mx-2">
                {Array.from({ length: 12 }).map((_, idx) => (
                    <Col key={idx}>
                        <CardHome />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Home;