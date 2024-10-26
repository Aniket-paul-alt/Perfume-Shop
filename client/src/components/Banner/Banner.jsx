// src/components/Banner.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'; // Custom CSS styles

function Banner() {

    function scrollDown() {
        window.scrollBy({
            top: 730, // Adjust this value to control the scroll distance
            behavior: 'smooth' // Optional for smooth scrolling
        });
    }

    return (
        <div className="banner">
            <Container className="banner-cont">
                <h1 className="banner-title">Discover Your Signature Scent</h1>
                <p className="banner-subtitle">Explore our latest collections and special offers.</p>
                <button onClick={scrollDown} className='banner-btn'>Explore &rArr;</button>
            </Container>
        </div>
    );
}

export default Banner;