import React from "react";

function Location({ data }) {
    return (
        <div>
            <div className="location">Location:</div>
            <div className="locationDetails">{data.location.address}</div>
            <div className="locationDetails">{data.location.city}</div>
            <div className="locationDetails">{data.location.country}</div>
        </div>
    );
}

export default Location;