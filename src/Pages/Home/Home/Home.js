import React from 'react';
import Navbar from '../../Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import LeftBanner from '../LeftBanner/LeftBanner';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import TechSkills from '../TechSkills/TechSkills';
import './Home.css'

const Home = () => {
    return (
        <div className='row container-fluid mx-auto'>
            <div className='col-sm-12 col-md-4 col-lg-3 left-banner'>
                <LeftBanner></LeftBanner>
            </div>
            <div className='col-sm-12 col-md-8 col-lg-9 '>
                <div className='home-page container' id="home">
                    <Navbar></Navbar>
                    {/* <Banner></Banner> */}
                    <About></About>
                    <TechSkills></TechSkills>
                    <Services></Services>
                    <Projects></Projects>
                    <Blog></Blog>
                    <Contact></Contact>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;