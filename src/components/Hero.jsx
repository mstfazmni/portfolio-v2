import React, { useEffect } from 'react';
import './Hero.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
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
    <section className='hero-section text-white d-flex align-items-center' id="home">
      <div className='container text-center'>
        
        {/* Applying animation to each individual element */}
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          Hi, I'm <span className='highlight'>Mostafa Zamani</span>
        </motion.h1>

        <motion.h4
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
          className="text-info"
        >
          Full-Stack Developer
        </motion.h4>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
          }}
        >
          I build intuitive, high-performance web applications.
        </motion.p>

        <motion.a
          href='#projects'
          className='btn btn-success mt-3'
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.6 } },
          }}
        >
          Let's Connect
        </motion.a>
        
      </div>
    </section>
  );
}

export default Hero;
