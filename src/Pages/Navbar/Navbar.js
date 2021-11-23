import React from 'react';
import './Navbar.css'
import navimg from '../../images/m-letter.png'

const Navbar = () => {
    return (
        <div className="navbar-bgc">
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-bgc shadow">
                <div class="container-fluid">
                    <img className="navimage ms-lg-4 me-lg-3" src={navimg} alt="" />
                    <a class="navbar-brand ms-lg-5" href="www.google.com" className="masum">MASUM</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="ms-auto collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto me-5">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="www.google.com">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="www.google.com">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;