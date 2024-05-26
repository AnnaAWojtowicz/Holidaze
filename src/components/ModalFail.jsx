import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ModalFail({ show, onHide, onTryAgain, errorMessage }) {
    const navigate = useNavigate();

    const handleClose = () => {
        onHide();
        navigate('/');
    };

    const handleTryAGain = () => {
        onHide();
        onTryAgain();
    };

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>Oops...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3 formGroup">Sorry, it looks like something went wrong.</div>
                    <div className="mb-3 formGroup">{errorMessage}</div>
                    <div className="mb-3 formGroup">How about trying again?</div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="btn btn-outline-success" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="btn btn-outline-success" onClick={handleTryAGain}>
                        Try again
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalFail;