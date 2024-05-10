import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import ExampleImage1 from "../../img/luke-stackpoole-eWqOgJ-lfiI-unsplash4.jpg";

function HeaderAfterLogin({ venueManager }) {
    return (
        <div>
            <NavDropdown title={<img src={ExampleImage1} alt="mdo" width="40" height="40" className="rounded-circle" />} id="basic-nav-dropdown" className="dropdownItem">

                <NavDropdown.Item as={Link} to="/profilesite">Your account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Your bookings
                </NavDropdown.Item>
                {venueManager &&
                    <NavDropdown.Item href="#action/3.3">Property manager</NavDropdown.Item>}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Sign out
                </NavDropdown.Item>

            </NavDropdown>
        </div>
    );
}

export default HeaderAfterLogin;