import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardHome from './CardHome';

function Home() {
    // return (
    //     <Container fluid className='cardHomeWidth'>
    //         <Row className='h-100'>
    //             <Col lg={8} className="d-flex flex-column flex-grow-1"><CardHome className="flex-grow-1" /></Col>
    //             <Col lg={4} className="d-flex flex-column flex-grow-1">
    //                 <Row className='h-100'><CardHome className="flex-grow-1 imgCustomSize" /></Row>
    //                 <Row className='h-100'><CardHome className="flex-grow-1 imgCustomSize" /></Row>
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col lg={4} className="d-flex flex-column flex-grow-1">
    //                 <Row className='h-100'><CardHome className="flex-grow-1 imgCustomSize" /></Row>
    //                 <Row className='h-100'><CardHome className="flex-grow-1 imgCustomSize" /></Row>
    //             </Col>
    //             <Col lg={8} className="d-flex flex-column flex-grow-1"><CardHome className="flex-grow-1" /></Col>
    //         </Row>
    //     </Container>
    // );

    return (
        <Row xs={1} md={2} lg={4} className="g-4 my-5 mx-2">
            {Array.from({ length: 12 }).map((_, idx) => (
                <Col key={idx}>
                    <CardHome />
                </Col>
            ))}
        </Row>
    );
}

export default Home;