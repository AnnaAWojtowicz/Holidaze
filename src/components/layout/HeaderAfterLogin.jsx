import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import ExampleImage1 from "../../img/luke-stackpoole-eWqOgJ-lfiI-unsplash4.jpg";

function HeaderAfterLogin({ img, alt }) {
    const userName = localStorage.getItem('userName');
    return (
        <div>
            <NavDropdown title={<img src={img} alt={alt} width="40" height="40" className="rounded-circle" />} id="basic-nav-dropdown" className="dropdownItem">

                <NavDropdown.Item as={Link} to={`/profilesite/${userName}`}>Your account</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/yourbookings">
                    Your bookings
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/ownerproperties">Property manager</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/signout">
                    Sign out
                </NavDropdown.Item>

            </NavDropdown>
        </div>
    );
}

export default HeaderAfterLogin;