import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Carousel from './Carousel';

function CardPage() {
    return (
        <div className="my-5 cardPage">
            <Card className="mx-4 cardBorder cardWidth">
                <Carousel />
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className='imgCardBorder' /> */}
                <Card.Body className='bodyCardBorder'>
                    <Card.Title>Name</Card.Title>
                    <Card.Text>
                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate metus placerat egestas luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec felis quam, vehicula vel enim ac, rutrum fringilla dui.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bodyCardBorder">
                    <ListGroup.Item>
                        <div>Price</div>
                        <div>maxGuests</div>
                        <div>rating</div></ListGroup.Item>
                    <ListGroup.Item>
                        <div>Location:</div>
                        <div>address</div>
                        <div>city</div>
                        <div>country</div>
                    </ListGroup.Item>
                    <ListGroup.Item><div>meta</div>
                        <div>wifi</div>
                        <div>parking</div>
                        <div>breakfast</div>
                        <div>pets</div>
                    </ListGroup.Item>
                    <ListGroup.Item><div>About owner:</div>
                        <div>name</div>
                        <div>email</div>
                        <div>bio</div>
                        <div>avatar</div>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className=" footerCardBorder d-flex justify-content-between align-items-center">
                    <Link to="/"><Button variant="outline-success">Go Back</Button></Link>
                    <Link to="/cardPage"><Button variant="outline-success">Book Now</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardPage;