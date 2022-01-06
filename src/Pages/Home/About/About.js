import React from 'react';
import masum from '../../../images/masum.png'
import './About.css'

const About = () => {
    return (
        <div id="about" className="about-color">
            <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto d-lg-flex align-items-center justify-content-around mt-5">
                <div class="col">
                    <img data-aos="zoom-in" data-aos-duration="2000" src={masum} class="card-img-top masum-image p-lg-5" alt="..." />
                </div>
                <div class="col">
                    <div className="ps-lg-5">
                        <h5>I'm Masum.</h5>
                        <p>I am a professional Web Developer. My work is very important to me, and I am dedicated to it. I'm passionate about learning more, fine-tuning my skill sets, and learning new technologies.</p>
                        <hr />
                        <h4>PERSONAL INFO</h4>
                    </div>
                    <div className="d-lg-flex ps-lg-5">
                        <div>
                            <h6>Name: Masum</h6>
                            <h6>Age: 22</h6>
                            <h6>Nationality: Bangladeshi</h6>
                            <h6>Hobby: Travelling</h6>
                        </div>
                        <div className="ms-lg-5">
                            <h6>Address: Mymensingh</h6>
                            <h6>Phone: 01996834815</h6>
                            <h6>Email: masumhu691@gmail.com</h6>
                            <h6>Language: Bangla, English</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
