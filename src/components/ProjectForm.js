import React, { useState, useEffect } from 'react';

const ProjectForm = ({ addProject, editProject, selectedProject, clearSelectedProject }) => {
  const [projectName, setProjectName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Active');

  // Load selected project data into form for editing
  useEffect(() => {
    if (selectedProject) {
      setProjectName(selectedProject.projectName);
      setDueDate(selectedProject.dueDate);
      setStatus(selectedProject.status);
    } else {
      setProjectName('');
      setDueDate('');
      setStatus('Active');
    }
  }, [selectedProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = { projectName, dueDate, status };
    if (selectedProject) {
      editProject(selectedProject.id, projectData);
    } else {
      addProject(projectData);
    }
    clearSelectedProject();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h5>{selectedProject ? 'Edit Project' : 'Add New Project'}</h5>
      <div className="form-group">
        <label>Project Name</label>
        <input
          type="text"
          className="form-control"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {selectedProject ? 'Update Project' : 'Add Project'}
      </button>
      {selectedProject && (
        <button
          type="button"
          className="btn btn-secondary mt-3 ml-3"
          onClick={clearSelectedProject}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default ProjectForm;
