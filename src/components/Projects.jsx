import React , {useState} from 'react';
import './Projects.css';
import Card from './Card';

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
    description: "An E-Commerce website to order your clothes as you desierd.",
    image: "/assets/images/3.jpg",
    liveDemo: "#",
    github: "#",
  },
];



function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const currenProject = projectData[currentIndex];

  return (
    <section className="projects-section py-5 text-white" id="projects">

      <div className="container">
      {/* project header */}
        <div className="projects-header d-flex align-items-center justify-content-between mb-5">
          <h2 className="mb-0">Projects</h2>
          <hr className="devider" />
        </div>

        {/* Slideshow controls */}
        <div className='slideshow-container text-center'>
          <Card project={currenProject} />
          <div className='mt-4'>
            <button className='btn btn-outline-light me-2' onClick={handlePrev}>Previous</button>
            <button className='btn btn-outline-light' onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
