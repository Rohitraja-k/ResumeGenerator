import React, { useState } from 'react';
import type { ResumeData } from '../../types/resume';
import PersonalInfoForm from './PersonalInfoForm';
import SummaryForm from './SummaryForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import { User, FileText, Briefcase, GraduationCap, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, isOpen, onToggle, children }) => {
  return (
    <div className="glass-panel" style={{ marginBottom: '1rem', overflow: 'hidden' }}>
      <button 
        onClick={onToggle}
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '1.25rem',
          background: isOpen ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          fontWeight: 500
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: 'var(--accent-primary)' }}>{icon}</span>
          {title}
        </div>
        {isOpen ? <ChevronUp size={20} color="var(--text-muted)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
      </button>
      
      {isOpen && (
        <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', animation: 'fadeIn 0.3s ease' }}>
          <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.25rem' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const EditorSidebar: React.FC<Props> = ({ data, onChange }) => {
  const [openSection, setOpenSection] = useState<string>('personal');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <AccordionItem 
        title="Personal Info" 
        icon={<User size={22} />} 
        isOpen={openSection === 'personal'} 
        onToggle={() => toggleSection('personal')}
      >
        <PersonalInfoForm 
          data={data.personalInfo} 
          onChange={(personalInfo: any) => onChange({ ...data, personalInfo })} 
        />
      </AccordionItem>

      <AccordionItem 
        title="Professional Summary" 
        icon={<FileText size={22} />} 
        isOpen={openSection === 'summary'} 
        onToggle={() => toggleSection('summary')}
      >
        <SummaryForm 
          summary={data.summary} 
          onChange={(summary: any) => onChange({ ...data, summary })} 
        />
      </AccordionItem>

      <AccordionItem 
        title="Experience" 
        icon={<Briefcase size={22} />} 
        isOpen={openSection === 'experience'} 
        onToggle={() => toggleSection('experience')}
      >
        <ExperienceForm 
          experience={data.experience} 
          onChange={(experience: any) => onChange({ ...data, experience })} 
        />
      </AccordionItem>

      <AccordionItem 
        title="Education" 
        icon={<GraduationCap size={22} />} 
        isOpen={openSection === 'education'} 
        onToggle={() => toggleSection('education')}
      >
        <EducationForm 
          education={data.education} 
          onChange={(education: any) => onChange({ ...data, education })} 
        />
      </AccordionItem>

      <AccordionItem 
        title="Skills" 
        icon={<Wrench size={22} />} 
        isOpen={openSection === 'skills'} 
        onToggle={() => toggleSection('skills')}
      >
        <SkillsForm 
          skills={data.skills} 
          onChange={(skills: any) => onChange({ ...data, skills })} 
        />
      </AccordionItem>
    </div>
  );
};

export default EditorSidebar;
