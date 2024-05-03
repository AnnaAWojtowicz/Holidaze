import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function NumberOfGuests({ guests }) {
    const iconsToShowMaxGuests = guests > 5 ? 5 : guests;
    return (
        <div className="maximumGuests">
            <p>max. {guests} guests</p>
            <p>
                {Array.from({ length: iconsToShowMaxGuests }).map((_, i) => (
                    <i key={i} className="bi bi-person-arms-up"></i>
                ))}
                {guests > 5 &&
                    <i className="bi bi-plus"></i>
                }
            </p>
        </div>
    );
}

export default NumberOfGuests;