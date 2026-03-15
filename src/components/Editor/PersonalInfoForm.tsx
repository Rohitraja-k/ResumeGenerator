import React from 'react';
import type { PersonalInfo } from '../../types/resume';

interface Props {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

const PersonalInfoForm: React.FC<Props> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div style={{ gridColumn: '1 / -1' }}>
        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Full Name</label>
        <input name="fullName" className="glass-input" value={data.fullName} onChange={handleChange} />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Email</label>
        <input name="email" type="email" className="glass-input" value={data.email} onChange={handleChange} />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Phone</label>
        <input name="phone" className="glass-input" value={data.phone} onChange={handleChange} />
      </div>

      <div style={{ gridColumn: '1 / -1' }}>
        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Location</label>
        <input name="location" className="glass-input" value={data.location} onChange={handleChange} />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Website</label>
        <input name="website" className="glass-input" value={data.website} onChange={handleChange} />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>LinkedIn</label>
        <input name="linkedin" className="glass-input" value={data.linkedin} onChange={handleChange} />
      </div>

      <div style={{ gridColumn: '1 / -1' }}>
        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>GitHub</label>
        <input name="github" className="glass-input" value={data.github} onChange={handleChange} />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
