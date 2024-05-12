import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function NewVenueModal({ show, onHide }) {


    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton className='modalHeader'>

                    <Modal.Title>Create a new venue</Modal.Title>


                </Modal.Header>
                <Modal.Body>
                    <Form id="newVenueForm">
                        <Form.Group className="mb-3 formGroup">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                type="text"
                                value=""
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
                                value=""
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
                                value=""
                                id="inputPropertyImg1"
                                aria-describedby="propertyImg1Block"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Control
                                type="text"
                                value=""
                                id="inputPropertyImg2"
                                aria-describedby="propertyImg2Block"
                                className='formControlModal'
                                autoFocus
                            />
                            <Form.Control
                                type="text"
                                value=""
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
                                value=""
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
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type="number"
                                value=""
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
                                    />
                                    <Form.Check
                                        inline
                                        label="parking"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Breakfast"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Pets"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-4`}
                                    />
                                </div>
                            ))}
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Location: </Form.Label>
                            <Form.Control
                                type="text"
                                value=""
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
                                value=""
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
                                value=""
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
                    <Button variant="btn btn-outline-success" type="submit" form='newVenueForm'>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewVenueModal;