import React, { useEffect, useState, useCallback } from "react";
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
import CheckLoginModal from "./CheckLoginModal"
import BookStayModal from "./BookStayModal";
import ModalMain from "../layout/Modal";

function CardPage({ card, redirectAfterDelete }) {
    const { id } = useParams();
    const [cardData, setCardData] = useState([]);
    const [isExcludeDatesEmpty, setIsExcludeDatesEmpty] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showNewAndUpdateVenueModal, setShowNewAndUpdateVenueModal] = useState(false);
    const [showDeleteVenueModal, setShowDeleteVenueModal] = useState(false);
    const [chosenBooking, setChosenBooking] = useState(null);
    const navigate = useNavigate();
    const [showBookingModalDetails, setShowBookingModalDetails] = useState(false);
    const [showModalMain, setShowModalMain] = useState(false);
    const [excludeDates, setExcludeDates] = useState([]);
    const currentUserName = localStorage.getItem('userName');
    const isLoggedIn = Boolean(currentUserName);
    const [showCheckLoginModal, setShowCheckLoginModal] = useState(!isLoggedIn);
    const [showBookStayModal, setShowBookStayModal] = useState(false);
    const [bookingsData, setBookingsData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [showBookStayModalSuccess, setShowBookStayModalSuccess] = useState(false);

    useEffect(() => {
        fetchBookingsData(id);
    }, [refresh]);

    const fetchBookingsData = async (id) => {
        const response = await fetch(`${apiVenuesPath}/${id}?_owner=true&_bookings=true`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBookingsData(data);
    };

    const handleShowVenue = () => {
        setRefresh(!refresh);
    };

    const handleExcludeDatesChange = useCallback((newExcludeDates) => {
        setExcludeDates(newExcludeDates);
    }, []);

    const handleCloseCheckLoginModal = () => {
        setShowCheckLoginModal(false);
    };

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
        setChosenBooking(booking);
        setShowBookingModalDetails(true);
    };

    const handleCheckLoginModal = () => {
        const currentUserName = localStorage.getItem('userName');
        if (currentUserName) {
            setShowBookStayModal(true);
        } else {
            setShowCheckLoginModal(true);
        }
    };

    const handleOpenLoginModal = () => {
        setShowCheckLoginModal(false);
        setShowModalMain(true);
    };

    useEffect(() => {
        fetch(`${apiVenuesPath}/${id}?_owner=true&_bookings=true`)
            .then((response) => response.json())
            .then((response) => {
                setCardData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setIsLoading(false);
            });
    }, [id, refresh]);

    const handleBookingSuccess = () => {
        setRefresh(!refresh);
        setShowBookStayModalSuccess(true);
    };

    const handleShowVenueClick = () => {
        setShowBookStayModalSuccess(false);
        setRefresh(prevState => !prevState);
    };


    if (isLoading) {
        return <div>Loading...</div>;
    }

    const renderBookingsCustomer = (booking) => {
        return (
            <div key={`customer-booking-${booking.id}`} className="bookingsBorder d-flex justify-content-between align-items-center">
                <div>
                    <div className="bookingsDetails">From: {new Date(booking.dateFrom).toLocaleDateString()}</div>
                    <div className="bookingsDetails">To: {new Date(booking.dateTo).toLocaleDateString()}</div>
                </div>
                <Button className="bookingButton" variant="outline-success" onClick={() => handleShowBookingModalDetails(booking)}>Show more</Button>
            </div>
        );
    };

    const renderBookings = () => {
        const bookings = cardData?.bookings || [];
        const today = new Date();
        const pastBookings = bookings.filter(booking => new Date(booking.dateTo) < today);
        const ongoingBookings = bookings.filter(booking => new Date(booking.dateFrom) <= today && new Date(booking.dateTo) >= today);
        const upcomingBookings = bookings.filter(booking => new Date(booking.dateFrom) > today);

        const render = (bookings) => {
            if (!bookings) {
                return null;
            }
            return bookings.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom)).map((booking, index) => {
                return (
                    <div key={`booking-${booking.id}`} className="bookingsBorder d-flex justify-content-between align-items-center">
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
                {pastBookings?.length > 0 && (
                    <>
                        <div className="bookingsDetails">Past bookings:</div>
                        {render(pastBookings)}
                    </>
                )}
                {ongoingBookings?.length > 0 && (
                    <>
                        <div className="bookingsDetails">Ongoing bookings:</div>
                        {render(ongoingBookings)}
                    </>
                )}
                {upcomingBookings?.length > 0 && (
                    <>
                        <div className="bookingsDetails">Upcoming bookings:</div>
                        {render(upcomingBookings)}
                    </>
                )}
            </>
        );
    };

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
                    <ListGroup.Item>
                        <div>This place offers:</div>
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
                        <CalendarAvailability data={cardData} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {currentUserName === cardData?.owner?.name && (
                            <>
                                <div className="bookings">Bookings:</div>
                                {renderBookings()}
                            </>
                        )}
                        {cardData?.bookings?.some(booking => currentUserName === booking.customer.name) && (
                            <div>
                                <div className="bookings">Your bookings:</div>
                                {cardData.bookings.map((booking) => {
                                    if (currentUserName === booking.customer.name) {
                                        return renderBookingsCustomer(booking);
                                    }
                                    return null;
                                })}
                            </div>
                        )}
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
                        <Button variant="outline-success" onClick={handleCheckLoginModal}>Book Now</Button>
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
                {currentUserName && (
                    <BookStayModal
                        data={cardData}
                        show={showBookStayModal}
                        onHide={() => setShowBookStayModal(false)}
                        excludeDates={excludeDates}
                        maxGuests={cardData?.maxGuests}
                        id={cardData?.id}
                        onBookingSuccess={handleBookingSuccess}
                        onShowVenue={handleShowVenueClick}
                    />
                )}
                <CheckLoginModal show={showCheckLoginModal} handleClose={handleCloseCheckLoginModal} handleLogin={handleOpenLoginModal} />
                <ModalMain show={showModalMain} handleClose={() => setShowModalMain(false)} isSignIn={true} />
            </Card>
        </div>
    );
}

export default CardPage;