import react from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBookingDetails } from '../../api/bookingDetails';
import { Link } from 'react-router-dom';

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
        <div className="my-5 cardPage">
            <Card className="mx-4 cardBorder cardWidth">
                <Card.Header className='bodyCardBorder'>
                    <Card.Title className="nameCardProfile">{booking.venue.name}</Card.Title></Card.Header>
                <ListGroup variant="flush" className='bodyCardBorder'>
                    <ListGroup.Item>Name: {customerName}</ListGroup.Item>
                    <ListGroup.Item>Email: {booking.customer.email}</ListGroup.Item>
                    <ListGroup.Item>
                        <div>Date from: {new Date(booking.dateFrom).toLocaleDateString()}</div>
                        <div>Date to: {new Date(booking.dateTo).toLocaleDateString()}</div>
                    </ListGroup.Item>
                    <ListGroup.Item>Number of guests: {booking.guests}</ListGroup.Item>
                </ListGroup>
                <Card.Footer className="footerCardBorder d-flex justify-content-between align-items-center">
                    <Link to="/"><Button variant="outline-success">Go Back</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default BookingCard;
