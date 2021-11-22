import React from 'react';
import Navbar from '../../Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import TechSkills from '../TechSkills/TechSkills';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <TechSkills></TechSkills>
            <Contact></Contact>
        </div>
    );
};

export default Home;