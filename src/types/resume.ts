export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

export const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    website: "janedoe.com",
    github: "github.com/janedoe",
    linkedin: "linkedin.com/in/janedoe",
  },
  summary: "Passionate software engineer with over 5 years of experience building scalable web applications. Expert in React, TypeScript, and modern CSS framing. Demonstrated history of improving performance and developing robust UI architectures.",
  experience: [
    {
      id: "1",
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      startDate: "Jan 2021",
      endDate: "Present",
      description: "Lead the frontend development of the flagship product using React and TypeScript. Improved the application performance by 40%. Mentored junior developers and instituted code review best practices.",
    },
    {
      id: "2",
      company: "Web Solutions LLC",
      position: "Web Developer",
      startDate: "Jun 2018",
      endDate: "Dec 2020",
      description: "Developed and maintained multiple client websites. Collaborated closely with UI/UX designers to implement responsive, pixel-perfect interfaces.",
    }
  ],
  education: [
    {
      id: "1",
      institution: "University of Technology",
      degree: "B.S. in Computer Science",
      startDate: "Aug 2014",
      endDate: "May 2018",
      gpa: "3.8/4.0",
    }
  ],
  skills: ["React", "TypeScript", "JavaScript (ES6+)", "CSS3 / Sass", "HTML5", "Node.js", "Git", "Webpack", "Vite", "Figma", "RESTful APIs", "GraphQL"],
};
