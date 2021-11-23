import React from 'react';
import projectOne from '../../../images/project1.png'
import projectTwo from '../../../images/project2.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className="tech-color background-tech">
            <div className="my-5">
                <h1 className="container mb-5 text-center text-light">Projects</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto align-items-center">
                    <div class="col mb-2">
                        <h1 className="text-light mt-5">MERN Projects</h1>
                    </div>
                    <div class="col mb-2">
                        <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                            <img className="img-fluid" src={projectOne} alt="" />
                            <h5 className="text-center mt-3">Baby Care Products</h5>
                            <div>
                                <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                            </div>
                            <hr />
                            <div className="mb-2 d-flex justify-content-around">
                                <button className="source-btn">Source Code</button>
                                <button className="live-site-btn">Live Site</button>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-2">
                        <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                            <img className="img-fluid" src={projectTwo} alt="" />
                            <h5 className="text-center mt-3">World Travel Inc</h5>
                            <div>
                                <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                            </div>
                            <hr />
                            <div className="mb-3 d-flex justify-content-around">
                                <button className="source-btn">Source Code</button>
                                <button className="live-site-btn">Live Site</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h1 className="text-light mt-5">Front End Project</h1>
                    </div>
                    <div class="col">
                        <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                            <img className="img-fluid" src={projectOne} alt="" />
                            <h5 className="text-center mt-3">Baby Care Products</h5>
                            <div>
                                <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                            </div>
                            <hr />
                            <div className="mb-3 d-flex justify-content-around">
                                <button className="source-btn">Source Code</button>
                                <button className="live-site-btn">Live Site</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                            <img className="img-fluid" src={projectTwo} alt="" />
                            <h5 className="text-center mt-3">World Travel Inc</h5>
                            <div>
                                <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                            </div>
                            <hr />
                            <div className="mb-3 d-flex justify-content-around">
                                <button className="source-btn">Source Code</button>
                                <button className="live-site-btn">Live Site</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;
