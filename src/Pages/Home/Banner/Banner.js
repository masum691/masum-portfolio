import React from 'react';
import programmer from '../../../images/programmer.png'
import Navbar from '../../Navbar/Navbar';
import './Banner.css'

const Banner = () => {

    return (
        <div className="banner-container">
            <div className="with-nav container mx-auto ">
            <div class="row row-cols-1 row-cols-md-2 g-4 d-lg-flex align-items-center portfolio-banner">
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

                    <button className="resume mt-4"><a href="https://drive.google.com/file/d/16lPpu_jvLJmq3EFJBbqdy8QEB0AbFOkZ/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</a></button>
                </div>
                <div class="col">
                    <img src={programmer} class="card-img-top" alt="..." />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;