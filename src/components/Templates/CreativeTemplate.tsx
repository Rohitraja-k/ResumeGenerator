import React from 'react';
import type { ResumeData } from '../../types/resume';

const CreativeTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div style={{ fontFamily: '"Outfit", sans-serif', color: '#111827', position: 'relative', minHeight: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#fff' }}>
      {/* Decorative Header */}
      <div style={{ height: '120px', background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
      
      <div style={{ position: 'relative', zIndex: 1, padding: '3rem 3rem' }}>
        <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {data.personalInfo.fullName}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: '#6b7280', fontSize: '0.95rem', fontWeight: 500 }}>
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
            {data.personalInfo.github && <span>{data.personalInfo.github}</span>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
          {/* Left Column */}
          <div>
            {data.summary && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#3b82f6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '20px', height: '4px', background: '#3b82f6', borderRadius: '2px' }}></span> About Me
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#4b5563' }}>{data.summary}</p>
              </div>
            )}
            
            {data.skills.length > 0 && (
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#10b981', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '20px', height: '4px', background: '#10b981', borderRadius: '2px' }}></span> Skills
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {data.skills.map(skill => (
                    <span key={skill} style={{ background: '#f3f4f6', color: '#374151', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 500 }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div>
            {data.experience.length > 0 && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid #3b82f6' }}></span> Experience
                </h2>
                <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {data.experience.map(exp => (
                    <div key={exp.id} style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-1.85rem', top: '0.3rem', width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6' }}></div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>{exp.position}</h3>
                      <div style={{ color: '#3b82f6', fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>{exp.company}</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{exp.startDate} - {exp.endDate}</div>
                      <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.education.length > 0 && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid #10b981' }}></span> Education
                </h2>
                <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {data.education.map(edu => (
                    <div key={edu.id} style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-1.85rem', top: '0.3rem', width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                      <div style={{ color: '#10b981', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{edu.institution}</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: 500}}>
                        {edu.startDate} - {edu.endDate} {edu.gpa && ` | GPA: ${edu.gpa}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.projects && data.projects.length > 0 && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid #f59e0b' }}></span> Projects
                </h2>
                <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {data.projects.map(proj => (
                    <div key={proj.id} style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-1.85rem', top: '0.3rem', width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>{proj.name}</h3>
                      <div style={{ color: '#f59e0b', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{proj.technologies}</div>
                      {proj.link && <div style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem' }}>{proj.link}</div>}
                      <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.activities && data.activities.length > 0 && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid #8b5cf6' }}></span> Activities
                </h2>
                <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {data.activities.map(act => (
                    <div key={act.id} style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-1.85rem', top: '0.3rem', width: '12px', height: '12px', borderRadius: '50%', background: '#8b5cf6' }}></div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>{act.role}</h3>
                      <div style={{ color: '#8b5cf6', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{act.organization}</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{act.startDate} - {act.endDate}</div>
                      <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{act.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.certifications && data.certifications.length > 0 && (
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid #ef4444' }}></span> Certifications
                </h2>
                <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {data.certifications.map(cert => (
                    <div key={cert.id} style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-1.85rem', top: '0.3rem', width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>{cert.name}</h3>
                      <div style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{cert.issuer}</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cert.date}</div>
                      {cert.link && <div style={{ color: '#6b7280', fontSize: '0.85rem' }}>{cert.link}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
