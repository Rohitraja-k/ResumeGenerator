import React from 'react';
import type { Project } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

const ProjectsForm: React.FC<Props> = ({ projects, onChange }) => {
  const handleAdd = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: '',
      link: ''
    };
    onChange([...projects, newProject]);
  };

  const handleUpdate = (id: string, field: keyof Project, value: string) => {
    const updated = projects.map(proj => 
      proj.id === id ? { ...proj, [field]: value } : proj
    );
    onChange(updated);
  };

  const handleRemove = (id: string) => {
    onChange(projects.filter(proj => proj.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {projects.map((proj, index) => (
        <div key={proj.id} style={{ padding: '1rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', position: 'relative' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Project #{index + 1}</h4>
            <button 
              onClick={() => handleRemove(proj.id)}
              className="glass-button danger" 
              style={{ padding: '0.4rem', borderRadius: '4px' }}
              title="Remove"
            >
              <Trash2 size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            <input 
              className="glass-input" 
              placeholder="Project Name" 
              value={proj.name}
              onChange={(e) => handleUpdate(proj.id, 'name', e.target.value)}
            />
            <input 
              className="glass-input" 
              placeholder="Technologies Used (e.g., React, Node.js)" 
              value={proj.technologies}
              onChange={(e) => handleUpdate(proj.id, 'technologies', e.target.value)}
            />
            <input 
              className="glass-input" 
              placeholder="Link (e.g., github.com/username/project)" 
              value={proj.link}
              onChange={(e) => handleUpdate(proj.id, 'link', e.target.value)}
            />
            <textarea 
              className="glass-input" 
              placeholder="Description of the project and your contributions..." 
              style={{ minHeight: '100px', resize: 'vertical' }}
              value={proj.description}
              onChange={(e) => handleUpdate(proj.id, 'description', e.target.value)}
            />
          </div>
        </div>
      ))}

      <button onClick={handleAdd} className="glass-button secondary" style={{ width: '100%' }}>
        <Plus size={18} />
        Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
