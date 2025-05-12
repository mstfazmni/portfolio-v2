import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className='hero-section text-white d-flex align-items-center' id="home">
            <div className='container text-center'>
                <h1>Hi, I'm <span className='highlight'>Mostafa Zamani</span></h1>
                <h4 className='text-info'>Full-Stack Developer</h4>
                <p>I build intuitive, high-performance web applications.</p>
                <a href='#projects' className='btn btn-success mt-3'>Let's Connect</a>
            </div>
        </section>
    );
}

export default Hero;