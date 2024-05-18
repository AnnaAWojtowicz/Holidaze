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
import DeleteVenueModal from "../profile/DeleteVenueModal";
import { useNavigate } from "react-router-dom";
import BookingModalDetails from "../profile/BookingModalDetails";

function CardPage({ card, redirectAfterDelete }) {
    const { id } = useParams();
    const [cardData, setCardData] = useState([]);
    const [isExcludeDatesEmpty, setIsExcludeDatesEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showNewAndUpdateVenueModal, setShowNewAndUpdateVenueModal] = useState(false);
    const [showDeleteVenueModal, setShowDeleteVenueModal] = useState(false);
    const [chosenBooking, setChosenBooking] = useState(null);
    const navigate = useNavigate();
    const [showBookingModalDetails, setShowBookingModalDetails] = useState(false);

    const handleEditClick = () => {
        setShowNewAndUpdateVenueModal(true);
    };

    const handleCloseNewAndUpdateVenueModal = () => {
        setShowNewAndUpdateVenueModal(false);
    };

    const handleDeleteClick = () => {
        setShowDeleteVenueModal(true);
    };

    const handleShowBookingModalDetails = (booking) => {
        console.log(booking.id);
        setChosenBooking(booking);
        setShowBookingModalDetails(true);
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
                        {/* {isExcludeDatesEmpty && (
                            <div className="availabilityDetails">Sorry, no information about the availability has been provided</div>
                        )} */}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="bookings">Bookings:</div>
                        {
                            (() => {
                                const today = new Date();
                                const pastBookings = cardData.bookings.filter(booking => new Date(booking.dateTo) < today);
                                const ongoingBookings = cardData.bookings.filter(booking => new Date(booking.dateFrom) <= today && new Date(booking.dateTo) >= today);
                                const upcomingBookings = cardData.bookings.filter(booking => new Date(booking.dateFrom) > today);

                                const renderBookings = (bookings) => {
                                    return bookings.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom)).map((booking, index) => {
                                        return (
                                            <div key={index} className="bookingsBorder d-flex justify-content-between align-items-center">
                                                <div>
                                                    <div className="bookingsDetails">From: {new Date(booking.dateFrom).toLocaleDateString()}</div>
                                                    <div className="bookingsDetails">To: {new Date(booking.dateTo).toLocaleDateString()}</div>
                                                </div>
                                                <Button className="bookingButton" variant="outline-success" onClick={() => handleShowBookingModalDetails(booking)}>Show more</Button>
                                            </div>
                                        );
                                    });
                                };

                                return (
                                    <>
                                        {pastBookings.length > 0 && (
                                            <>
                                                <div className="bookingsDetails">Past Bookings:</div>
                                                {renderBookings(pastBookings)}
                                            </>
                                        )}
                                        {ongoingBookings.length > 0 && (
                                            <>
                                                <div className="bookingsDetails">Ongoing Bookings:</div>
                                                {renderBookings(ongoingBookings)}
                                            </>
                                        )}
                                        {upcomingBookings.length > 0 && (
                                            <>
                                                <div className="bookingsDetails">Upcoming Bookings:</div>
                                                {renderBookings(upcomingBookings)}
                                            </>
                                        )}
                                    </>
                                );
                            })()
                        }
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className=" footerCardBorder d-flex justify-content-between align-items-center">
                    <Link to="/"><Button variant="outline-success">Go Back</Button></Link>
                    {currentUserName === cardData?.owner?.name ? (
                        <>
                            <Button variant="outline-success" onClick={handleEditClick}>Edit</Button>
                            <Button variant="outline-success" onClick={handleDeleteClick}>Delete</Button>
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
                <DeleteVenueModal
                    show={showDeleteVenueModal}
                    onHide={() => setShowDeleteVenueModal(false)}
                    cardData={cardData}
                    redirectPath={() => navigate(-1)}
                />
                {chosenBooking && (
                    <BookingModalDetails
                        show={showBookingModalDetails}
                        onHide={() => setShowBookingModalDetails(false)}
                        booking={chosenBooking}
                        id={chosenBooking?.id}
                    />
                )}
            </Card>
        </div>

    );
}

export default CardPage;