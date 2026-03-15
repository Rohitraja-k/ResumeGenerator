import React from 'react';

interface Props {
  summary: string;
  onChange: (summary: string) => void;
}

const SummaryForm: React.FC<Props> = ({ summary, onChange }) => {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Professional Summary</label>
      <textarea 
        className="glass-input" 
        style={{ minHeight: '150px', resize: 'vertical' }}
        value={summary} 
        onChange={(e) => onChange(e.target.value)}
        placeholder="Briefly describe your professional background and key strengths..."
      />
    </div>
  );
};

export default SummaryForm;
