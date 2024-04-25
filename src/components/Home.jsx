import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <Row xs={1} md={2} lg={4} className="g-4 my-5 mx-2">
            {Array.from({ length: 6 }).map((_, idx) => (
                <Col key={idx}>
                    <Card className='cardBorder'>
                        <Card.Img variant="top" src="holder.js/100px160" className='imgCardBorder' />
                        <Card.Body className='bodyCardBorder'>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="footerCardBorder d-flex justify-content-between align-items-center">
                            <span>Price</span>
                            <Button variant="outline-success">More</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Home;