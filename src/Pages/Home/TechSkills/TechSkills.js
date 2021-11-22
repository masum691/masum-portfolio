import React from 'react';

const TechSkills = () => {
    return (
        <div className="my-5">
            <h1 className="container mb-5 text-center">Skills And Education</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                <div class="col">
                    <div class="card h-100  px-3 pt-3 border-0 shadow">
                        <h5 className="text-primary">Front End ***</h5>
                        <h6><i class="fab fa-html5 skill-icon"></i> HTML</h6>
                        <h6><i class="fab fa-css3-alt skill-icon"></i> CSS</h6>
                        <h6><i class="fab fa-bootstrap skill-icon"></i> Bootstrap</h6>
                        <h6><i class="fas fa-code skill-icon"></i> Tailwind CSS</h6>
                        <h6><i class="fas fa-code skill-icon"></i> Metarial UI </h6>
                        <h6><i class="fab fa-react skill-icon"></i> React Js</h6>
                        <h5 className="text-primary">Programming language **</h5>
                        <h6><i class="fab fa-js skill-icon"></i> Javascript</h6>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100  px-3 py-3 border-0 shadow">
                        <h5 className="text-primary">Back End **</h5>
                        <h6><i class="fab fa-node-js skill-icon"></i> Node JS</h6>
                        <h6><i class="fas fa-code skill-icon"></i> Express JS</h6>
                        <h5 className="text-primary">Database ***</h5>
                        <h6><i class="fas fa-database skill-icon"></i> MongoDB</h6>
                        <h5 className="text-primary">Hosting Platform ***</h5>
                        <h6><i class="fab fa-github skill-icon"></i> Github</h6>
                        <h6><i class="fas fa-server skill-icon"></i> Netlify</h6>
                        <h6><i class="fas fa-server skill-icon"></i> Firebase</h6>
                        <h6><i class="fas fa-server skill-icon"></i> Heroku</h6>
                    </div>
                </div>
                <div class="col">
                <div class="card h-100 px-3 pt-3 border-0 shadow">
                        <h5 className="text-primary">Education</h5>
                        <h6 className="text-warning mt-2">University</h6>
                        <h6><i class="fas fa-graduation-cap skill-icon"></i> National University of Bangladesh</h6>
                        <h6 className="text-warning mt-3">College</h6>
                        <h6><i class="fas fa-university skill-icon"></i> Govt. Shahid Smrity College</h6>
                        <h6 className="text-warning mt-3">Programming Hero</h6>
                        <h6><i class="fas fa-code skill-icon"></i> Complete Web Development With Jhankar Mahbub</h6>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechSkills;