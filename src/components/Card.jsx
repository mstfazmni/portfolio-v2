import React, { useState } from 'react';
import './Card.css';

const projectData = [
  {
    title: "Task Management",
    tech: "React, JS, Bootstrap",
    description: "A task manager for planning and making collaboration easier.",
    image: "/assets/images/1.jpg",
    liveDemo: "#",
    github: "#",
  },
  {
    title: "TravelBot",
    tech: "React, OpenAI API",
    description: "An AI-powered travel planner that suggests personalized itineraries.",
    image: "/assets/images/2.jpg",
    liveDemo: "#",
    github: "#",
  },
  {
    title: "BLKROUGE",
    tech: "React, OpenAI API",
    description: "An E-Commerce website to order your clothes as you desired.",
    image: "/assets/images/3.jpg",
    liveDemo: "#",
    github: "#",
  },
];

function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projectData[currentIndex];

  return (
    <div className="card-wrapper mx-auto">
      <div className="card bg-dark text-white custom-card">
        <div className="row no-gutters flex-row-reverse">
          <div className="col-md-4 position-relative">
            <img
              src={currentProject.image}
              className="card-img"
              alt={`${currentProject.title} Screenshot`}
            />
            <div className="vertical-divider"></div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{currentProject.title}</h5>
              <p className="card-text">{currentProject.tech}</p>
              <p className="card-text">{currentProject.description}</p>
              <a
                href={currentProject.liveDemo}
                className="btn btn-success me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={currentProject.github}
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Code
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
             {/* Floating navigation buttons */}
              <button
                className="arrow-button left-arrow"
                onClick={handlePrev}
                aria-label="Previous Project"
              >
                &#8592;
              </button>
              <button
                className="arrow-button right-arrow"
                onClick={handleNext}
                aria-label="Next Project"
              >
                &#8594;
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
