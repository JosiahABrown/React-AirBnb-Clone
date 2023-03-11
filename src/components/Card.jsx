import React from "react";
import cardImage from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img className="card-img" src={cardImage} />
            <div className="card-stats">
                <img className="card-star" src={star} alt="star" />
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">USA</span>
            </div>                
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}