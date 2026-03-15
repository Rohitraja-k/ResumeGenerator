import React from 'react';
import type { ResumeData } from '../../types/resume';
import ModernTemplate from './ModernTemplate';
import ProfessionalTemplate from './ProfessionalTemplate';
import CreativeTemplate from './CreativeTemplate';
import ExecutiveTemplate from './ExecutiveTemplate';
import MinimalTemplate from './MinimalTemplate';

interface Props {
  data: ResumeData;
  template: 'modern' | 'professional' | 'creative' | 'executive' | 'minimal';
}

const TemplateRenderer: React.FC<Props> = ({ data, template }) => {
  switch (template) {
    case 'modern':
      return <ModernTemplate data={data} />;
    case 'professional':
      return <ProfessionalTemplate data={data} />;
    case 'creative':
      return <CreativeTemplate data={data} />;
    case 'executive':
      return <ExecutiveTemplate data={data} />;
    case 'minimal':
      return <MinimalTemplate data={data} />;
    default:
      return <ModernTemplate data={data} />;
  }
};

export default TemplateRenderer;
