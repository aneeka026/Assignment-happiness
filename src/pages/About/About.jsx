import React from 'react';
import './About.css';
import teamMem_1 from '../../assets/pep-img-1.jpeg'
import teamMem_2 from '../../assets/pep-img-2.jpeg'
import teamMem_3 from '../../assets/pep-img-3.jpeg'

const About = () => {
  return (
    <div className="about-container">
      <section className="intro">
        <h1>About Us</h1>
        <p>
          At <strong>Happiness Plans</strong>, we believe in empowering people to live a life of purpose, positivity, and productivity. 
          Our platform offers personalized wellness and planning tools to help you take control of your day and achieve your goals — one step at a time.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To help individuals build habits, track progress, and stay inspired through mindful planning and goal-setting.
        </p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="card">
            <img src={teamMem_1} alt="Team Member" />
            <h3>Priya Sharma</h3>
            <p>Founder & Wellness Coach</p>
          </div>
          <div className="card">
            <img src={teamMem_2} alt="Team Member" />
            <h3>Ravi Verma</h3>
            <p>Product Designer</p>
          </div>
          <div className="card">
            <img src={teamMem_3} alt="Team Member" />
            <h3>Neha Gupta</h3>
            <p>Growth Strategist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
