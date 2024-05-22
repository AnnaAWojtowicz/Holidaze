import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NoImage from "../img/simon-berger-2JONUbTfN38-unsplash.jpg";
import NumberOfGuests from "./icons/NumberOfGuests";
import StarsRating from "./icons/StarsRating";

function CardHome({ card, redirectAfterDelete }) {
    const { id, name, price, maxGuests, rating, media } = card;
    const shortName = name.length > 30 ? name.substring(0, 30) + '...' : name;


    let img, alt;
    let isImgMissing = false;
    if (media && media.length > 0) {
        img = media[0].url;
        alt = media[0].alt;
    } else {
        img = NoImage;
        alt = "No image available";
        isImgMissing = true;
    }


    return (
        <Card className='cardBorder mx-3'>
            <div className='imgContainer'>
                <Card.Img variant="top" src={img} alt={alt} className='imgCardBorder imgResponsive' />
                {isImgMissing && (
                    <div className="card-img-overlay"> <Card.Text className="noImgText">Sorry, no image was provided</Card.Text></div>
                )}
            </div>
            <Card.Body className='bodyCardBorder'>
                <Card.Title>{shortName}</Card.Title>
                <div>
                    <NumberOfGuests guests={maxGuests} />
                </div>
                <div>
                    <StarsRating rating={rating} />
                </div>
            </Card.Body>
            <Card.Footer className="footerCardBorder d-flex justify-content-between align-items-center">
                <span>${price} / night</span>
                <Link to={`/cardPage/${card.id}`}><Button variant="outline-success">More</Button></Link>
            </Card.Footer>
        </Card>);
}

export default CardHome;