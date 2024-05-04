import React from "react";

function Location({ data }) {
    return (
        <div>
            <div className="location">Location:</div>
            <p className="locationDetails">{data.location.address}</p>
            <p className="locationDetails">{data.location.city}</p>
            <p className="locationDetails">{data.location.country}</p>
        </div>
    );
}

export default Location;