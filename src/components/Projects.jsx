import React , {useState} from 'react';
import './Projects.css';
import Card from './Card';





function Projects() {
  

  return (
    <section className="projects-section  text-white" id="projects">

      <div className="container">
      {/* project header */}
        <div className="projects-header d-flex align-items-center justify-content-between mb-5">
          <h2 className="mb-0">Projects</h2>
          <hr className="devider" />
        </div>

        {/* Slideshow controls */}
        <div className='slideshow-container text-center'>
          <Card />
          
        </div>
      </div>
    </section>
  );
}

export default Projects;
