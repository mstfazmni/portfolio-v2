import React from "react";
import './Skills.css'
function Skills () {
    return (
        <section className="skills-section  text-white" id="skills">
            <div className="container  h-100 d-flex flex-column">

                {/* skills header */}
                <div className="skills-header d-flex align-items-center justify-content-between mb-5">
                    <h2 className="mb-0">My Skills</h2>
                    <hr className="devider" />
                </div>

              {/* Centered row for icons */}
                <div className="row text-center flex-grow-1 align-items-center justify-content-center">
                    <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
                        <i className="devicon-react-original-wordmark colored skill-icon"></i>
                    </div>
                    <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
                        <i className="devicon-html5-plain-wordmark colored skill-icon"></i>
                    </div>
                    <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
                        <i className="devicon-css3-plain-wordmark colored skill-icon"></i>
                    </div>
                    <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
                        <i className="devicon-javascript-plain colored skill-icon"></i>
                    </div>
                    
                    <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
                        <i className="devicon-csharp-plain colored skill-icon"></i>
                    </div>
                    <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
                        <i className="devicon-java-plain-wordmark colored skill-icon"></i>
                    </div>
                     <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
                        <i className="devicon-nodejs-plain-wordmark colored skill-icon"></i>
                    </div>
                    <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
                        <i className="devicon-mysql-plain-wordmark colored skill-icon"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;