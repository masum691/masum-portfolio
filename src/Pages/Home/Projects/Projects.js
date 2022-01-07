import React from 'react';
import projectOne from '../../../images/project1.png'
import projectTwo from '../../../images/project2.png'
import projectThree from '../../../images/project3.png'
import projectFour from '../../../images/langcrc.png'
import projectFive from '../../../images/bank.png'
import './Projects.css'

const Projects = () => {
    return (
        <div id="projects">
            <div className="py-1">
                <div className="my-5">
                    <h4 className="container mx-auto mb-4">My Recent Projects</h4>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 container mx-auto align-items-center">
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card">
                                <div className="project-img">
                                    <img className="img-fluid project-img-border" src={projectOne} alt="" />
                                </div>
                                <h5 className=" mt-3">Baby Care Products</h5>
                                <div>
                                    <small>Technology Used : </small>
                                    <a href="#">React</a>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">Firebase</a>
                                    <a href="#">Node(Express)</a>
                                    <a href="#">MongoDB</a>
                                    <a href="#">Heroku</a>
                                </div>
                                <div>
                                    <a className="" href="https://github.com/masum691/baby-care-client" target="_blank" rel="noreferrer" >Client Code</a>
                                    <a className="" href="https://github.com/masum691/baby-care-server" target="_blank" rel="noreferrer" >Server Code</a>
                                    <a href="https://baby-care-app-584b5.web.app/" target="_blank" rel="noreferrer" >Live Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectTwo} alt="" />
                                </div>
                                <h5 className="text-center mt-3">World Travel</h5>
                                <div>
                                    <small>Technology Used : </small>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">React</a>
                                    <a href="#">Firebase</a>
                                    <a href="#">Node(Express)</a>
                                    <a href="#">MongoDB</a>
                                    <a href="#">Heroku</a>
                                </div>
                                <div>
                                    <a className="" href="https://github.com/masum691/travel-world-client" target="_blank" rel="noreferrer" >Client Code</a>
                                    <a className="" href="https://github.com/masum691/travel-world-server" target="_blank" rel="noreferrer" >Server Code</a>
                                    <a href="https://world-travel-inc.web.app/" target="_blank" rel="noreferrer" >Live Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectThree} alt="" />
                                </div>
                                <h5 className="text-center mt-3">Popular Diagnostic</h5>
                                <div>
                                    <small>Technology Used : </small>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">React</a>
                                    <a href="#">JSON</a>
                                    <a href="#">CSS</a>
                                    <a href="#">React Router</a>
                                </div>
                                <div className="mb-3">
                                    <a href="https://github.com/masum691/popular-diagnostic-ltd" className="ancor-source" target="_blank" rel="noreferrer">Source Code</a>
                                    <a href="https://popular-diagnostic-ltd.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectFour} alt="" />
                                </div>
                                <h5 className="text-center mt-3">Coursea</h5>
                                <div>
                                    <small>Technology Used : </small>
                                    <a href="#">CSS</a>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">React Js</a>
                                    <a href="#">JSON</a>
                                    <a href="#">React Router</a>
                                </div>
                                <div className="mb-3">
                                    <a href="https://github.com/masum691/language-course" className="ancor-source" target="_blank" rel="noreferrer">Source Code</a>
                                    <a href="https://language-courses-app-masum691.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectFour} alt="" />
                                </div>
                                <h5 className="text-center mt-3">Coursea</h5>
                                <div>
                                    <small>Technology Used : </small>
                                    <a href="#">CSS</a>
                                    <a href="#">Bootstrap</a>
                                    <a href="#">React Js</a>
                                    <a href="#">JSON</a>
                                    <a href="#">React Router</a>
                                </div>
                                <div className="mb-3">
                                    <a href="https://github.com/masum691/language-course" className="ancor-source" target="_blank" rel="noreferrer">Source Code</a>
                                    <a href="https://language-courses-app-masum691.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 my-project-card">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectFive} alt="" />
                                </div>
                                <h5 className="text-center mt-3">Bank deposit</h5>
                                <div>
                                    <button className="project-btn">HTML</button><button className="project-btn">Tailwind CSS</button><button className="project-btn">Javascript</button><button className="project-btn">Netlify</button>
                                </div>
                                <hr />
                                <div className="mb-3">
                                    <button className="source-btn"><a href="https://github.com/masum691/bank-deposit-withdraw" className="ancor-source" target="_blank" rel="noreferrer">Source Code</a></button>
                                    <button className="live-site-btn ms-2"><a href="https://bank-deposit-withdraw-masum691.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a></button>
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
