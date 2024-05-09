import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from "./Carousel";
import NumberOfGuests from "../icons/NumberOfGuests";
import StarsRating from "../icons/StarsRating";
import Location from "./Location";
import Breakfast from "../icons/Breakfast";
import Parking from "../icons/Parking";
import Pets from "../icons/Pets";
import Wifi from "../icons/Wifi";
import Host from "./Host";
import CalendarAvailability from "./CalendarAvailability";



function CardPage({ data }) {
    const { id } = useParams();
    const [cardData, setCardData] = useState([]);
    const [isExcludeDatesEmpty, setIsExcludeDatesEmpty] = useState(false);

    useEffect(() => {
        fetch(`https://v2.api.noroff.dev/holidaze/venues/${id}?_bookings=true`)
            .then((response) => response.json())
            .then((response) => {
                setCardData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);


    const handleExcludeDatesChange = (isEmpty) => {
        setIsExcludeDatesEmpty(isEmpty);
    };

    let hostData;
    if (data?.owner) {
        const { name, email, avatar, bio } = data.owner;
        hostData = { name, email, avatar, bio };
    }


    return (
        <div className="my-5 cardPage">
            <Card className="mx-4 cardBorder cardWidth">
                {cardData ? <Carousel data={cardData} /> : <div>Loading...</div>}

                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className='imgCardBorder' /> */}
                <Card.Body className='bodyCardBorder'>
                    <Card.Title>{cardData?.name}</Card.Title>
                    <Card.Text>{cardData?.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bodyCardBorder">
                    <ListGroup.Item>
                        <div>Price: ${cardData?.price} night / person</div>
                        <NumberOfGuests guests={cardData?.maxGuests} />
                        <StarsRating rating={cardData?.rating} />
                    </ListGroup.Item>
                    <ListGroup.Item>

                        {cardData?.location && (cardData.location?.address || cardData.location?.city || cardData.location?.country) ? (
                            <Location data={cardData} />
                        ) : (<div>
                            <div className="location">Location:</div>
                            <div className="locationDetails">Sorry, no information about the location has been provided</div>
                        </div>
                        )}
                    </ListGroup.Item>
                    <ListGroup.Item><div>This place offers:</div>
                        {cardData?.meta && cardData.meta?.wifi && <Wifi />}
                        {cardData?.meta && cardData.meta?.breakfast && <Breakfast />}
                        {cardData?.meta && cardData.meta?.parking && <divarking />}
                        {cardData?.meta && cardData.meta?.pets && <divets />}
                    </ListGroup.Item>
                    <ListGroup.Item>{hostData ? <Host data={hostData} />
                        : (<div>
                            <div>About host:</div>
                            <div className="host">
                                <div className="hostDetails">Sorry, no information about the host has been provided</div>
                            </div>
                        </div>
                        )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="availability">Availability:</div>
                        <CalendarAvailability data={data} onExcludeDatesChange={handleExcludeDatesChange} />
                        {isExcludeDatesEmpty && (
                            <div className="availabilityDetails">Sorry, no information about the availability has been provided</div>
                        )}
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