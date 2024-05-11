import React, { useState, useEffect, useContext } from "react";
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
import HolidazeContext from "../HolidazeContext";




function Header() {

    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalSignup, setShowModalSignup] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('guest');
    const { avatar, setAvatar } = useContext(HolidazeContext);


    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsLoggedin(true);
        }
    }, []);


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

    const [data, setData] = useState(null);
    const [img, setImg] = useState(null);
    const [alt, setAlt] = useState(null);
    const [venueManager, setVenueManager] = useState(false);

    const loginUser = async (email, password) => {
        try {
            const response = await login(email, password);
            console.log(response.data);
            handleCloseLogin();
            setIsLoggedin(true);
            setData(response)

            // setImg(response.data.avatar.url);
            setAvatar(response.data.avatar.url);
            setAlt(response.data.avatar.alt);


            return response;
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
                    {isLoggedin ?
                        <HeaderAfterLogin
                            venueManager={venueManager}
                            img={avatar}
                            alt={alt}
                        /> :
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
                            loginUser={loginUser}
                        />}

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;

