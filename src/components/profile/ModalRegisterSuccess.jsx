import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ModalMain from "../layout/Modal";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ModalRegisterSuccess({ show, onHide, role, setShowModalLogin, setIsSignIn }) {
    const navigate = useNavigate();

    const handleClose = () => {
        onHide();
        navigate('/');
    };

    const handleLogin = () => {
        onHide();
        setShowModalLogin(true);
        setIsSignIn(true);
    };

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>Thank you for signing up!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3 formGroup">Your are now registered as {role === "manager" ? "manager" : "guest"}.</div>
                    <div className="mb-3 formGroup">Please log in.</div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="btn btn-outline-success" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="btn btn-outline-success" onClick={handleLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalRegisterSuccess;