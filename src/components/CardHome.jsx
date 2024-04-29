import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ExampleImage from "../img/clement-proust-bDGgOlguqJA-unsplash.jpg";

function CardHome() {
    return (<Card className='cardBorder mx-3'>
        {/* <Card className='cardBorder flex-grow-1 d-flex flex-column overflow--hidden'> */}
        <div className='imgContainer'>
            <Card.Img variant="top" src={ExampleImage} className='imgCardBorder imgResponsive' />
        </div>
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
            <Link to="/cardPage"><Button variant="outline-success">More</Button></Link>
        </Card.Footer>
    </Card>);
}

export default CardHome;