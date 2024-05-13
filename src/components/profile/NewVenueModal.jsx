import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { addNewVenue } from "../../api/addNewVenue";
import ModalFail from "../ModalFail";
import NewVenueModalSuccess from "./NewVenueModalSuccess";

function NewVenueModal(props) {
    const [nameVenue, setNameVenue] = useState("");
    const [descriptionVenue, setDescriptionVenue] = useState("");
    const [img1Venue, setImg1Venue] = useState("");
    const [img2Venue, setImg2Venue] = useState("");
    const [img3Venue, setImg3Venue] = useState("");
    const [images, setImages] = useState([]);
    const [guestVenue, setGuestVenue] = useState("");
    const [ratingVenue, setRatingVenue] = useState("");
    const [priceVenue, setPriceVenue] = useState("");
    const [wifiVenue, setWifiVenue] = useState("");
    const [parkingVenue, setParkingVenue] = useState("");
    const [breakfastVenue, setBreakfastVenue] = useState("");
    const [petsVenue, setPetsVenue] = useState("");
    const [addressVenue, setAddressVenue] = useState("");
    const [cityVenue, setCityVenue] = useState("");
    const [countryVenue, setCountryVenue] = useState("");
    const [show, setShow] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    const onHide = () => setShow(false);

    const handleHideFail = () => {
        setShowFailModal(false);
    };

    const handleTryAgain = () => {
        setShow(true);
        setShowFailModal(false);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setShow(false);

        const data = {
            name: nameVenue,
            description: descriptionVenue,
            media: [

                {
                    url: img1Venue,
                    alt: "Property Picture",
                },
                {
                    url: img2Venue,
                    alt: "Property Picture",
                },
                {
                    url: img3Venue,
                    alt: "Property Picture",
                },
            ],
            price: priceVenue,
            maxGuests: guestVenue,
            rating: ratingVenue,
            meta: {
                wifi: wifiVenue,
                parking: parkingVenue,
                breakfast: breakfastVenue,
                pets: petsVenue,
            },
            location:
            {
                address: addressVenue,
                city: cityVenue,
                country: countryVenue,
            },
        };
        try {
            const response = await addNewVenue(data);
            console.log(response);
            if (response.status === 200) {
                onHide();
                setShowSuccessModal(true);
            } else {
                onHide();
                setShowFailModal(true);
            }
        } catch (error) {
            console.error("Error occurred while adding new venue: ", error);
            onHide();
            setShowFailModal(true);
        }

    }


    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton className='modalHeader'>

                    <Modal.Title>Create a new venue</Modal.Title>


                </Modal.Header>
                <Modal.Body>
                    <Form id="newVenueForm" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 formGroup">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                type="text"
                                value={nameVenue}
                                onChange={(event) => setNameVenue(event.target.value)}
                                id="inputNameVenue"
                                aria-describedby="nameHelpBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="nameHelpBlock" muted>
                                Please enter the name of your property
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                type="text"
                                value={descriptionVenue}
                                onChange={(event) => setDescriptionVenue(event.target.value)}
                                id="inputPropertyDesription"
                                aria-describedby="propertyDesriptionHelpBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="emailHelpBlock" muted>
                                Describe your property
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Add pictures of your property (max. 3)</Form.Label>
                            <Form.Control
                                type="text"
                                value={img1Venue}
                                onChange={(event) => setImg1Venue(event.target.value)}
                                id="inputPropertyImg1"
                                aria-describedby="propertyImg1Block"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Control
                                type="text"
                                value={img2Venue}
                                onChange={(event) => setImg2Venue(event.target.value)}
                                id="inputPropertyImg2"
                                aria-describedby="propertyImg2Block"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Control
                                type="text"
                                value={img3Venue}
                                onChange={(event) => setImg3Venue(event.target.value)}
                                id="inputPropertyImg3"
                                aria-describedby="propertyImg3Block"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="propertyImg3Block" muted>
                                Please enter your photo URL
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Guests:</Form.Label>
                            <Form.Control
                                type="number"
                                value={guestVenue}
                                onChange={(event) => setGuestVenue(event.target.value)}
                                id="inputGuestVenue"
                                aria-describedby="guestVenueHelpBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="guestVenueHelpBlock" muted>
                                Please enter a maxium number of guests
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Rating:</Form.Label>
                            <Form.Control
                                type="number"
                                value={ratingVenue}
                                onChange={(event) => setRatingVenue(event.target.value)}
                                id="inputRatingVenue"
                                aria-describedby="ratingHelpBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="ratinVenueHelpBlock" muted>
                                Please enter a rating for your property (1-5)
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type="number"
                                value={priceVenue}
                                onChange={(event) => setPriceVenue(event.target.value)}
                                id="inputPriceVenue"
                                aria-describedby="priceVenueHelpBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="guestVenueHelpBlock" muted>
                                Please enter a price per night
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup">
                            <Form.Label>Your property offers: </Form.Label>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Wi-fi"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        checked={wifiVenue}
                                        onChange={(event) => setWifiVenue(event.target.checked)}
                                    />
                                    <Form.Check
                                        inline
                                        label="parking"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                        checked={parkingVenue}
                                        onChange={(event) => setParkingVenue(event.target.checked)}
                                    />
                                    <Form.Check
                                        inline
                                        label="Breakfast"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                        checked={breakfastVenue}
                                        onChange={(event) => setBreakfastVenue(event.target.checked)}
                                    />
                                    <Form.Check
                                        inline
                                        label="Pets"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-4`}
                                        checked={petsVenue}
                                        onChange={(event) => setPetsVenue(event.target.checked)}
                                    />
                                </div>
                            ))}
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Location: </Form.Label>
                            <Form.Control
                                type="text"
                                value={addressVenue}
                                onChange={(event) => setAddressVenue(event.target.value)}
                                id="inputAddressVenue"
                                aria-describedby="addressVenueBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="addressVenueBlock" muted>
                                Please enter an address
                            </Form.Text>
                            <Form.Control
                                type="text"
                                value={cityVenue}
                                onChange={(event) => setCityVenue(event.target.value)}
                                id="inputCityVenue"
                                aria-describedby="cityVenueBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="cityVenueBlock" muted>
                                Please enter a city
                            </Form.Text>
                            <Form.Control
                                type="text"
                                value={countryVenue}
                                onChange={(event) => setCountryVenue(event.target.value)}
                                id="inputCountryVenue"
                                aria-describedby="countryVenueBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Text id="countryVenueBlock" muted>
                                Please enter a country
                            </Form.Text>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="btn btn-outline-success" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="btn btn-outline-success" type="submit" form='newVenueForm' onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            {showFailModal && <ModalFail show={showFailModal} onHide={handleHideFail} onTryAgain={handleTryAgain} />}
            {showSuccessModal && <NewVenueModalSuccess />}
        </>
    );
}

export default NewVenueModal;