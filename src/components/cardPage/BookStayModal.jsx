import react, { useState, useEffect, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";
import { bookStay } from "../../api/bookStay";
import BookStayModalSuccess from "./BookStayModalSuccess";
import ModalFail from "../ModalFail";
import BookStayCalendar from "./BookStayCalendar";

function BookStayModal({ show, onHide, data, onExcludeDatesChange: parentOnExcludeDatesChange, excludeDates }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    const [showModalAgain, setShowModalAgain] = useState(false);

    let excludeDatesArray = excludeDates; // Use a different variable name

    if (!excludeDatesArray) {
        excludeDatesArray = []; // Set to empty array if it's undefined
    }
    // const [checkInDate, setCheckInDate] = useState(null);
    // const [checkOutDate, setCheckOutDate] = useState(null);

    const { bookings } = data || {};


    useEffect(() => {
        const excludeDates = bookings ? bookings.map((booking) => {
            const dateFrom = new Date(booking.dateFrom);
            const dateTo = new Date(booking.dateTo);
            return [dateFrom, dateTo];
        }).flat() : [];

        parentOnExcludeDatesChange(excludeDates);
    }, [bookings, parentOnExcludeDatesChange]);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleHideFail = () => {
        setShowFailModal(false);
    };

    const handleTryAgain = () => {
        setShowModalAgain(true);
        setShowFailModal(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const venueId = data.id; // assuming data is the venue data and it has an id property
            const dateFrom = startDate.toISOString();
            const dateTo = endDate.toISOString();

            await bookStay({ dateFrom, dateTo, guests, venueId });

            onHide();
            setShowSuccessModal(true);
        } catch (error) {
            setShowFailModal(true);
        }
    };



    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton className='modalHeader'>

                    <Modal.Title>Book your stay</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form id="newBookingForm">
                        <Form.Group className="mb-3 formGroup">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                id="inputNameVenue"
                                aria-describedby="nameHelpBlock"
                                className='formControlModal'
                            />
                            <Form.Text id="nameHelpBlock" muted>
                                Please enter your name
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                id="inputEmail"
                                aria-describedby="emailHelpBlock"
                                className='formControlModal'
                            />
                            <Form.Text id="nameHelpBlock" muted>
                                Please enter your email address
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Guests:</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                max=""
                                value={guests}
                                onChange={(event) => setGuests(event.target.value)}
                                id="inputGuestVenue"
                                aria-describedby="guestVenueHelpBlock"
                                className='formControlModal'
                            />
                            <Form.Text id="guestVenueHelpBlock" muted>
                                Please enter the number of guests staying
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Check-in and check-out dates:</Form.Label>
                            <BookStayCalendar data={data} onExcludeDatesChange={parentOnExcludeDatesChange} excludeDates={excludeDates} />
                            <Form.Text id="checkInHelpBlock" muted>
                                Please chose a check-in and check-out dates
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="btn btn-outline-success" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="btn btn-outline-success" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            {showFailModal && <ModalFail show={showFailModal} onHide={handleHideFail} onTryAgain={handleTryAgain} />}
            {showSuccessModal && <BookStayModalSuccess show={showSuccessModal} onHide={() => setShowSuccessModal(false)} />}
        </>
    );
}

export default BookStayModal;