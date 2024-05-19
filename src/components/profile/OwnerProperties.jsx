
import React, { useEffect, useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardHome from '../CardHome';
import { getUserVenues } from '../../api/getUserVenues';
import NewVenueModal from './NewAndUpdateVenueModal';


function OwnerProperties({ redirectAfterDelate }) {
    const [items, setItems] = useState([]);
    const [showModalNewVenue, setShowModalNewVenue] = useState(false);
    const [newVenueAdded, setNewVenueAdded] = useState(false);

    const handleShowModalNewVenue = () => setShowModalNewVenue(true);
    const handleCloseModalNewVenue = () => setShowModalNewVenue(false);



    useEffect(() => {
        const fetchVenues = async () => {
            try {
                const data = await getUserVenues();
                setItems(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchVenues();
    }, [newVenueAdded]);



    return (
        <div>
            <div className="d-flex justify-content-between align-items-center propertiesTitleAndButton">
                <div><h2>Your properties:</h2></div>
                <Button variant="outline-success" onClick={handleShowModalNewVenue}>Add new</Button>
                <NewVenueModal
                    show={showModalNewVenue}
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
                        <Col key={index} >
                            <CardHome card={item} redirectAfterDelete="/ownerpropertiessite" />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default OwnerProperties;