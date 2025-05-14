import React, { useEffect } from "react";
import './About.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
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
    <section className="about-section text-white" id="about">
      <div className="container about-wrapper">
        
        {/* About header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
          }}
          className="projects-header d-flex align-items-center justify-content-between mb-5"
        >
          <h2 className="mb-0">About</h2>
          <hr className="devider" />
        </motion.div>

        <div className="about-container">
          {/* About Introduction */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
            }}
            className="introduction"
          >
            <span className="fw-bold">Hey there! I’m Mostafa — a software developer obsessed with crafting digital experiences that don’t just work, but wow.</span><br />
            This isn’t my first portfolio; it’s the next iteration of a passion that keeps evolving.
            From pixel-perfect UIs to rock-solid back ends, I live for clean, responsive code and user-focused design.
            Every project is a chance to grow, solve real problems, and push the boundaries of what’s possible on the web.
            Dive in and explore — let's build something awesome together (and yeah, I’ve probably already rebuilt this site twice).
          </motion.div>

          {/* About Image */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
            }}
            className="my-img"
          >
            <img src="/assets/images/my-pic.png" alt="Mostafa" className="my-img-right-sec" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
