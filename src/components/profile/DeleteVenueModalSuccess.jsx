import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteVenueModalSuccess(props) {
    const { show, onHide } = props;

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>Ok, then!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3 formGroup">Your property has been now removed from Holidaze.</div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-end">
                    <Button variant="btn btn-outline-success" onClick={onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteVenueModalSuccess;