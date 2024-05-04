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

function CardPage() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://v2.api.noroff.dev/holidaze/venues/${id}`)
            .then((response) => response.json())
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    let hostData;
    if (data && data.owner) {
        const { name, email, avatar, bio } = data.owner;
        const hostData = { name, email, avatar, bio };
    }
    return (
        <div className="my-5 cardPage">
            <Card className="mx-4 cardBorder cardWidth">
                <Carousel />
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className='imgCardBorder' /> */}
                <Card.Body className='bodyCardBorder'>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bodyCardBorder">
                    <ListGroup.Item>
                        <p>Price: ${data.price} night / person</p>
                        <NumberOfGuests guests={data.maxGuests} />
                        <StarsRating rating={data.rating} /></ListGroup.Item>
                    <ListGroup.Item>

                        {data.location && (data.location.address || data.location.city || data.location.country) ? (
                            <Location data={data} />
                        ) : (<div>
                            <p className="location">Location:</p>
                            <p className="locationDetails">Sorry, no information about the location has been provided</p>
                        </div>
                        )}
                    </ListGroup.Item>
                    <ListGroup.Item><p>This place offers:</p>
                        {data.meta && data.meta.wifi && <Wifi />}
                        {data.meta && data.meta.breakfast && <Breakfast />}
                        {data.meta && data.meta.parking && <Parking />}
                        {data.meta && data.meta.pets && <Pets />}
                    </ListGroup.Item>
                    <ListGroup.Item>{hostData ? <Host data={hostData} />
                        : (<div>
                            <p>About host:</p>
                            <div className="host">
                                <p className="hostDetails">Sorry, no information about the host has been provided</p>
                            </div>
                        </div>
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