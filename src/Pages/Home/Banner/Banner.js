import React from 'react';
import programmer from '../../../images/programmer.png'
import './Banner.css'

const Banner = () => {

    return (
        <div className="banner-container">
            <div className="with-nav">
                <div class="align-items-center portfolio-banner">
                    <div className='text-center'>
                        <div className='mb-4'>
                            <div className="my-p-img">
                                <img className='programmer-banner-img' src={programmer} alt="" />
                            </div>
                            <h4 className='mt-3'>MD MASUM MIA</h4>
                            <button>WEB DEVELOPER</button>
                            <div className="font-awesome">

                                <a href="https://github.com/masumwbd" target="_blank" rel="noreferrer"><i class="fab fa-github github"></i></a>
                                <a href="https://web.facebook.com/profile.php?id=100071095920767" target="_blank" rel="noreferrer"><i class="fab fa-facebook facebook"></i></a>
                                <a href="https://www.linkedin.com/in/md-masum-mia-579ab320a/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin linkedin"></i></a>
                            </div>
                        </div>

                        <div className='banner-resume-part py-5'>
                            <div className='ms-4'>
                                <div>
                                    <i class="fas fa-map-marker-alt"></i> <small>Mymensingh, BD</small>
                                </div>
                                <div>
                                    <i class="far fa-envelope"></i>
                                    <small> masumwbd@gmail.com</small>
                                </div>
                                <div>
                                    <i class="fas fa-phone"></i>
                                    <small>+88-01996834815</small>
                                </div>
                            </div>
                            <div>
                                <button className="resume mt-4 ms-4"><a href="https://drive.google.com/file/d/1uKKr16TdmpM1FsrwNvfJz5NV2ToCJ2rA/view?usp=sharing" target="_blank" rel="noreferrer"><i class="fas fa-download"></i> Download Resume</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;