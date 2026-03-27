import React from 'react';
import type { Activity } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  activities: Activity[];
  onChange: (activities: Activity[]) => void;
}

const ActivitiesForm: React.FC<Props> = ({ activities, onChange }) => {
  const handleAdd = () => {
    const newActivity: Activity = {
      id: Date.now().toString(),
      organization: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...activities, newActivity]);
  };

  const handleUpdate = (id: string, field: keyof Activity, value: string) => {
    const updated = activities.map(act => 
      act.id === id ? { ...act, [field]: value } : act
    );
    onChange(updated);
  };

  const handleRemove = (id: string) => {
    onChange(activities.filter(act => act.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {activities.map((act, index) => (
        <div key={act.id} style={{ padding: '1rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', position: 'relative' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Activity #{index + 1}</h4>
            <button 
              onClick={() => handleRemove(act.id)}
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
                placeholder="Organization / Club Name" 
                value={act.organization}
                onChange={(e) => handleUpdate(act.id, 'organization', e.target.value)}
              />
            </div>
            
            <div style={{ gridColumn: '1 / -1' }}>
              <input 
                className="glass-input" 
                placeholder="Role / Position" 
                value={act.role}
                onChange={(e) => handleUpdate(act.id, 'role', e.target.value)}
              />
            </div>

            <div>
              <input 
                className="glass-input" 
                placeholder="Start Date" 
                value={act.startDate}
                onChange={(e) => handleUpdate(act.id, 'startDate', e.target.value)}
              />
            </div>

            <div>
              <input 
                className="glass-input" 
                placeholder="End Date" 
                value={act.endDate}
                onChange={(e) => handleUpdate(act.id, 'endDate', e.target.value)}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <textarea 
                className="glass-input" 
                placeholder="Description of activities..." 
                style={{ minHeight: '100px', resize: 'vertical' }}
                value={act.description}
                onChange={(e) => handleUpdate(act.id, 'description', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button onClick={handleAdd} className="glass-button secondary" style={{ width: '100%' }}>
        <Plus size={18} />
        Add Activity
      </button>
    </div>
  );
};

export default ActivitiesForm;
