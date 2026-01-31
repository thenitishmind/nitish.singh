import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const personalInfo = {
  name: 'Nitish Singh',
  email: 'imsinghnitish.9@gmail.com',
  phone: '+91 9717113627',
  location: 'Gurugram, India',
  github: 'https://github.com/thenitishmind',
  linkedin: 'https://www.linkedin.com/in/nitish-kumar-85a860126/',
  leetcode: 'https://leetcode.com/u/Itsnitishsingh/',
  resume: '/resume.pdf',
  title: 'Full-Stack Developer | Cloud Enthusiast',
  bio: 'Passionate full-stack developer with expertise in MERN stack and cloud technologies. AWS & Azure certified professional with 2+ years of freelance experience building scalable web applications.',
};

export const experiences = [
  {
    id: 1,
    company: 'Bizloan India Pvt. Ltd.',
    role: 'Data Analyst',
    duration: 'May 2025 - Present',
    location: 'Gurugram, India',
    description: [
      'Analyzing large datasets to identify trends and patterns for business insights',
      'Creating interactive dashboards and reports using Power BI and Tableau',
      'Implementing data pipelines and ETL processes for data integration',
      'Collaborating with stakeholders to deliver data-driven solutions',
      'Performing statistical analysis and predictive modeling',
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel', 'Pandas', 'NumPy'],
    logo: '/logos/bizloan.png',
  },
  {
    id: 2,
    company: 'Freelance Developer',
    role: 'Full-Stack Developer',
    duration: '2022 - Present',
    location: 'Remote',
    description: [
      'Built 15+ custom web applications for clients across various industries',
      'Implemented responsive designs and modern UI/UX practices',
      'Deployed applications on AWS and Azure cloud platforms',
      'Provided ongoing maintenance and feature enhancements',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Azure'],
    logo: '/logos/freelance.png',
  },
];

export const skills = [
  // Data Analysis
  { name: 'Python', category: 'data-analysis', proficiency: 92, icon: '🐍' },
  { name: 'SQL', category: 'data-analysis', proficiency: 90, icon: '🗄️' },
  { name: 'Power BI', category: 'data-analysis', proficiency: 88, icon: '📊' },
  { name: 'Tableau', category: 'data-analysis', proficiency: 85, icon: '📈' },
  { name: 'Excel', category: 'data-analysis', proficiency: 95, icon: '📑' },
  { name: 'Pandas', category: 'data-analysis', proficiency: 90, icon: '🐼' },
  { name: 'NumPy', category: 'data-analysis', proficiency: 88, icon: '🔢' },
  { name: 'Matplotlib', category: 'data-analysis', proficiency: 82, icon: '📉' },
  
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 90, icon: '⚛️' },
  { name: 'Next.js', category: 'frontend', proficiency: 85, icon: '▲' },
  { name: 'TypeScript', category: 'frontend', proficiency: 85, icon: '📘' },
  { name: 'JavaScript', category: 'frontend', proficiency: 95, icon: '🟨' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, icon: '🎨' },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 90, icon: '🟢' },
  { name: 'Express.js', category: 'backend', proficiency: 88, icon: '🚂' },
  { name: 'REST APIs', category: 'backend', proficiency: 92, icon: '🔌' },
  
  // Cloud
  { name: 'AWS', category: 'cloud', proficiency: 85, icon: '☁️' },
  { name: 'Azure', category: 'cloud', proficiency: 80, icon: '🔷' },
  { name: 'Docker', category: 'cloud', proficiency: 78, icon: '🐳' },
  
  // Database
  { name: 'MongoDB', category: 'database', proficiency: 88, icon: '🍃' },
  { name: 'PostgreSQL', category: 'database', proficiency: 82, icon: '🐘' },
  { name: 'MySQL', category: 'database', proficiency: 85, icon: '🐬' },
  
  // Tools
  { name: 'Git', category: 'tools', proficiency: 90, icon: '📦' },
  { name: 'VS Code', category: 'tools', proficiency: 95, icon: '💻' },
  { name: 'Jupyter', category: 'tools', proficiency: 88, icon: '📓' },
];

export const dataAnalysisProjects = [
  {
    id: 'da1',
    name: 'Sales Analytics Dashboard',
    description: 'Interactive Power BI dashboard analyzing sales data across multiple regions with real-time KPIs, trend analysis, and predictive forecasting.',
    technologies: ['Power BI', 'SQL', 'Excel', 'Python'],
    features: [
      'Real-time sales tracking and KPI monitoring',
      'Regional performance comparison analysis',
      'Predictive sales forecasting using historical data',
      'Interactive filters and drill-down capabilities',
    ],
    metrics: {
      dataPoints: '500K+',
      regions: '15',
      accuracy: '94%',
    },
    image: '/projects/sales-dashboard.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/thenitishmind',
  },
  {
    id: 'da2',
    name: 'Customer Behavior Analysis',
    description: 'Comprehensive analysis of customer purchase patterns using Python and machine learning to identify trends and optimize marketing strategies.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Tableau'],
    features: [
      'Customer segmentation using clustering algorithms',
      'Purchase pattern analysis and visualization',
      'Churn prediction modeling',
      'Marketing ROI optimization insights',
    ],
    metrics: {
      customers: '100K+',
      segments: '8',
      retention: '+23%',
    },
    image: '/projects/customer-analysis.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/thenitishmind',
  },
  {
    id: 'da3',
    name: 'Financial Data ETL Pipeline',
    description: 'Automated ETL pipeline for processing financial data from multiple sources, performing data cleaning, transformation, and loading into data warehouse.',
    technologies: ['Python', 'SQL', 'Apache Airflow', 'PostgreSQL'],
    features: [
      'Automated data extraction from 10+ sources',
      'Data quality validation and error handling',
      'Scheduled batch processing with Airflow',
      'Comprehensive audit logging and monitoring',
    ],
    metrics: {
      records: '5M+',
      sources: '12',
      uptime: '99.8%',
    },
    image: '/projects/etl-pipeline.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/thenitishmind',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialUrl: '#',
    icon: 'aws',
  },
  {
    id: 2,
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    credentialUrl: '#',
    icon: 'azure',
  },
  {
    id: 3,
    name: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: '2022',
    credentialUrl: '#',
    icon: 'certificate',
  },
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Glocal University',
  duration: '2016 - 2019',
  location: 'India',
};
