import React from 'react';
import masum from '../../../images/masum.png'
import './About.css'

const About = () => {
    return (
        <div className="about-color">
            <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto d-lg-flex align-items-center justify-content-around">
                <div class="col">
                    <img src={masum} class="card-img-top masum-image p-lg-5" alt="..." />
                </div>
                <div class="col">
                    <div className="ps-lg-5">
                        <h4>I'm Masum</h4>
                        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi perferendis id a reiciendis dolorem earum laboriosam nulla.</p>
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
