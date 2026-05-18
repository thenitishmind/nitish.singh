# Nitish Singh - Professional Portfolio

> A modern, fully responsive portfolio website showcasing data analysis expertise and full-stack development skills. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](./public/og-image.png)

## 👨‍💻 About

Professional portfolio for **Nitish Singh** - Data Analyst & Full-Stack Developer with expertise in:
- 📊 **Data Analysis**: Python, SQL, Power BI, Tableau, Excel
- 💻 **Full-Stack Development**: React, Next.js, Node.js, MERN Stack
- ☁️ **Cloud Technologies**: AWS & Azure Certified
- 🎯 **Business Intelligence**: ETL pipelines, dashboard creation, statistical analysis

## 🚀 Features

### Core Features
- ⚡️ **Next.js 14 App Router** - Latest React framework with server components
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe development
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🌓 **Dark/Light Mode** - Theme switching with next-themes
- 📱 **Mobile-First Design** - Fully responsive across all devices

### Advanced Features
- 🔗 **GitHub Integration** - Automatically fetches and displays projects
- 📊 **Data Analysis Projects** - Showcase of analytics work with metrics
- 📬 **Formspree Contact Form** - Functional contact form integration
- 🎯 **Interactive Skills Section** - Category filtering with animated progress bars
- ⏱️ **Timeline Experience** - Zigzag layout with animated cards
- 🎨 **Glassmorphism UI** - Modern glass-effect cards
- ⚡ **Performance Optimized** - Lighthouse score 90+, lazy loading, code splitting
- 🔍 **SEO Optimized** - Complete meta tags, Open Graph, structured data

## 📋 Sections

1. **Hero Section** 
   - Animated typing effect (Data Analyst, Full-Stack Developer, etc.)
   - Gradient border rotating profile image
   - Social links (Email, GitHub, LinkedIn, LeetCode)
   - Particle background animation

2. **About Me**
   - Dual role showcase (Data Analyst & Developer)
   - 4 highlight cards with gradient icons
   - Key skills badges
   - Education and statistics

3. **Work Experience**
   - Modern timeline layout with center line
   - Alternating card design
   - Role: Data Analyst at Bizloan India Pvt. Ltd.
   - Technologies and responsibilities

4. **Skills & Technologies**
   - 7 categories: Data Analysis, Frontend, Backend, Cloud, Database, Tools
   - 30+ skills with proficiency levels
   - Interactive filtering
   - Animated progress bars with icons

5. **Projects**
   - GitHub repository integration
   - 3 featured data analysis projects:
     - Sales Analytics Dashboard
     - Customer Behavior Analysis
     - Financial Data ETL Pipeline
   - Technology filters
   - Live demo and GitHub links

6. **Certifications**
   - AWS Certified Solutions Architect
   - Microsoft Azure Fundamentals
   - Professional badges

7. **Contact**
   - Formspree-integrated contact form
   - Direct contact information
   - Social media links
   - Email validation

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14.2.3
- **Language**: TypeScript 5.4.5
- **Styling**: Tailwind CSS 3.4.3
- **Animations**: Framer Motion 11.2.10
- **Icons**: React Icons 5.2.1
- **Forms**: @formspree/react
- **Typing Effect**: react-type-animation

### Development Tools
- **Linting**: ESLint
- **Package Manager**: npm
- **Version Control**: Git

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Git

### Quick Start

