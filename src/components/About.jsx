import React from "react";
import './About.css';

function About () {
    return(
        <section className="about-section text-white" id="about">
            <div className="container about-wrapper">
                    {/* about header */}
                        <div className="projects-header d-flex align-items-center justify-content-between mb-5">
                        <h2 className="mb-0">About</h2>
                        <hr className="devider" />
                    </div>
                    <div className="about-container">
                        <div className="introduction">
                            <span className="fw-bold">Hey there! I’m Mostafa — a software developer obsessed with crafting digital experiences that don’t just work, but wow.</span><br></br>
                            This isn’t my first portfolio; it’s the next iteration of a passion that keeps evolving.
                            From pixel-perfect UIs to rock-solid back ends, I live for clean, responsive code and user-focused design.
                            Every project is a chance to grow, solve real problems, and push the boundaries of what’s possible on the web.
                            Dive in and explore — let's build something awesome together (and yeah, I’ve probably already rebuilt this site twice).
                        </div>
                        <div className="my-img">
                            <img src="/assets/images/my-pic.png" alt="Mostafa" className="my-img-right-sec"></img>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default About;