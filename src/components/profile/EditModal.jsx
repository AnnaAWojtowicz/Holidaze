import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";


function EditModal({ show, onHide, onEdit, userData }) {

    const [bio, setBio] = useState(userData && userData.data && userData.data.bio ? userData.data.bio : "");
    const [avatar, setAvatar] = useState(userData && userData.data && userData.data.avatar ? userData.data.avatar.url : "");

    useEffect(() => {
        if (userData && userData.data) {
            if (userData.data.bio) {
                setBio(userData.data.bio);
            }
            if (userData.data.avatar && userData.data.avatar.url) {
                setAvatar(userData.data.avatar.url);
            }
        }
    }, [userData]);


    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(bio, avatar);
        setBio("");
        setAvatar("");
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton className='modalHeader'>
                <Modal.Title>Edit your profile</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formAvatar" className="mb-3 formGroup">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control
                            type="text"
                            value={avatar}
                            onChange={(event) => setAvatar(event.target.value)}
                            className='formControlModal'
                            autoFocus
                        />
                        <Form.Text muted>
                            Please enter your new avatar URL
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBio" className="mb-3 formGroup">
                        <Form.Label>About you</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={bio}
                            onChange={(event) => setBio(event.target.value)}
                            className='formControlModal'
                            autoFocus
                        />
                        <Form.Text muted>
                            Please edit or enter new text
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="btn btn-outline-success" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="btn btn-outline-success" type="submit">
                    Save
                </Button>
            </Modal.Footer>



        </Modal >
    );
}

export default EditModal;