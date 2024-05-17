import React from "react";
import CardPage from "../cardPage/CardPage";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import DeleteVenueModalSuccess from "./DeleteVenueModalSuccess";
import ModalFail from "../ModalFail";
import { deleteVenue } from "../../api/deleteVenue";
import { useNavigate } from "react-router-dom";


function DeleteVenueModal(props) {
    const { redirectPath } = props;
    const [showDeleteVenueSuccessModal, setShowDeleteVenueSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);
    const [show, setShow] = useState(false);
    const onHide = () => setShow(false);
    const navigate = useNavigate();



    const handleHideFail = () => {
        setShowFailModal(false);
    };

    const handleTryAgain = () => {
        setShow(true);
        setShowFailModal(false);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        onHide();

        if (!props.cardData) {
            console.error('cardData is undefined');
            return;
        }

        try {
            await deleteVenue(props.cardData.id);
            props.onHide();
            setShowDeleteVenueSuccessModal(true);
            console.log('redirectPath:', redirectPath);
            console.log('navigate function:', navigate);
            if (typeof redirectPath === 'function') {
                redirectPath();
            } else {
                console.log('Navigating to:', redirectPath);
                navigate(redirectPath);
                console.log('Navigation should have occurred');
            }

        } catch (error) {
            props.onHide();
            setShowFailModal(true);
        }
    }


    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>Delete this property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3 formGroup">Are you sure you want to remove this property?</div>
                    <div className="mb-3 formGroup">If you do, all its data will be permanently deleted.</div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="btn btn-outline-success" onClick={props.onHide}>Close</Button>
                    <Button variant="btn btn-outline-success" type="submit" onClick={handleSubmit}>Delete</Button>
                </Modal.Footer>
            </Modal>
            {showFailModal && <ModalFail show={showFailModal} onHide={handleHideFail} onTryAgain={handleTryAgain} />}
            {showDeleteVenueSuccessModal && <DeleteVenueModalSuccess show={showDeleteVenueSuccessModal} onHide={() => setShowDeleteVenueSuccessModal(false)} />}
        </div>
    );
}

export default DeleteVenueModal;