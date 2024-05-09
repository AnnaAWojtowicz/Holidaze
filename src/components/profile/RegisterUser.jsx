import React from "react";
import { useState } from "react";
import { apiRegisterUserPath } from "../../api/constants";
import ModalMain from "../layout/Modal";
import ModalRegisterSuccess from "./ModalRegisterSuccess";

function Register({ name, setName, email, setEmail, password, setPassword, role, setRole }) {

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const registerUser = async (event) => {
        event.preventDefault();
        debugger;
        try {
            const response = await fetch(apiRegisterUserPath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, venueManager: role === 'manager' }),
            });

            const data = await response.json();


            if (data.success) {
                setShowSuccessModal(true);
                setRole(data.role);
            } else {
                alert(data.message);
            }
        }

        catch (error) {
            alert('Error:', error);
        };
    }

    return (
        <>
            {/* <ModalMain
                registerUser={registerUser}
                show={showSuccessModal}
                onHide={() => setShowSuccessModal(false)}
                role={role} /> */}
            <ModalRegisterSuccess
                show={showSuccessModal}
                onHide={() => setShowSuccessModal(false)}
                role={role} />
        </>
    );
}

export default Register;