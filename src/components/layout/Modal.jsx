import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonPrimary from '../Button';


function ModalMain({ showModalLogin, showModalSignup, handleCloseLogin, handleCloseSignup, isSignIn, register, showModal, handleClose, name, setName, email, setEmail, password, setPassword, role, setRole, loginUser }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        await register(name, email, password, role);
        setName('');
        setEmail('');
        setPassword('');
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            await loginUser(email, password);
            handleCloseLogin();
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Modal show={isSignIn ? showModalLogin : showModalSignup} onHide={isSignIn ? handleCloseLogin : handleCloseSignup}>
                <Modal.Header closeButton className='modalHeader'>
                    {!isSignIn ? (
                        <Modal.Title>Create an account</Modal.Title>
                    ) : (
                        <Modal.Title>Login</Modal.Title>
                    )}
                </Modal.Header>
                <Modal.Body>
                    <Form id="registerAndLoginForm" onSubmit={isSignIn ? handleLoginSubmit : handleSubmit}>
                        {!isSignIn && (
                            <Form.Group className="mb-3 formGroup">
                                <Form.Label>Sign-up as</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Guest"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            checked={role === 'guest'}
                                            onChange={() => setRole('guest')}
                                        />
                                        <Form.Check
                                            inline
                                            label="Manager"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            checked={role === 'manager'}
                                            onChange={() => setRole('manager')}
                                        />

                                    </div>
                                ))}
                            </Form.Group>
                        )}

                        {!isSignIn && (
                            <Form.Group className="mb-3 formGroup">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name} onChange={(event) => setName(event.target.value)}
                                    id="inputName"
                                    aria-describedby="nameHelpBlock"
                                    className='formControlModal'
                                    autoFocus
                                />
                                <Form.Text id="emailHelpBlock" muted>
                                    Please enter your name
                                </Form.Text>
                            </Form.Group>
                        )}

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email} onChange={(event) => setEmail(event.target.value)}
                                id="inputEmail"
                                aria-describedby="emailHelpBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            {!isSignIn && (
                                <Form.Text id="emailHelpBlock" muted>
                                    Your email address must have the following format: name@stud.noroff.no
                                </Form.Text>
                            )}
                            {/* <Form.Text id="passwordHelpBlock" muted>
                                Incorrect email. Please try again.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3 formGroup" >
                            <Form.Label>Enter your password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password} onChange={(event) => setPassword(event.target.value)}
                                id="inputPassword"
                                aria-describedby="passwordHelpBlock"
                                className='formControlModal'
                                autoFocus
                            />
                            {!isSignIn && (
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long, contain letters and numbers,
                                    and must not contain spaces, special characters, or emoji.
                                </Form.Text>
                            )}
                            {/* <Form.Text id="passwordHelpBlock" muted>
                                Incorrect password. Please try again.
                            </Form.Text> */}
                        </Form.Group>




                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="btn btn-outline-success" onClick={isSignIn ? handleCloseLogin : handleCloseSignup}>
                        Close
                    </Button>
                    <Button variant="btn btn-outline-success" type="submit" form='registerAndLoginForm'>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMain;