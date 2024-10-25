import React from 'react';

const ProjectList = ({ projects }) => {
  // Provide a default empty array if projects is undefined
  const projectList = projects || [];

  return (
    <div>
      <h3>Project List</h3>
      {projectList.length > 0 ? (
        <ul>
          {projectList.map((project) => (
            <li key={project.id}>
              <strong>{project.name}</strong> - Due Date: {project.dueDate} - Status: {project.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default ProjectList;
