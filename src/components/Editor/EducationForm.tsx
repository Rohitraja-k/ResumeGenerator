import React from 'react';
import type { Education } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  education: Education[];
  onChange: (education: Education[]) => void;
}

const EducationForm: React.FC<Props> = ({ education, onChange }) => {
  const handleAdd = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      gpa: ''
    };
    onChange([...education, newEdu]);
  };

  const handleUpdate = (id: string, field: keyof Education, value: string) => {
    const updated = education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onChange(updated);
  };

  const handleRemove = (id: string) => {
    onChange(education.filter(edu => edu.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {education.map((edu, index) => (
        <div key={edu.id} style={{ padding: '1rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', position: 'relative' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Education #{index + 1}</h4>
            <button 
              onClick={() => handleRemove(edu.id)}
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
                placeholder="Institution / University Name" 
                value={edu.institution}
                onChange={(e) => handleUpdate(edu.id, 'institution', e.target.value)}
              />
            </div>
            
            <div style={{ gridColumn: '1 / -1' }}>
              <input 
                className="glass-input" 
                placeholder="Degree / Major" 
                value={edu.degree}
                onChange={(e) => handleUpdate(edu.id, 'degree', e.target.value)}
              />
            </div>

            <div>
              <input 
                className="glass-input" 
                placeholder="Start Date" 
                value={edu.startDate}
                onChange={(e) => handleUpdate(edu.id, 'startDate', e.target.value)}
              />
            </div>

            <div>
              <input 
                className="glass-input" 
                placeholder="End Date" 
                value={edu.endDate}
                onChange={(e) => handleUpdate(edu.id, 'endDate', e.target.value)}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <input 
                className="glass-input" 
                placeholder="GPA (Optional)" 
                value={edu.gpa}
                onChange={(e) => handleUpdate(edu.id, 'gpa', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button onClick={handleAdd} className="glass-button secondary" style={{ width: '100%' }}>
        <Plus size={18} />
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
