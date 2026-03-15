import React from 'react';
import type { Experience } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

const ExperienceForm: React.FC<Props> = ({ experience, onChange }) => {
  const handleAdd = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...experience, newExp]);
  };

  const handleUpdate = (id: string, field: keyof Experience, value: string) => {
    const updated = experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onChange(updated);
  };

  const handleRemove = (id: string) => {
    onChange(experience.filter(exp => exp.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {experience.map((exp, index) => (
        <div key={exp.id} style={{ padding: '1rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', position: 'relative' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Experience #{index + 1}</h4>
            <button 
              onClick={() => handleRemove(exp.id)}
              className="glass-button danger" 
              style={{ padding: '0.4rem', borderRadius: '4px' }}
              title="Remove"
            >
              <Trash2 size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <input 
                className="glass-input" 
                placeholder="Company Name" 
                value={exp.company}
                onChange={(e) => handleUpdate(exp.id, 'company', e.target.value)}
              />
            </div>
            
            <div style={{ gridColumn: '1 / -1' }}>
              <input 
                className="glass-input" 
                placeholder="Job Title / Position" 
                value={exp.position}
                onChange={(e) => handleUpdate(exp.id, 'position', e.target.value)}
              />
            </div>

            <div>
              <input 
                className="glass-input" 
                placeholder="Start Date (e.g., Jan 2020)" 
                value={exp.startDate}
                onChange={(e) => handleUpdate(exp.id, 'startDate', e.target.value)}
              />
            </div>

            <div>
              <input 
                className="glass-input" 
                placeholder="End Date (e.g., Present)" 
                value={exp.endDate}
                onChange={(e) => handleUpdate(exp.id, 'endDate', e.target.value)}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <textarea 
                className="glass-input" 
                placeholder="Description of responsibilities and achievements..." 
                style={{ minHeight: '100px', resize: 'vertical' }}
                value={exp.description}
                onChange={(e) => handleUpdate(exp.id, 'description', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button onClick={handleAdd} className="glass-button secondary" style={{ width: '100%' }}>
        <Plus size={18} />
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
