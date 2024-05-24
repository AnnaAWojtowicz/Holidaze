import React from "react";
import { Button, Modal } from "react-bootstrap";

function BookStayModalSuccess({ show, onHide, onShowVenue }) {
    const handleClick = () => {
        console.log('handleClick called');
        console.log('onShowVenue:', onShowVenue);
        console.log('onHide:', onHide);
        onShowVenue();
        onHide();
    };

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>Well done!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3 formGroup">Thank you for your booking!</div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="btn btn-outline-success" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="btn btn-outline-success" onClick={handleClick}>
                        Show venue
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BookStayModalSuccess;