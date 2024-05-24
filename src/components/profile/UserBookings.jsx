
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardHome from '../CardHome';
import { getUserBookings } from "../../api/getUserBookings";

function OwnerBookings({ redirectAfterDelate }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await getUserBookings();
                setItems(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBookings();
    }, []);

    return (
        <Container fluid className="ownerPropertiesContainer">
            <div className="d-flex justify-content-between align-items-center propertiesTitleAndButton">
                <div><h2>Your bookings:</h2></div>
            </div>
            {items.length === 0 && <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3rem 0' }}>Sorry, no results found</h1>}
            <Row xs={1} md={2} lg={3} className="g-4 my-3 mx-2">
                {items.map((booking, index) => {
                    const img = booking.venue.media && booking.venue.media.length > 0 ? booking.venue.media[0].url : '';
                    const alt = booking.venue.media && booking.venue.media.length > 0 ? booking.venue.media[0].alt : '';
                    return (
                        <Col key={index} >
                            <CardHome img={img} alt={alt} card={booking.venue} redirectAfterDelete="/ownerpropertiessite" />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default OwnerBookings;