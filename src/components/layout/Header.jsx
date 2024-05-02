import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from "./Calendar";
import "react-datepicker/dist/react-datepicker.css";

import ModalMain from "./Modal";
import ButtonPrimary from "../Button";



function Header() {
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalSignup, setShowModalSignup] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);

    const handleShowLogin = () => {
        setIsSignIn(true);
        setShowModalLogin(true)
    };
    const handleCloseLogin = () => setShowModalLogin(false);

    const handleShowSignup = () => {
        setIsSignIn(false);
        setShowModalLogin(true)
    };
    const handleCloseSignup = () => setShowModalLogin(false);

    return (
        <Navbar collapseOnSelect expand="lg" className="navFont d-flex justify-content-between" style={{ padding: '1rem' }}>

            <Navbar.Brand href="#home" className="logo">Holidaze</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <div className="mx-auto py-md">
                    <Form className="d-flex justify-content-center align-items-center">
                        <Form.Control
                            type="search"
                            placeholder="Where?"
                            className="mr-sm-2 form-control-sm form-control whereForm"
                            aria-label="Where?"
                        />
                        <Calendar />
                        <Button variant="outline-success" className="btnSearch">
                            <i className="bi bi-search loop"></i>
                        </Button>
                    </Form>
                </div>
                <Nav className="ml-auto">
                    <ButtonPrimary className="modalsInNav" name="Login" onClick={handleShowLogin} type="button" />
                    <ModalMain showModal={showModalLogin} handleClose={handleCloseLogin} isSignIn={isSignIn} />
                    <ButtonPrimary name="Sign-up" onClick={handleShowSignup} type="button" />
                    <ModalMain showModal={showModalSignup} handleClose={handleCloseSignup} isSignIn={isSignIn} />
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;

{/* <Navbar collapseOnSelect expand="lg" className="navFont">
<Container>
    <Navbar.Brand href="#home" className="logo">Holidaze</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown>

        </Nav>
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="ml-auto">
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Sign-up
            </Nav.Link>
        </Nav>

    </Navbar.Collapse>
</Container>
</Navbar> */}