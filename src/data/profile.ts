import type { Profile } from '../types';

/**
 * SEED DATA — the single source of truth for the whole site.
 * No backend, no build-time fetch: this file is imported directly by
 * the frontend and rendered instantly.
 *
 * Content below was provided directly from your LinkedIn profile
 * (pasted resume/experience text) plus your live portfolio and GitHub
 * profile for photo/links. Edit this file any time your resume or
 * LinkedIn profile changes — the whole site updates from here.
 */
export const profile: Profile = {
  name: 'Mohamed Sajib (Sajeeb Ahmed)',
  title: 'Web & SEO Executive · Full-Stack Web Developer',
  location: 'Tejgaon, Dhaka, Bangladesh',
  summary:
    'Web & SEO Executive and Full-Stack Web Developer with 4+ years of experience building scalable web applications, optimizing digital experiences, and driving online growth. Expertise spans full-stack development (MERN & Java), technical SEO, enterprise web solutions, and digital brand communications — solving complex technical challenges and building products that combine excellent user experience with measurable business impact.',
  // NOTE: the previous LinkedIn CDN URLs were expiring signed links (e=1785369600,
  // i.e. 30 Jul 2026) and started returning 403 — the photo was broken site-wide.
  // GitHub's avatar endpoint is stable and does not expire.
  avatarUrl: 'https://avatars.githubusercontent.com/u/85227514?v=4',
  aboutPhotoUrl: 'https://avatars.githubusercontent.com/u/85227514?v=4',
  resumeUrl: 'https://drive.google.com/file/d/1_eGJ9YjbgHTWXermQmJrtp134vrWBTFy/view?usp=sharing',
  available: true,
  social: {
    linkedin: 'https://www.linkedin.com/in/sajeeb-ahmed/',
    github: 'https://github.com/sajeeb-ahmeed',
    twitter: 'https://twitter.com/j_eeb',
    email: 'sajeeb.web@gmail.com',
    phone: '+8801748402018',
    website: 'https://sajib.dev.cv/',
  },

  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Trainees Mentored', value: '80+' },
    { label: 'Completed Projects', value: '71' },
    { label: 'Satisfied Clients', value: '23' },
  ],

  services: [
    { title: 'Database Development' },
    { title: 'Custom Software Development' },
    { title: 'Web Development' },
    { title: 'Search Engine Optimization (SEO)' },
    { title: 'SaaS Development' },
    { title: 'Web Design' },
    { title: 'Enterprise Content Management' },
    { title: 'User Experience Design (UED)' },
    { title: 'IT Consulting' },
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Executive — Web & SEO, Brand & Communications',
      company: 'Harrington (Blitzkrieg Group)',
      location: 'Dhaka, Bangladesh',
      startDate: 'Jul 2026',
      endDate: 'Present',
      description: [
        "Lead the organization's web presence, developing, optimizing, and maintaining high-performance digital platforms that support business growth and brand visibility.",
        'Collaborate with cross-functional teams to deliver user-focused web solutions and execute technical SEO strategies.',
        'Drive website performance optimization, search visibility, content management, and digital branding initiatives using modern web technologies and data-driven insights.',
        'Contribute to strategic digital initiatives through full-stack development, analytics, and AI-assisted workflows.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Course Instructor — Web Design & Development',
      company: 'Chittagong Hill Tracts Development Board (CHTDB)',
      location: 'Chattogram, Bangladesh',
      startDate: 'Aug 2025',
      endDate: 'May 2026',
      description: [
        'Delivered intensive Web Design & Development training to 80+ trainees across multiple batches under the CHTDB ICT Skills Development Project.',
        'Designed and delivered a curriculum covering HTML5, CSS3, Bootstrap, JavaScript (ES6), React.js, Git, GitHub, and responsive design best practices.',
        'Mentored trainees through project-based learning, code reviews, and one-on-one technical guidance to prepare them for industry careers.',
        'Recognized with the Best Instructor Award for outstanding teaching performance and learner outcomes.',
      ],
    },
    {
      id: 'exp-3',
      role: 'Full-stack Developer',
      company: 'Biometrics-bd Ltd',
      location: 'Dhaka, Bangladesh',
      startDate: 'Jun 2022',
      endDate: 'Jul 2025',
      description: [
        'Developed secure login features and custom notification systems to enhance user authentication and engagement.',
        'Built intuitive interfaces for dealer beneficiary lists and registration application views.',
        'Designed accessible dealer registration profiles and engineered services for efficient registration processes.',
        'Developed web list interfaces for dealer withdrawals and services for food-friendly programs.',
        'Built APIs for food grain license management and user-centric application list interfaces.',
        'Implemented secure, user-friendly web payment solutions for license processing.',
      ],
    },
    {
      id: 'exp-4',
      role: 'Frontend Web Developer (Freelance, incl. Fiverr)',
      company: 'Self-employed',
      location: 'Remote',
      startDate: 'Jun 2020',
      endDate: 'May 2023',
      description: [
        'Designed and developed responsive web applications for clients using React.js, JavaScript, and CSS.',
        'Implemented Firebase authentication, Google Analytics, and other web technologies to enhance UX.',
        'Worked remotely with clients across multiple projects, maintaining quality and deadlines.',
      ],
    },
    {
      id: 'exp-5',
      role: 'Internship Trainee',
      company: 'Programming Hero',
      location: 'San Jose, California, United States (remote)',
      startDate: 'Dec 2021',
      endDate: 'Jun 2022',
      description: [
        'Completed the Complete Web Development course — HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript ES6, React.js, Firebase Authentication, and the MERN stack.',
        'Collaborated with peers on group projects, gaining experience in teamwork and problem-solving.',
      ],
    },
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor Degree, Department of Economics',
      institution: 'National University of Bangladesh',
      startDate: '2017',
      endDate: '2021',
    },
    {
      id: 'edu-2',
      degree: 'Higher Secondary Certificate (HSC) — Humanities',
      institution: 'Dhaka',
      startDate: '2013',
      endDate: '2015',
      details: 'GPA 4.69',
    },
    {
      id: 'edu-3',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Dhaka',
      startDate: '',
      endDate: '2013',
      details: 'GPA 5.00',
    },
  ],

  skills: [
    { category: 'Full-Stack Development', items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Bootstrap 5'], level: 92 },
    { category: 'Enterprise & Backend', items: ['Java', 'JSP', 'J2EE', 'Liferay DXP', 'REST APIs'], level: 85 },
    { category: 'Databases', items: ['MySQL', 'MongoDB', 'Oracle Database'], level: 80 },
    { category: 'SEO & Web Performance', items: ['Technical SEO', 'Google Analytics', 'Google Search Console', 'Performance Optimization'], level: 85 },
    { category: 'CMS & Platforms', items: ['WordPress', 'Enterprise Content Management','Liferay DXP 7.4'], level: 75 },
    { category: 'Tools & DevOps', items: ['Git', 'GitHub', 'Docker', 'Vite', 'Webpack', 'Vercel', 'Firebase', 'Linux', 'VS Code'], level: 88 },
    { category: 'Design Tools', items: ['Figma', 'Canva', 'Adobe Express', 'Sketch', 'VistaCreate'], level: 75 },
    { category: 'Other', items: ['AI-Assisted Development', 'Prompt Engineering', 'Digital Marketing', 'Brand Communications', 'UI/UX'], level: 78 },
  ],

  certificates: [
    {
      id: 'cert-1',
      title: 'Full Stack Web Development',
      issuer: 'Programming Hero',
      date: '2021',
    },
    {
      id: 'cert-2',
      title: 'JavaScript Certification',
      issuer: 'freeCodeCamp',
      date: '2020',
    },
  ],

  awards: [
    {
      id: 'award-1',
      title: 'Best Instructor Award',
      issuer: 'CHTDB ICT Skills Development Project',
      date: '2026',
      description:
        'Honored for outstanding performance delivering Web Design & Development training, mentoring aspiring developers, and achieving excellent learner outcomes.',
    },
  ],

  projects: [
    {
      id: 'proj-harrington-fieldops',
      name: 'Harrington Field Operations',
      description:
        "Internal field-sales platform for Harrington's Dhaka team: role-based employee access, canonical client records with one-client-one-catalog enforcement, visit logging, follow-ups, full audit history, and management reporting. Built on MongoDB multi-document transactions so client registration and catalog allocation stay consistent, with GridFS-backed private photo storage and signed HTTP-only session cookies.",
      tags: ['Full-Stack', 'Next.js', 'TypeScript', 'MongoDB'],
      // Internal company system — no public demo. Source link intentionally omitted;
      // see note in the handover if you'd rather link the repo publicly.
    },
    {
      id: 'proj-harrington-site',
      name: 'Harrington',
      description:
        'Corporate website for the Harrington group — product-led marketing site covering the sanitaryware range, built and maintained in-house with a focus on page performance and technical SEO.',
      tags: ['Web Development', 'SEO'],
      liveUrl: 'https://harrington.com.co/',
    },
    {
      id: 'proj-blitzkrieg-site',
      name: 'Blitzkrieg Group',
      description:
        'Group-of-companies corporate website presenting the parent brand and its business units, with a structured content model and search-optimised, responsive layouts.',
      tags: ['Web Development', 'SEO'],
      liveUrl: 'https://blitzkrieg.com.co/',
    },
    {
      id: 'proj-friends-dream',
      name: 'Friends Dream Society',
      description:
        'Management system for a cooperative society, rebuilt from a mock-data prototype into a full MERN application — JWT authentication, role-based admin access, and seeded member and settings data persisted on MongoDB.',
      tags: ['Full-Stack', 'MERN', 'MongoDB'],
      sourceUrl: 'https://github.com/sajeeb-ahmeed/fdsc',
    },
    {
      id: 'proj-e-exam',
      name: 'CHTDB E-Exam Platform',
      description:
        'Online examination platform built to support the CHTDB ICT training programme — trainees sit timed exams in the browser while instructors grade through a dedicated, role-gated teacher interface.',
      tags: ['Full-Stack', 'React', 'EdTech'],
      liveUrl: 'https://e-exam-tan.vercel.app',
      sourceUrl: 'https://github.com/sajeeb-ahmeed/e-exam',
    },
    {
      id: 'proj-1',
      name: 'Hanu Studios',
      description: 'Marketing site for a VFX/animation studio, built to showcase their work and services to prospective clients.',
      tags: ['Web Development'],
      liveUrl: 'https://www.hanustudios.com/',
      sourceUrl: 'https://github.com/sajeeb-ahmeed/hanu-studio',
    },
    {
      id: 'proj-2',
      name: 'Mordena Furniture',
      description: 'E-commerce style furniture storefront focused on a clean, modern browsing experience.',
      tags: ['Web Development', 'Client', 'Server'],
      liveUrl: 'https://analyzme-furniture.web.app/',
      sourceUrl: 'https://github.com/sajeeb-ahmeed/mordena-client',
    },
    {
      id: 'proj-3',
      name: 'Manufactured Nora',
      description: 'CRUD-driven web app for logistics and manufacturer management workflows.',
      tags: ['Web Development', 'Client', 'Server'],
      liveUrl: 'https://manufacture-hardware.web.app/',
      sourceUrl: 'https://github.com/sajeeb-ahmeed/manufacturer-managment-client',
    },
    {
      id: 'proj-4',
      name: 'Professional Photographer',
      description: 'Responsive single-page landing page template for a photography/fitness-style app.',
      tags: ['Web Design'],
      liveUrl: 'https://massio-2d3d0.web.app/',
      sourceUrl: 'https://github.com/sajeeb-ahmeed/professional-photoghraper',
    },
    {
      id: 'proj-5',
      name: 'Elena Exclusive',
      description: 'Virtual staging landing page for a real estate business, built with HTML, CSS, JavaScript and Bootstrap 5.',
      tags: ['Web Design'],
      liveUrl: 'https://decoria-staging.netlify.app/',
      sourceUrl: 'https://github.com/sajeeb-ahmeed/elena-exclusive',
    },
  ],

  testimonials: [
    {
      id: 't-1',
      name: 'James Ross',
      role: 'Executive Director, Kirzo Ltd.',
      quote: 'An extraordinary, multi-talented developer with vast knowledge and skills — communicates clearly and delivers work I was totally satisfied with.',
    },
    {
      id: 't-2',
      name: "Charles D'costa",
      role: 'Lead Instructor, Norman Institute',
      quote: 'My first time working with someone from Bangladesh — he understood exactly what I needed and how to get me a result I was happy with.',
    },
    {
      id: 't-3',
      name: 'Webbin Mabuse',
      role: 'CEO, Beijing Startups Inc.',
      quote: "Impressed by his portfolio and recent work, so I hired him to build my agency's website — really happy with the final result.",
    },
    {
      id: 't-4',
      name: 'Billy Simon',
      role: 'Co-Founder, Simon Brothers Ltd.',
      quote: 'Built an amazing, fast, modern and responsive website for my business — exactly what I needed to grow it.',
    },
    {
      id: 't-5',
      name: 'Jeremey Arthur',
      role: 'CEO, Jeremy IT & Business',
      quote: 'Found his work through his portfolio, hired him without hesitation, and would happily work with him again.',
    },
  ],
};
