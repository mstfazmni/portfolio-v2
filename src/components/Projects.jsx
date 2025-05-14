import React, { useEffect } from 'react';
import './Projects.css';
import Card from './Card';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

   useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [inView, controls]);

  return (
    <section className="projects-section  text-white" id="projects">

      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          {/* project header */}
          <div className="projects-header d-flex align-items-center justify-content-between mb-5">
            <h2 className="mb-0">Projects</h2>
            <hr className="devider" />
          </div>
        </motion.div>
     

        {/* Slideshow controls */}
        <div className='slideshow-container text-center'>
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Projects;
