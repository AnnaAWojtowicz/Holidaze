import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Host({ userData }) {
    const navigate = useNavigate();
    return (
        <div>
            <div>Host:</div>
            <div className="host">
                <div className="hostDetails">
                    {userData.name}
                </div>
                <Button variant="outline-success" onClick={() => navigate(`/profilesite/${userData.name}`)}>Show profile</Button>
            </div>
        </div>
    );
}

export default Host;
