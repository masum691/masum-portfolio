import React from 'react';
import projectOne from '../../../images/project1.png'
import projectTwo from '../../../images/project2.png'
import projectThree from '../../../images/project3.png'
import projectFour from '../../../images/lang.png'
import projectFive from '../../../images/fundu2.png'
import gaming from '../../../images/gaming2.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className='project-container' id="projects">
            <div className="py-1">
                <div className="my-5">
                    <h4 className="container mx-auto mb-4">My Recent Projects</h4>
                    <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 container mx-auto align-items-center">
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 pb-3 border-0 my-project-card">
                                <div className="project-one-b-care">
                                    {/* <img className="img-fluid project-img-border" src={projectOne} alt="" /> */}
                                </div>
                                <h5 className=" mt-3">Baby Care Products</h5>
                                <div className='technology'>
                                    <small>Technology Used : </small>
                                    <a href="#">React</a>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">Firebase</a>
                                    <a href="#">Node(Express)</a>
                                    <a href="#">MongoDB</a>
                                    <a href="#">Heroku</a>
                                </div>
                                <div className='with-client-sercer mt-3'>
                                    <a className="client-code" href="https://github.com/masum691/baby-care-client" target="_blank" rel="noreferrer" >Client Code</a>
                                    <a className="server-code" href="https://github.com/masum691/baby-care-server" target="_blank" rel="noreferrer" >Server Code</a>
                                    <a className='live-site' href="https://baby-care-app-584b5.web.app/" target="_blank" rel="noreferrer" >Live Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="pb-3 card h-100 px-3 pt-3 border-0 my-project-card">
                                <div className="project-two-world">
                                    {/* <img className="img-fluid" src={projectTwo} alt="" /> */}
                                </div>
                                <h5 className="mt-3">World Travel</h5>
                                <div className='technology'>
                                    <small>Technology Used : </small>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">React</a>
                                    <a href="#">Firebase</a>
                                    <a href="#">Node(Express)</a>
                                    <a href="#">MongoDB</a>
                                    <a href="#">Heroku</a>
                                </div>
                                <div className='mt-3 with-client-sercer'>
                                    <a className="client-code" href="https://github.com/masum691/travel-world-client" target="_blank" rel="noreferrer" >Client Code</a>
                                    <a className="server-code" href="https://github.com/masum691/travel-world-server" target="_blank" rel="noreferrer" >Server Code</a>
                                    <a className='live-site' href="https://world-travel-inc.web.app/" target="_blank" rel="noreferrer" >Live Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card pb-3">
                                <div className="project-three">
                                    {/* <img className="img-fluid" src={projectThree} alt="" /> */}
                                </div>
                                <h5 className="mt-3">Popular Diagnostic</h5>
                                <div className='technology'>
                                    <small>Technology Used : </small>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">React</a>
                                    <a href="#">JSON</a>
                                    <a href="#">CSS</a>
                                    <a href="#">React Router</a>
                                </div>
                                <div className="mt-3">
                                    <a href="https://github.com/masum691/popular-diagnostic-ltd" className="client-source" target="_blank" rel="noreferrer">Source Code</a>
                                    <a className='app-live-site' href="https://popular-diagnostic-ltd.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card pb-3">
                                <div className="project-four">
                                    {/* <img className="img-fluid" src={projectFour} alt="" /> */}
                                </div>
                                <h5 className="mt-3">Coursea</h5>
                                <div className='technology'>
                                    <small>Technology Used : </small>
                                    <a href="#">CSS</a>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">React Js</a>
                                    <a href="#">JSON</a>
                                    <a href="#">React Router</a>
                                </div>
                                <div className="mt-3">
                                    <a href="https://github.com/masum691/language-course" className="client-source" target="_blank" rel="noreferrer">Source Code</a>
                                    <a className='app-live-site' href="https://language-courses-app-masum691.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card pb-3">
                                <div className="project-five">
                                    {/* <img className="img-fluid" src={gaming} alt="" /> */}
                                </div>
                                <h5 className="mt-3">Gaming ocean</h5>
                                <div className='technology'>
                                    <small>Technology Used : </small>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">React JS</a>
                                    <a href="#">CSS</a>
                                </div>
                                <div className="mt-3">
                                    <a href="https://github.com/masum691/gaming-ocean" className="client-source" target="_blank" rel="noreferrer">Source Code</a>
                                    <a className='app-live-site' href="https://gaming-ocean.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card pb-3">
                                <div className="project-six">
                                    {/* <img className="img-fluid" src={projectFive} alt="" /> */}
                                </div>
                                <h5 className=" mt-3">Fundu</h5>
                                <div className='technology'>
                                    <small>Technology Used : </small>
                                    <a href="#">React JS</a>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">CSS</a>
                                </div>
                                <div className="mt-3">
                                    <a href="https://github.com/masum691/fundu-chr" className="client-source" target="_blank" rel="noreferrer">Source Code</a>
                                    <a className='app-live-site' href="https://fundu-chr.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
