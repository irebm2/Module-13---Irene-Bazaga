import React from 'react';
import Project from './Project';
import projectData from './projectData.json';
import './ProjectGallery.css';

const ProjectGallery = () => {
  const displayedProjects = projectData.slice(0, 6); // Display the first 6 projects

  return (
    <div>
      {displayedProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;