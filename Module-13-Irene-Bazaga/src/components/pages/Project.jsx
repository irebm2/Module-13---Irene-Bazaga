import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="card">
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
  );
};

export default Project;