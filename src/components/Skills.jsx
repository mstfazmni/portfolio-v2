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
                    <div className="col-md-3 d-flex justify-content-center">
                        <i className="devicon-html5-plain-wordmark colored skill-icon"></i>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <i className="devicon-css3-plain-wordmark colored skill-icon"></i>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <i className="devicon-javascript-plain colored skill-icon"></i>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <i className="devicon-react-original-wordmark colored skill-icon"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;