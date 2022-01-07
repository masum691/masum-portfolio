import React from 'react';
// import programmer from '../../../images/programmer.png'
import programmer from '../../../images/programmer.png'
import Navbar from '../../Navbar/Navbar';
import './Banner.css'

const Banner = () => {

    return (
        <div className="banner-container">
            <div className="with-nav">
                <div class="align-items-center portfolio-banner">
                    <div className='text-center'>
                        <div className='mb-4'>
                            <img className='programmer-banner-img' src={programmer} alt="" />
                            <h4 className='mt-3'>MD MASUM MIA</h4>
                            <button>WEB DEVELOPER</button>
                            {/* <span>Web Developer</span> */}
                            {/* <p>I love learning and sharing knowledge.</p> */}
                            <div className="font-awesome">

                                <a href="https://github.com/masum691/" target="_blank" rel="noreferrer"><i class="fab fa-github github"></i></a>
                                <a href="https://web.facebook.com/profile.php?id=100071095920767" target="_blank" rel="noreferrer"><i class="fab fa-facebook facebook"></i></a>
                                {/* <i class="fab fa-twitter twitter"></i> */}
                                <a href="https://www.linkedin.com/in/md-masum-mia-579ab320a/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin linkedin"></i></a>
                            </div>
                        </div>

                        <div className='banner-resume-part py-5'>
                            <div>
                                <i class="fas fa-map-marker-alt"></i> <small>Mymensingh, BD</small>
                            </div>
                            <div>
                                <i class="far fa-envelope"></i>
                                <small> masumhu691@gmail.com</small>
                            </div>
                            <div>
                                <i class="fas fa-phone"></i>
                                <small>+88-01996834815</small>
                            </div>
                            <div>
                                <button className="resume mt-4"><a href="https://drive.google.com/file/d/16lPpu_jvLJmq3EFJBbqdy8QEB0AbFOkZ/view?usp=sharing" target="_blank" rel="noreferrer"><i class="fas fa-download"></i> Download Resume</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;