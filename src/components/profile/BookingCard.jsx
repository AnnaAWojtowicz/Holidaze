import react from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBookingDetails } from '../../api/bookingDetails';

function BookingCard() {
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const [customerName, setCustomerName] = useState(null);

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
        <Card style={{ width: '18rem' }}>
            <Card.Header>{booking.venue.name}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {customerName}</ListGroup.Item>
                <ListGroup.Item>Email: {booking.customer.email}</ListGroup.Item>
                <ListGroup.Item>
                    <div>Date from: {new Date(booking.dateFrom).toLocaleDateString()}</div>
                    <div>Date to: {new Date(booking.dateTo).toLocaleDateString()}</div>
                </ListGroup.Item>
                <ListGroup.Item>Number of guests: {booking.guests}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default BookingCard;
