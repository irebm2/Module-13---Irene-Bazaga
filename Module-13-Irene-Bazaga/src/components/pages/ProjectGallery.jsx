import React from 'react';
import Project from './Project';
import projectData from './projectData.json';
import './ProjectGallery.css';

const ProjectGallery = () => {
  const displayedProjects = projectData.slice(0, 6); // Display the first 6 projects

  return (
    <div className="container">
      {displayedProjects.map((project) => (
        <div className="card" key={project.id}>
          <img src={project.image} className="card-img-top" alt={project.title} />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">
              <a href={project.deployedLink}>Link to deployed version</a>
            </p>
            <p className="card-text">
              <a href={project.githubLink}>Link to GitHub repository</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;