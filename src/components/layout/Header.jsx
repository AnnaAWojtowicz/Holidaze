import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Pagination } from "react-bootstrap";

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navFont" style={{ padding: '1rem' }}>

            <Navbar.Brand href="#home" className="logo">Holidaze</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
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
                    </NavDropdown> */}
                </Nav>

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Where?"
                        // className="me-2"
                        aria-label="Where?"
                    />
                    <Form.Control
                        type="date"
                        placeholder="Check In"
                        // className="me-2"
                        aria-label="Check In"
                    />
                    <Form.Control
                        type="date"
                        placeholder="Check Out"
                        // className="me-2"
                        aria-label="Check out"
                    />
                    <Button variant="outline-success">
                        <i className="bi bi-search"></i>
                    </Button>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="#deets">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Sign-up
                    </Nav.Link>
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