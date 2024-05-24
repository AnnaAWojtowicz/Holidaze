
import React, { useEffect, useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardHome from '../CardHome';
import { getUserVenues } from '../../api/getUserVenues';
import NewAndUpdateVenueModal from './NewAndUpdateVenueModal';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";

function OwnerProperties({ redirectAfterDelate }) {
    const { name } = useParams();
    const userName = localStorage.getItem('userName');
    const [items, setItems] = useState([]);
    const [showModalNewVenue, setShowModalNewVenue] = useState(false);
    const [newVenueAdded, setNewVenueAdded] = useState(false);
    const handleShowModalNewVenue = () => setShowModalNewVenue(true);
    const handleCloseModalNewVenue = () => setShowModalNewVenue(false);

    useEffect(() => {
        const fetchVenues = async () => {
            console.log(name);
            try {
                const data = await getUserVenues(name);
                setItems(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchVenues();
    }, [newVenueAdded, name]);

    return (
        <Container fluid className="ownerPropertiesContainer">
            <div className="d-flex justify-content-between align-items-center propertiesTitleAndButton">
                <div><h2>Your properties:</h2></div>
                {name === userName && (
                    <Button variant="outline-success" onClick={handleShowModalNewVenue}>Add new</Button>
                )}
                <NewAndUpdateVenueModal
                    show={showModalNewVenue}
                    isEditing={false}
                    // show={true}
                    onHide={handleCloseModalNewVenue}
                    onNewVenueAdded={() => setNewVenueAdded(prevState => !prevState)}
                />
            </div>
            {items.length === 0 && <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3rem 0' }}>Sorry, no results found</h1>}
            <Row xs={1} md={2} lg={3} className="g-4 my-3 mx-2">
                {items.map((item, index) => {
                    const img = item.media && item.media.length > 0 ? item.media[0].url : '';
                    const alt = item.media && item.media.length > 0 ? item.media[0].alt : '';
                    return (
                        <Col key={index} xs={12} md={6} lg={4} >
                            <CardHome card={item} redirectAfterDelete="/ownerpropertiessite" />
                        </Col>
                    );
                })}
                {items.length < 3 && [...Array(3 - items.length)].map((_, index) => (
                    <Col key={index + items.length} xs={12} md={6} lg={4} >
                        <div className="invisible">
                            <CardHome card={{ id: "dummy" }} redirectAfterDelete="/ownerpropertiessite" />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default OwnerProperties;