import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface Props {
  skills: string[];
  onChange: (skills: string[]) => void;
}

const SkillsForm: React.FC<Props> = ({ skills, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onChange([...skills, trimmed]);
      setInputValue('');
    }
  };

  const handleRemove = (skillToRemove: string) => {
    onChange(skills.filter(s => s !== skillToRemove));
  };

  return (
    <div>
      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input 
          className="glass-input" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g. React, Python, Project Management..."
        />
        <button type="button" onClick={handleAdd} className="glass-button" style={{ padding: '0.75rem 1rem' }}>
          <Plus size={18} />
        </button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {skills.map(skill => (
          <div 
            key={skill}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              color: 'var(--text-primary)'
            }}
          >
            <span>{skill}</span>
            <button 
              onClick={() => handleRemove(skill)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: 0
              }}
            >
              <X size={14} />
            </button>
          </div>
        ))}
        {skills.length === 0 && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>No skills added yet.</p>
        )}
      </div>
    </div>
  );
};

export default SkillsForm;
