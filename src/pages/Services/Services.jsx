import React from 'react';
import './Services.css';
import { FaLeaf, FaLightbulb, FaTasks, FaHeart, FaChartLine } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="services-container">
      <h1>What We Do</h1>
      <p className="subtitle">
        Discover our key offerings to help you live a more balanced, joyful, and productive life.
      </p>

      <div className="service-cards">
        <div className="service-card">
          <FaLeaf className="icon" />
          <h3>Wellness Planning</h3>
          <p>Design daily routines that improve your mental, emotional, and physical well-being.</p>
        </div>

        <div className="service-card">
          <FaLightbulb className="icon" />
          <h3>Life Coaching</h3>
          <p>Get personalized coaching to gain clarity, motivation, and direction in life.</p>
        </div>

        <div className="service-card">
          <FaTasks className="icon" />
          <h3>Productivity Tools</h3>
          <p>Use our digital planners and tools to manage tasks and time more effectively.</p>
        </div>

        <div className="service-card">
          <FaHeart className="icon" />
          <h3>Mindfulness Sessions</h3>
          <p>Engage in guided mindfulness practices to reduce stress and increase focus.</p>
        </div>

        <div className="service-card">
          <FaChartLine className="icon" />
          <h3>Progress Tracking</h3>
          <p>Track your habits and progress with visual dashboards and weekly summaries.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
