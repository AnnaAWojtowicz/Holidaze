import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




function NewVenueModalSuccess(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>Well done!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3 formGroup">Rest assured, your guests will be amazed by your place!</div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="btn btn-outline-success" >
                        Close
                    </Button>
                    <Button variant="btn btn-outline-success" onClick={() => setShow(false)}>
                        Show venue
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewVenueModalSuccess;