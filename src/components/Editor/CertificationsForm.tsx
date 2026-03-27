import React from 'react';
import type { Certification } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}

const CertificationsForm: React.FC<Props> = ({ certifications, onChange }) => {
  const handleAdd = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
      link: ''
    };
    onChange([...certifications, newCert]);
  };

  const handleUpdate = (id: string, field: keyof Certification, value: string) => {
    const updated = certifications.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    onChange(updated);
  };

  const handleRemove = (id: string) => {
    onChange(certifications.filter(cert => cert.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {certifications.map((cert, index) => (
        <div key={cert.id} style={{ padding: '1rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', position: 'relative' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Certification #{index + 1}</h4>
            <button 
              onClick={() => handleRemove(cert.id)}
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
              placeholder="Certification Name" 
              value={cert.name}
              onChange={(e) => handleUpdate(cert.id, 'name', e.target.value)}
            />
            <input 
              className="glass-input" 
              placeholder="Issuing Organization" 
              value={cert.issuer}
              onChange={(e) => handleUpdate(cert.id, 'issuer', e.target.value)}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input 
                className="glass-input" 
                placeholder="Date Earned" 
                value={cert.date}
                onChange={(e) => handleUpdate(cert.id, 'date', e.target.value)}
              />
              <input 
                className="glass-input" 
                placeholder="Credential URL" 
                value={cert.link}
                onChange={(e) => handleUpdate(cert.id, 'link', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button onClick={handleAdd} className="glass-button secondary" style={{ width: '100%' }}>
        <Plus size={18} />
        Add Certification
      </button>
    </div>
  );
};

export default CertificationsForm;
