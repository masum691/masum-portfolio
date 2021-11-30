import React from 'react';
import Navbar from '../../Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import TechSkills from '../TechSkills/TechSkills';

const Home = () => {
    return (
        <div id="home">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <TechSkills></TechSkills>
            <Services></Services>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;