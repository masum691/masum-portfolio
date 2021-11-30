import React from 'react';
import projectOne from '../../../images/project1.png'
import projectTwo from '../../../images/project2.png'
import projectThree from '../../../images/project3.png'
import projectFour from '../../../images/project4.png'
import './Projects.css'

const Projects = () => {
    return (
        <div id="projects">
            <div className="tech-color background-tech">
                <div className="my-5">
                    <h1 className="container mb-5 text-light text-center">Projects_</h1>
                    <h5 className="text-warning text-center">---My Recent Projects 😍---</h5>
                    <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto align-items-center">

                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectOne} alt="" />
                                </div>
                                <h5 className="text-center mt-3">Baby Care Products</h5>
                                <div>
                                    <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                                </div>
                                <hr />
                                <div className="mb-3 d-flex justify-content-around">

                                    <button type="button" class="source-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Source Code
                                    </button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title text-dark" id="exampleModalLabel">Baby care products</h5>
                                                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body text-dark">
                                                    <button className="client-btn"><a className="text-light" href="https://github.com/masum691/baby-care-client" target="_blank" rel="noreferrer" >Client Code</a></button>
                                                    <button className="server-btn ms-3"><a className="text-light" href="https://github.com/masum691/baby-care-server" target="_blank" rel="noreferrer" >Server Code</a></button>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="close-btn " data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="live-site-btn"><a  href="https://baby-care-app-584b5.web.app/" target="_blank" rel="noreferrer" >Live Site</a></button>
                                    {/* <button className="btn btn-light w-100 fw-bold">Details</button> */}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectTwo} alt="" />
                                </div>
                                <h5 className="text-center mt-3">World Travel</h5>
                                <div>
                                    <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                                </div>
                                <hr />
                                <div className="mb-3 d-flex justify-content-around">

                                    <button type="button" class="source-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Source Code
                                    </button>

                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title text-dark" id="staticBackdropLabel">World Travel Source Code</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <button className="client-btn"><a className="text-light" href="https://github.com/masum691/travel-world-client" target="_blank" rel="noreferrer" >Client Code</a></button>
                                                    <button className="server-btn ms-3"><a className="text-light" href="https://github.com/masum691/travel-world-server" target="_blank" rel="noreferrer" >Server Code</a></button>
                                                </div>
                                                <div class="modal-footer">
                                                <button type="button" class="close-btn " data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <button className="live-site-btn"><a  href="https://world-travel-inc.web.app/" target="_blank" rel="noreferrer" >Live Site</a></button>
                                    {/* <button className="btn btn-light w-100 fw-bold">Details</button> */}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectThree} alt="" />
                                </div>
                                <h5 className="text-center mt-3">Popular Diagnostic</h5>
                                <div>
                                    <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                                </div>
                                <hr />
                                <div className="mb-3 d-flex justify-content-around">
                                    <button className="source-btn"><a href="https://github.com/masum691/popular-diagnostic-ltd" className="ancor-source" target="_blank" rel="noreferrer">Source Code</a></button>
                                    <button className="live-site-btn"><a  href="https://popular-diagnostic-ltd.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a></button>
                                    {/* <button className="btn btn-light w-100 fw-bold">Details</button> */}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                                <div className="project-img">
                                    <img className="img-fluid" src={projectFour} alt="" />
                                </div>
                                <h5 className="text-center mt-3">Coursea</h5>
                                <div>
                                    <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                                </div>
                                <hr />
                                <div className="mb-3 d-flex justify-content-around">
                                    <button className="source-btn"><a href="https://github.com/masum691/language-course" className="ancor-source" target="_blank" rel="noreferrer">Source Code</a></button>
                                    <button className="live-site-btn"><a  href="https://language-courses-app-masum691.netlify.app/" target="_blank" rel="noreferrer" >Live Site</a></button>
                                    {/* <button className="btn btn-light w-50 fw-bold">Details</button> */}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                                {/* <div className="project-img">
                                    <img className="img-fluid" src={projectTwo} alt="" />
                                </div>
                                <h5 className="text-center mt-3">World Travel Inc</h5>
                                <div>
                                    <button className="project-btn">Metarial UI</button><button className="project-btn">React</button><button className="project-btn">Firebase</button><button className="project-btn">NodeJS</button><button className="project-btn">ExpressJS</button><button className="project-btn">MongoDB</button>
                                </div>
                                <hr />
                                <div className="mb-3 d-flex justify-content-around">
                                    <button className="source-btn">Source Code</button>
                                    <button className="live-site-btn"><a  href="https://github.com/masum691/travel-world-client" target="_blank" rel="noreferrer" >Live Site</a></button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
