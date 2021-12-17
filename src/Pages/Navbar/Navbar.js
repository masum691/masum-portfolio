import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className="navbar-bgc">
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-bgc shadow">
                <div class="container-fluid">
                    <a class="navbar-brand ms-lg-5" href='#' className="masum">MASUM</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="ms-auto collapse navbar-collapse" id="navbarNav">
                        {/* <ul class="navbar-nav ms-auto me-5">
                            <li class="nav-item">
                                <Link as={HashLink} to="/home#home" class="nav-link active text-light" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link as={HashLink} to="/home#about" class="nav-link active text-light" aria-current="page">
                                    About me
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link as={HashLink} to="/#contact" class="nav-link active text-light" aria-current="page">
                                    Contact me
                                </Link>
                            </li>
                        </ul> */}
                        <ul class="navbar-nav ms-auto me-5">
                            <li class="nav-item">
                                <a href="/#home" class="nav-link active text-light" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/#about" class="nav-link active text-light" aria-current="page">
                                    About
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/#skills" class="nav-link active text-light" aria-current="page">
                                    Tech Skills
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/#projects" class="nav-link active text-light" aria-current="page">
                                    Projects
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/#blog" class="nav-link active text-light" aria-current="page">
                                    Blog
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/#contact" class="nav-link active text-light" aria-current="page">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;