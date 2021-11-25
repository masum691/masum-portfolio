import React from 'react';
import programmer from '../../../images/programmer.png'
import './Banner.css'

const Banner = () => {
    const handleResumeBtn = e => {
        alert('Will be added soon')
    }
    return (
        <div className="banner-container">
            <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto d-lg-flex align-items-center">
                <div class="col">
                    <h6>Hi, my name is Masum</h6>
                    <h1>I'm a Web developer</h1>
                    <p>Creating exceptional digital experiences is my specialization as a web developer.</p>
                    <div className="font-awesome">
                    
                        <a href="https://github.com/masum691/" target="_blank" rel="noreferrer"><i class="fab fa-github github"></i></a>
                        <a href="https://web.facebook.com/profile.php?id=100071095920767" target="_blank" rel="noreferrer"><i class="fab fa-facebook facebook"></i></a>
                        <i class="fab fa-twitter twitter"></i>
                        <a href="https://www.linkedin.com/in/md-masum-mia-579ab320a/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin linkedin"></i></a>
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