import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function StarsRating({ rating }) {
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars > 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;


    return (
        <div className="starsRating">
            <div>Rating: {rating}</div>
            <div>
                {Array.from({ length: fullStars }).map((_, i) => (
                    <i key={`full${i}`} className="bi bi-star-fill"></i>
                ))}
                {Array.from({ length: halfStars }).map((_, i) => (
                    <i key={`half${i}`} className="bi bi-star-half"></i>
                ))}
                {Array.from({ length: emptyStars }).map((_, i) => (
                    <i key={`empty${i}`} className="bi bi-star"></i>
                ))}
            </div>
        </div>
    );
}

export default StarsRating;