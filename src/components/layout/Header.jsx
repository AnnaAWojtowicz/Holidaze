import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from "./Calendar";
import "react-datepicker/dist/react-datepicker.css";

import ModalMain from "./Modal";
import ButtonPrimary from "../Button";
import SearchForm from "./SearchForm";
import { register } from "../../api/register";
import ModalRegisterSuccess from "../profile/ModalRegisterSuccess";
import { login } from "../../api/login";
import HeaderStartPoint from "./HeaderStartPoint";
import HeaderAfterLogin from "./HeaderAfterLogin";

function Header() {

    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalSignup, setShowModalSignup] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('guest');


    const registerUser = async (name, email, password, role) => {
        try {
            const data = await register(name, email, password, role);
            setRole(role);
            setShowModalSignup(false);
            setShowSuccessModal(true);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    };



    const handleShowLogin = () => {
        setIsSignIn(true);
        setShowModalLogin(true)
    };
    const handleCloseLogin = () => setShowModalLogin(false);

    const handleShowSignup = () => {
        setIsSignIn(false);
        setShowModalSignup(true)
    };

    const handleCloseSignup = () => setShowModalSignup(false);

    return (
        <Navbar collapseOnSelect expand="lg" className="navFont d-flex justify-content-between" style={{ padding: '1rem' }}>

            <Navbar.Brand href="#home" className="logo">Holidaze</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <SearchForm />
                <Nav className="ml-auto">
                    <HeaderStartPoint
                        showModalLogin={showModalLogin}
                        handleShowLogin={handleShowLogin}
                        handleCloseLogin={handleCloseLogin}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        showModalSignup={showModalSignup}
                        handleShowSignup={handleShowSignup}
                        handleCloseSignup={handleCloseSignup}
                        name={name}
                        setName={setName}
                        email={email}
                        password={password}
                        role={role}
                        setRole={setRole}
                        registerUser={registerUser}
                        showSuccessModal={showSuccessModal}
                        setIsSignIn={setIsSignIn}
                        setShowModalLogin={setShowModalLogin}
                        setShowSuccessModal={setShowSuccessModal}
                    />
                    {/* <HeaderAfterLogin /> */}
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;

