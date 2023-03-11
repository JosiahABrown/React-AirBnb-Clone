import React from "react";
import photogrid from '../images/photo-grid.png';

export default function HeroComponent() {
    return (
        <div className="hero">
            <img className="hero-img" src={photogrid} alt="photo grid" />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-msg">
                Join unique interactive activities 
                led by one-of-a-kind 
                hosts—all without leaving home.
            </p>
        </div>
    )
}