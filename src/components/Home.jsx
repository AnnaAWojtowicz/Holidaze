import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardHome from './CardHome';

function Home() {
    return (
        <Container fluid className='cardHomeWidth'>
            <Row className='h-100'>
                <Col lg={8} className="d-flex flex-column flex-grow-1"><CardHome className="flex-grow-1" /></Col>
                <Col lg={4} className="d-flex flex-column flex-grow-1">
                    <Row className='h-100'><CardHome className="flex-grow-1 imgCustomSize" /></Row>
                    <Row className='h-100'><CardHome className="flex-grow-1 imgCustomSize" /></Row>
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="d-flex flex-column flex-grow-1">
                    <Row className='h-100'><CardHome className="flex-grow-1 imgCustomSize" /></Row>
                    <Row className='h-100'><CardHome className="flex-grow-1 imgCustomSize" /></Row>
                </Col>
                <Col lg={8} className="d-flex flex-column flex-grow-1"><CardHome className="flex-grow-1" /></Col>
            </Row>
        </Container>
    );

    //     <Row xs={1} md={2} lg={4} className="g-4 my-5 mx-2">
    //         {Array.from({ length: 12 }).map((_, idx) => (
    //             <Col key={idx}>
    //                 <Card className='cardBorder'>
    //                     <Card.Img variant="top" src="holder.js/100px160" className='imgCardBorder' />
    //                     <Card.Body className='bodyCardBorder'>
    //                         <Card.Title>Card title</Card.Title>
    //                         <Card.Text>
    //                             This is a longer card with supporting text below as a natural
    //                             lead-in to additional content. This content is a little bit
    //                             longer.
    //                         </Card.Text>
    //                     </Card.Body>
    //                     <Card.Footer className="footerCardBorder d-flex justify-content-between align-items-center">
    //                         <span>Price</span>
    //                         <Link to="/cardPage"><Button variant="outline-success">More</Button></Link>
    //                     </Card.Footer>
    //                 </Card>
    //             </Col>
    //         ))}
    //     </Row>
    // );
}

export default Home;