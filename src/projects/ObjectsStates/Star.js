// Star.js
import React from "react";

export default function Star({ isFilled, onClick }) {
    const starIcon = isFilled ? "star-filled.png" : "star-empty.png";

    return (
        <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={onClick}
            alt="Star Icon"
        />
    );
}
