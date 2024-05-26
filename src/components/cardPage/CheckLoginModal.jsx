import react from "react";
import { Modal, Button } from "react-bootstrap";

function CheckLoginModal({ show, handleClose, handleLogin }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='modalHeader'>
                <Modal.Title>You are not logged in.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3 formGroup">You have to log in to book your stay.</div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="btn btn-outline-success" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="btn btn-outline-success" type="submit" onClick={handleLogin}>
                    Log in
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckLoginModal;