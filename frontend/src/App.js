import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Amauri'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
    </>
  )
}
