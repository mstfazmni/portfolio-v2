import React from 'react';
import './Projects.css';
import Card from './Card';

function Projects() {
  return (
    <section className="projects-section py-5 text-white" id="projects">

      <div className="container">
      {/* project header */}
        <div className="projects-header d-flex align-items-center justify-content-between mb-5">
          <h2 className="mb-0">Projects</h2>
          <hr className="devider" />
        </div>
        {/* card */}
        <Card />
      </div>
    </section>
  );
}

export default Projects;
