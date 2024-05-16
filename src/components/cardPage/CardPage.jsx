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
import { apiVenuesPath } from "../../api/constants";
import NewAndUpdateVenueModal from "../profile/NewAndUpdateVenueModal";


function CardPage() {
    const { id } = useParams();
    const [cardData, setCardData] = useState([]);
    const [isExcludeDatesEmpty, setIsExcludeDatesEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showNewAndUpdateVenueModal, setShowNewAndUpdateVenueModal] = useState(false);

    const handleEditClick = () => {
        setShowNewAndUpdateVenueModal(true);
    };

    const handleCloseNewAndUpdateVenueModal = () => {
        setShowNewAndUpdateVenueModal(false);
    };

    useEffect(() => {
        fetch(`${apiVenuesPath}/${id}?_owner=true&_bookings=true`)
            .then((response) => response.json())
            .then((response) => {
                setCardData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, [id]);


    const handleExcludeDatesChange = (isEmpty) => {
        setIsExcludeDatesEmpty(isEmpty);
    };


    const currentUserName = localStorage.getItem('userName');

    if (isLoading) {
        return <div>Loading...</div>;
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
                        <div>Price: ${cardData?.price} / night</div>
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
                        {cardData?.meta && cardData.meta?.parking && <Parking />}
                        {cardData?.meta && cardData.meta?.pets && <Pets />}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {cardData?.owner ? <Host userData={cardData.owner} />
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
                        <CalendarAvailability data={cardData} onExcludeDatesChange={handleExcludeDatesChange} />
                        {isExcludeDatesEmpty && (
                            <div className="availabilityDetails">Sorry, no information about the availability has been provided</div>
                        )}
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className=" footerCardBorder d-flex justify-content-between align-items-center">
                    <Link to="/"><Button variant="outline-success">Go Back</Button></Link>
                    {currentUserName === cardData.owner.name ? (
                        <>
                            <Button variant="outline-success" onClick={handleEditClick}>Edit</Button>
                            <Button variant="outline-success">Delete</Button>
                        </>
                    ) : (
                        <Link to="/cardPage"><Button variant="outline-success">Book Now</Button></Link>
                    )}
                </Card.Body>

                <NewAndUpdateVenueModal
                    show={showNewAndUpdateVenueModal}
                    onHide={() => setShowNewAndUpdateVenueModal(false)}
                    cardData={cardData}
                    isEditing={true}

                />
            </Card>
        </div>

    );
}

export default CardPage;