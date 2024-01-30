import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-content">
      <h1 className="intro-heading">Hello, I'm Irene Bazaga! 👋</h1>
      <p className="intro-text">
        I'm a Junior Web Developer eager to apply my skills and knowledge to real-world projects and contribute to collaborative team environments ✨
      </p>
      <ul className="skills-highlight">
        <li>HTML5 (semantic markup, accessibility) </li>
        <li>CSS3 (flexbox, grid layout, media queries) </li>
        <li>JavaScript (ES6, DOM manipulation, async programming) ⚡</li>
        <li>React with JSX (components, state management, routing) ⚛️</li>
        <li>Git & GitHub 🌐</li>
        <li>Responsive design 📱</li>
        <li>Web accessibility ♿</li>
        <li>SEO fundamentals 🔍</li>
        <li>Project planning & workflows 📋</li>
      </ul>
      <div className="cta-container">
        <a href="/cv.pdf" target="_blank" className="btn btn-primary">
          Download my CV ⬇️
        </a>
        <a href="/portfolio" className="btn btn-primary">
          Explore my Portfolio ✨
        </a>
        <a href="/contact" className="btn btn-primary">
          Contact Me 📧
        </a>
      </div>
    </div>
  );
}

export default Home;
