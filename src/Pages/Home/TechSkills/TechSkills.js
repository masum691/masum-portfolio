import React from 'react';
import './TechSkills.css'
import html from '../../../images/skill img/html-1.svg'
import css from '../../../images/skill img/css-3.svg'
import js from '../../../images/skill img/logo-javascript.svg'
import bs from '../../../images/skill img/bootstrap-5-1.svg'
import ex from '../../../images/skill img/express-109.svg'
import fire from '../../../images/skill img/firebase-1.svg'
import git from '../../../images/skill img/github-icon-1.svg'
import hero from '../../../images/skill img/heroku-4.svg'
import mate from '../../../images/skill img/material-ui-1.svg'
import mongo from '../../../images/skill img/mongodb-icon-1.svg'
import next from '../../../images/skill img/nextjs-2.svg'
import node from '../../../images/skill img/nodejs-icon.svg'
import react from '../../../images/skill img/react-2.svg'
import tail from '../../../images/skill img/tailwind-css-2.svg'

const TechSkills = () => {
    return (
        <div className='container-fluid mx-auto tech-skills-container'>
            <h4 className='mt-5 before-after-h4'>My Skills :</h4>
            <div className='row'>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={react} alt="" />
                    <h6 className='mt-1 mb-3'>ReactJS</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={bs} alt="" />
                    <h6 className='mt-3 mb-3'>Bootstrap</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={html} alt="" />
                    <h6 className='mt-1 mb-3'>HTML</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={css} alt="" />
                    <h6 className='mt-1 mb-3'>CSS</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={tail} alt="" />
                    <h6 className='mt-3 mb-3'>Tailwind</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={js} alt="" />
                    <h6 className='mt-2 mb-3'>Javascript</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={fire} alt="" />
                    <h6 className='mt-1 mb-3'>Firebase</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={git} alt="" />
                    <h6 className='mt-3 mb-3'>Git</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={hero} alt="" />
                    <h6 className='mt-3 mb-3'>Heroku</h6>
                </div>
            </div>
            <h4 className='mt-4 before-after-h4'>Familiar with : </h4>
            <div className='row'>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={mate} alt="" />
                    <h6 className='mt-3 mb-3'>MaterialUI</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={next} alt="" />
                    <h6 className='mt-3 mb-3'>NextJS</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={node} alt="" />
                    <h6 className='mt-1 mb-3'>NodeJS</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-50 mt-3' src={ex} alt="" />
                    <h6 className='mt-3 mb-3'>ExpressJS</h6>
                </div>
                <div className='col-sm-4 col-md-3 col-lg-2 text-center my-sill-svg m-2'>
                    <img className='w-25 mt-3' src={mongo} alt="" />
                    <h6 className='mt-2 mb-3'>MongoDB</h6>
                </div>
            </div>
        </div>
    );
};

export default TechSkills;