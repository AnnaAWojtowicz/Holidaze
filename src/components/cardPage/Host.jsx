import React from "react";
import Button from 'react-bootstrap/Button';

function Host({ userData }) {
    return (
        <div>
            <div>Host:</div>
            <div className="host">
                <div className="hostDetails">
                    {userData.name}
                </div>
                <Button className="" variant="outline-success">Show profile</Button>
            </div>
        </div>
    );
}

export default Host;
