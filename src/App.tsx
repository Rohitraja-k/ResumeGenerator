import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Download, LayoutTemplate, Settings2 } from 'lucide-react';
import { initialResumeData, type ResumeData } from './types/resume';

import EditorSidebar from './components/Editor/EditorSidebar';
import TemplateRenderer from './components/Templates/TemplateRenderer';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTemplate, setActiveTemplate] = useState<'modern' | 'professional' | 'creative' | 'executive' | 'minimal'>('modern');
  const [isEditing, setIsEditing] = useState(false);
  
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume`,
  });

  if (!isEditing) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        height: '100vh', width: '100vw', background: 'var(--bg-base)', color: 'white', textAlign: 'center', padding: '2rem'
      }}>
        <h1 style={{ fontSize: '5rem', marginBottom: '1rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 }}>
          ResumeBuilder
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Create a stunning, professional resume in minutes with our premium templates and easy-to-use editor.
        </p>
        <button className="glass-button" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem' }} onClick={() => setIsEditing(true)}>
          Create Resume
        </button>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Sidebar for editing data */}
      <div className="editor-sidebar no-print">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ background: 'var(--accent-gradient)', padding: '0.5rem', borderRadius: '8px', color: 'white', display: 'flex' }}>
            <Settings2 size={24} />
          </div>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>ResumeBuilder</h1>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Build a stunning resume and download as PDF.
        </p>

        {/* The comprehensive Editor sidebar component */}
        <div style={{ flex: 1, paddingBottom: '2rem' }}>
          <EditorSidebar data={resumeData} onChange={setResumeData} />
        </div>
      </div>

      {/* Main area for preview and controls */}
      <div className="preview-main">
        {/* Top bar controls */}
        <div className="top-bar glass-panel animate-fade-in no-print" style={{ 
          width: '100%', 
          maxWidth: '850px',
          padding: '1rem 1.5rem', 
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: '2rem',
          zIndex: 10
        }}>
          <button className="glass-button secondary" onClick={() => setIsEditing(false)} style={{ padding: '0.5rem 1rem' }}>
            ← Back
          </button>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <LayoutTemplate size={20} color="var(--accent-primary)" />
            <select 
              className="glass-input" 
              style={{ width: '200px', cursor: 'pointer' }}
              value={activeTemplate}
              onChange={(e) => setActiveTemplate(e.target.value as any)}
            >
              <option value="modern" style={{color: "black"}}>Modern Glass</option>
              <option value="professional" style={{color: "black"}}>Professional</option>
              <option value="creative" style={{color: "black"}}>Creative Minimal</option>
              <option value="executive" style={{color: "black"}}>Executive (ATS)</option>
              <option value="minimal" style={{color: "black"}}>Minimal Clean</option>
            </select>
          </div>
          
          <button className="glass-button" onClick={() => handlePrint()}>
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Live Preview Container */}
        <div className="preview-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* We wrap the TemplateRenderer in a div with the ref for printing */}
          <div ref={componentRef} style={{ height: '100%', minHeight: '1202px', width: '100%' }}>
             <TemplateRenderer data={resumeData} template={activeTemplate} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
