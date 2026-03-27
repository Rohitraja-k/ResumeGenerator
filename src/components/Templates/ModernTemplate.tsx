import React from 'react';
import type { ResumeData } from '../../types/resume';

const ModernTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div style={{ fontFamily: '"Inter", sans-serif', color: '#1f2937', display: 'flex', minHeight: '100%', height: '100%' }}>
      {/* Left Sidebar */}
      <div style={{ width: '30%', backgroundColor: '#f3f4f6', padding: '3rem 1.5rem', borderRight: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.5rem', color: '#111827' }}>
            {data.personalInfo.fullName}
          </h1>
          
          <div style={{ marginTop: '2.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, borderBottom: '2px solid #3b82f6', paddingBottom: '0.25rem', marginBottom: '1.2rem', color: '#111827' }}>CONTACT</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#4b5563' }}>
              {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
              {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
              {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
              {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
              {data.personalInfo.linkedin && <div>{data.personalInfo.linkedin}</div>}
              {data.personalInfo.github && <div>{data.personalInfo.github}</div>}
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, borderBottom: '2px solid #3b82f6', paddingBottom: '0.25rem', marginBottom: '1.2rem', color: '#111827' }}>SKILLS</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: '#4b5563' }}>
              {data.skills.map((skill, idx) => (
                <div key={idx}>• {skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div style={{ width: '70%', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem' }}>
        {data.summary && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Summary</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#374151' }}>{data.summary}</p>
          </div>
        )}

        {data.experience.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827' }}>{exp.position}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 500, color: '#3b82f6', marginBottom: '0.5rem' }}>{exp.company}</div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5, color: '#4b5563', whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.education.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.education.map(edu => (
                <div key={edu.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111827' }}>{edu.degree}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#4b5563' }}>{edu.institution} {edu.gpa && <span style={{ color: '#9ca3af' }}>| GPA: {edu.gpa}</span>}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.projects && data.projects.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.projects.map(proj => (
                <div key={proj.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827' }}>{proj.name}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>{proj.technologies}</span>
                  </div>
                  {proj.link && <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#3b82f6', marginBottom: '0.5rem' }}>{proj.link}</div>}
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5, color: '#4b5563', whiteSpace: 'pre-wrap' }}>{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.activities && data.activities.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Activities</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.activities.map(act => (
                <div key={act.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827' }}>{act.role}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>{act.startDate} - {act.endDate}</span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 500, color: '#3b82f6', marginBottom: '0.5rem' }}>{act.organization}</div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5, color: '#4b5563', whiteSpace: 'pre-wrap' }}>{act.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.certifications && data.certifications.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Certifications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.certifications.map(cert => (
                <div key={cert.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111827' }}>{cert.name}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>{cert.date}</span>
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#4b5563' }}>{cert.issuer}</div>
                  {cert.link && <div style={{ fontSize: '0.85rem', color: '#3b82f6', marginTop: '0.25rem' }}>{cert.link}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