\`\`\`bash
# Clone the repository
git clone [https://github.com/thenitishmind/nitish-singh-professional.git](https://github.com/thenitishmind/nitish.singh.git)
cd nitish-singh-professional

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
\`\`\`

### Build for Production

\`\`\`bash
# Create optimized production build
npm run build

# Start production server
npm start
\`\`\`

## 🎨 Customization

### 1. Personal Information

Edit \`lib/utils.ts\`:

\`\`\`typescript
export const personalInfo = {
  name: 'Nitish Singh',
  email: 'imsinghnitish.09@gmail.com',
  phone: '+91 9318315030',
  location: 'Gurugram, India',
  github: 'https://github.com/thenitishmind',
  linkedin: 'https://linkedin.com/in/nitish-singh',
  leetcode: 'https://leetcode.com/u/Itsnitishsingh/',
};
\`\`\`

### 2. Work Experience

Update \`experiences\` array in \`lib/utils.ts\`:

\`\`\`typescript
export const experiences = [
  {
    company: 'Bizloan India Pvt. Ltd.',
    role: 'Data Analyst',
    duration: 'May 2025 - Present',
    location: 'Gurugram, India',
    description: [...],
    technologies: ['Python', 'SQL', 'Power BI'],
  },
];
\`\`\`

### 3. Skills

Modify \`skills\` array in \`lib/utils.ts\`:

\`\`\`typescript
export const skills = [
  { name: 'Python', category: 'data-analysis', proficiency: 92, icon: '🐍' },
  { name: 'SQL', category: 'data-analysis', proficiency: 90, icon: '🗄️' },
  // ... add more skills
];
\`\`\`

### 4. Projects

Add data analysis projects in \`lib/utils.ts\`:

\`\`\`typescript
export const dataAnalysisProjects = [
  {
    name: 'Your Project',
    description: 'Project description',
    technologies: ['Python', 'Pandas'],
    metrics: { dataPoints: '100K+' },
  },
];
\`\`\`

### 5. Theme Colors

Customize in \`tailwind.config.ts\`:

\`\`\`typescript
colors: {
  primary: {
    500: '#3b82f6', // Blue
  },
  secondary: {
    500: '#8b5cf6', // Purple
  },
}
\`\`\`

## 📧 Formspree Setup

The contact form is already integrated with Formspree (Form ID: \`mrekvprv\`).

To use your own Formspree form:

1. Create account at [Formspree.io](https://formspree.io)
2. Create a new form
3. Get your form ID
4. Update in \`components/Contact.tsx\`:

\`\`\`typescript
const [state, handleSubmit] = useForm("YOUR_FORM_ID");
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (see instructions below)
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Build Command: \`npm run build\`
   - Output Directory: \`.next\`
6. Click "Deploy"

### Deploy with Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
\`\`\`

### Environment Variables (Optional)

Add in Vercel dashboard or \`.env.local\`:

\`\`\`env
# GitHub Integration (for higher API limits)
GITHUB_TOKEN=your_github_token

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
\`\`\`

## 📁 Project Structure

\`\`\`
nitish-singh-professional/
├── app/
│   ├── api/
│   │   └── github/
│   │       └── route.ts          # GitHub API integration
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page
├── components/
│   ├── About.tsx                 # About section
│   ├── Certifications.tsx        # Certifications display
│   ├── Contact.tsx               # Contact form (Formspree)
│   ├── Experience.tsx            # Work experience timeline
│   ├── Footer.tsx                # Footer component
│   ├── Hero.tsx                  # Hero section
│   ├── Navbar.tsx                # Navigation bar
│   ├── Projects.tsx              # Projects showcase
│   └── Skills.tsx                # Skills section
├── lib/
│   └── utils.ts                  # Utility functions & data
├── public/
│   ├── img_01.png               # Profile image
│   └── ...                       # Other assets
├── types/
│   └── index.ts                  # TypeScript type definitions
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
\`\`\`

## 🔧 Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
\`\`\`

## 🎯 Performance

- ⚡ Lighthouse Score: 90+
- 📦 Code Splitting: Automatic
- 🖼️ Image Optimization: Next.js Image component
- ⏱️ Lazy Loading: React Intersection Observer
- 🎨 CSS Optimization: Tailwind CSS JIT compiler

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nitish Singh**
- 🌐 Portfolio: [nitishsingh.vercel.app](https://nitishsingh.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/nitish-singh](https://linkedin.com/in/nitish-singh)
- 🐙 GitHub: [@thenitishmind](https://github.com/thenitishmind)
- 💻 LeetCode: [Itsnitishsingh](https://leetcode.com/u/Itsnitishsingh/)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting platform
- Tailwind CSS for the utility framework
- Framer Motion for animations
- Formspree for form handling

---

<div align="center">
  <strong>⭐ Star this repo if you find it helpful!</strong>
  <br>
  Made with ❤️ by Nitish Singh
</div>
\`\`\`

## 📱 Responsive Breakpoints

- **sm**: 640px (Mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large Desktop)

## 🎯 Performance Tips

- Images are optimized with Next.js Image component
- Code splitting is automatic with Next.js
- Lazy loading for components using dynamic imports
- GitHub API responses are cached for 1 hour

## 📄 Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   └── github/
│   │       └── route.ts      # GitHub API integration
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── lib/
│   └── utils.ts              # Utility functions & data
├── types/
│   └── index.ts              # TypeScript types
├── public/
│   └── img_01.png            # Your profile image
├── tailwind.config.ts
├── tsconfig.json
└── package.json
\`\`\`

## 🔧 Technologies Used

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes
- **Type Animation**: react-type-animation
- **Deployment**: Vercel

## 📊 Lighthouse Scores Target

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Nitish Singh**

- GitHub: [@thenitishmind](https://github.com/thenitishmind)
- LinkedIn: [Nitish Singh](https://linkedin.com/in/nitish-singh)
- Email: imsinghnitish.09@gmail.com

## ⭐ Show Your Support


Give a ⭐️ if you like this project!
<!-- update 1 -->
---

Made with ❤️ by Nitish Singh

<!-- update 2 -->
