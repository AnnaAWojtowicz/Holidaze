import React from "react";
import Button from "react-bootstrap/Button";

function ButtonPrimary({ type, onClick, name }) {
    return (
        <Button variant="outline-success" className="btnToModalsNav" type={type} onClick={onClick}>{name}</Button>
    );
}

export default ButtonPrimary;