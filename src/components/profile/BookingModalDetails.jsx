import react from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBookingDetails } from '../../api/bookingDetails';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function BookingModalDetails({ show, onHide, id }) {
    // const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const [customerName, setCustomerName] = useState(null);

    const handleClose = () => {
        onHide();
    };

    useEffect(() => {
        getBookingDetails(id)
            .then(response => {
                const name = response.data.customer.name;
                console.log(name);
                setCustomerName(name);
                setBooking(response.data);
            })
            .catch(error => {
                console.error("Error fetching booking details:", error);
            });
    }, [id]);

    if (!booking) {
        return null;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='modalHeader'>
                <Modal.Title>{booking.venue.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3 formGroup">Booked by: {customerName}</div>
                <div className="mb-3 formGroup">Email: {booking.customer.email}</div>
                <div>
                    <div className="mb-3 formGroup">Booked from: {new Date(booking.dateFrom).toLocaleDateString()}</div>
                    <div className="mb-3 formGroup">Booked to: {new Date(booking.dateTo).toLocaleDateString()}</div>
                </div>
                <div className="mb-3 formGroup">Number of guests: {booking.guests}</div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="btn btn-outline-success" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BookingModalDetails;
