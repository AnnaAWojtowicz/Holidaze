import react, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";
import { bookStay } from "../../api/bookStay";
import BookStayModalSuccess from "./BookStayModalSuccess";
import ModalFail from "../ModalFail";
import BookStayCalendar from "./BookStayCalendar";

function BookStayModal({ show, onHide, data, maxGuests, id, onBookingSuccess, onShowVenue }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [formInput, setFormInput] = useState({ guests: '' });
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);
    const [excludeDates, setExcludeDates] = useState([]);

    const [showModalAgain, setShowModalAgain] = useState(false);

    const { bookings } = data || {};
    useEffect(() => {
        console.log(bookings);
        const excludeDates = bookings ? bookings.map((booking) => {
            const dateFrom = new Date(booking.dateFrom);
            const dateTo = new Date(booking.dateTo);
            return [dateFrom, dateTo];
        }).flat() : [];

        setExcludeDates(excludeDates);
    }, [bookings]);

    const handleDateChange = (dates) => {
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
        if (startDate === null || endDate === null) {
            console.error('Please select a date');
            return;
        }
        const guestsToSend = guests !== undefined ? Number(guests) : 1;
        try {
            const venueId = id;
            const dateFrom = startDate.toISOString();
            const dateTo = endDate.toISOString();

            await bookStay({ dateFrom, dateTo, guests: guestsToSend, venueId });

            onHide();
            setShowSuccessModal(true);
            onBookingSuccess();
        } catch (error) {
            console.error(error);
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
                            <Form.Label>Name </Form.Label>
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
                            <Form.Label>Guests</Form.Label>
                            <Form.Control
                                type="number"
                                max={maxGuests}
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
                            <Form.Label>Check-in and check-out dates</Form.Label>
                            <BookStayCalendar
                                data={data}
                                excludeDates={excludeDates}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={handleDateChange}
                            />
                            <Form.Text id="checkInHelpBlock" muted>
                                Please choose a check-in and check-out dates
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
            {showSuccessModal && <BookStayModalSuccess show={showSuccessModal} onHide={() => setShowSuccessModal(false)} onShowVenue={onShowVenue} />}
        </>
    );
}

export default BookStayModal;