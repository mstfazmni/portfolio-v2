import React from 'react';
import './Card.css'

function Card({ project }) {
  return (
    <div className="card-wrapper mx-auto">
    <div className="card bg-dark text-white custom-card">
        <div className="row no-gutters flex-row-reverse">
        <div className="col-md-4 position-relative">
            <img src={project.image} className="card-img" alt={`${project.title} Screenshot`} />
            <div className="vertical-divider"></div>
        </div>
        <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.tech}</p>
            <p className="card-text">{project.description}</p>
            <a href={project.liveDemo} className="btn btn-success me-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.github} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">GitHub Code</a>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Card;
