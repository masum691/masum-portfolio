import React from 'react';
import programmer from '../../../images/programmer.png'
import './Banner.css'

const Banner = () => {
    const handleResumeBtn = e => {
        alert('Will add soon')
    }
    return (
        <div className="banner-container">
            <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto d-lg-flex align-items-center">
                <div class="col">
                    <h3>Hi, I'm Masum</h3>
                    <h1>I'm a Web developer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <div className="font-awesome">
                        <i class="fab fa-github github"></i>
                        <i class="fab fa-facebook facebook"></i>
                        <i class="fab fa-twitter twitter"></i>
                        <i class="fab fa-linkedin linkedin"></i>
                    </div>
                    <button onClick={handleResumeBtn} className="resume mt-4">Download Resume</button>
                </div>
                <div class="col">
                    <img src={programmer} class="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Banner;