import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import HolidazeContext from "../HolidazeContext";

function HeaderAfterLogin({ img, alt }) {
    const userName = localStorage.getItem('userName');
    const { logOut } = useContext(HolidazeContext);

    return (

        <div className="dropdown-center">
            <NavDropdown title={<img src={img} alt={alt} width="40" height="40" className="rounded-circle" />} id="basic-nav-dropdown" className="dropdownItem dropdown-toggle" data-bs-toggle="dropdown">
                <div className="dropdownContainer">
                    <NavDropdown.Item as={Link} to={`/profilesite/${userName}`}>Your account</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/yourbookings">
                        Your bookings
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={`/ownerproperties/${userName}`}>Property manager</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut}>
                        Sign out
                    </NavDropdown.Item>
                </div>
            </NavDropdown>
        </div>
    );
}

export default HeaderAfterLogin;