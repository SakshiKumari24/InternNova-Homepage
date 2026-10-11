export interface DomainTrack {
  id: string;
  title: string;
  category: 'all' | 'development' | 'ai-data' | 'security' | 'cloud';
  categoryLabel: string;
  badge?: string;
  isPopular?: boolean;
  shortDesc: string;
  durationBasic: string;
  durationPro: string;
  rating: number;
  reviewCount: number;
  enrolledStudents: number;
  techStack: string[];
  capstoneProjects: string[];
  highlights: string[];
  perks: string[];
  nextCohort: string;
  syllabusWeeks: { week: string; topic: string }[];
}

export interface Workshop {
  id: string;
  title: string;
  speaker: string;
  speakerRole: string;
  speakerCompany: string;
  date: string;
  time: string;
  tag: string;
  attendees: number;
  isLive?: boolean;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  collegeOrCompany: string;
  domain: 'development' | 'ai-data' | 'security';
  domainLabel: string;
  rating: number;
  reviewText: string;
  projectBuilt: string;
  avatarUrl: string;
  placedAt?: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const STATS_DATA = [
  { label: 'Active & Alumni Interns', value: '28,400+', change: '+18% this month' },
  { label: 'Verified Partner Hiring Pool', value: '180+', change: 'Startups & MNCs' },
  { label: 'Avg Rating from Graduates', value: '4.91 / 5', change: 'Based on 4,200+ reviews' },
  { label: 'Placement & Internship Rate', value: '93.6%', change: 'Post-capstone completion' },
];

export const UNIVERSITY_PARTNERS = [
  { name: 'IIT Delhi', tag: 'Alumni Network' },
  { name: 'BITS Pilani', tag: 'Partner Chapter' },
  { name: 'NIT Trichy', tag: 'Campus Cohort' },
  { name: 'VIT Vellore', tag: 'Certified Club' },
  { name: 'DTU Delhi', tag: 'Campus Partner' },
  { name: 'IIIT Hyderabad', tag: 'Research Circle' },
];

export const HIRING_PARTNERS = [
  'Google Cloud', 'Microsoft', 'Amazon', 'Razorpay', 'Swiggy', 'Zomato', 'Postman', 'Cred'
];

export const DOMAINS_DATA: DomainTrack[] = [
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Development (MERN & Next.js)',
    category: 'development',
    categoryLabel: 'Development',
    badge: 'Most Popular',
    isPopular: true,
    shortDesc: 'Master modern frontend architectures, scalable Node.js microservices, and distributed databases with production deployments.',
    durationBasic: '4 Weeks (Foundational Capstone)',
    durationPro: '10 Weeks (Production System + 1:1 Mentorship)',
    rating: 4.9,
    reviewCount: 1420,
    enrolledStudents: 9240,
    techStack: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    capstoneProjects: [
      'Multi-tenant SaaS Workspace with Stripe Billing',
      'Real-time Collaborative Canvas with WebSockets',
      'High-throughput URL Shortener with Redis Caching'
    ],
    highlights: [
      'Industry-grade Git flow & PR code reviews',
      'Optimized SSR & Edge Rendering strategies',
      'CI/CD deployment on Vercel & AWS ECS'
    ],
    perks: ['Verified ISO/MSME Certificate', 'Letter of Recommendation', 'Performance Stipend up to ₹15,000'],
    nextCohort: 'Starts Oct 24, 2026',
    syllabusWeeks: [
      { week: 'Week 1-2', topic: 'Modern React 19, TypeScript, State Architecture & Design Tokens' },
      { week: 'Week 3-4', topic: 'REST & GraphQL APIs, Node.js Runtime, Prisma ORM & PostgreSQL' },
      { week: 'Week 5-7', topic: 'Authentication (NextAuth/Clerk), Dockerized Services & Redis Queues' },
      { week: 'Week 8-10', topic: 'Performance Audits, CI/CD Pipelines & Capstone Defense' }
    ]
  },
  {
    id: 'ai-ml-engineering',
    title: 'Artificial Intelligence & Machine Learning',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    badge: 'Trending High',
    isPopular: true,
    shortDesc: 'Build end-to-end ML pipelines, fine-tune open-source LLMs with LoRA, and deploy computer vision and NLP models to production APIs.',
    durationBasic: '4 Weeks (Supervised & Unsupervised ML)',
    durationPro: '12 Weeks (Deep Learning, LLMs & MLOps)',
    rating: 4.95,
    reviewCount: 1180,
    enrolledStudents: 7450,
    techStack: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'MLflow', 'LangChain', 'Vector DBs'],
    capstoneProjects: [
      'Retrieval-Augmented Generation (RAG) Legal Assistant',
      'Autonomous Medical Image Classification with CNNs',
      'Real-time Fraud Detection Engine on Streaming Data'
    ],
    highlights: [
      'Hands-on GPU training clusters access',
      'Prompt engineering & fine-tuning Llama/Mistral models',
      'MLOps pipeline with automated model registry'
    ],
    perks: ['Verified AI Specialization Certificate', 'Co-authored Technical Case Study', 'Direct Referral Pool'],
    nextCohort: 'Starts Oct 28, 2026',
    syllabusWeeks: [
      { week: 'Week 1-3', topic: 'Mathematical Foundations, NumPy/Pandas & Feature Engineering' },
      { week: 'Week 4-6', topic: 'Deep Learning with PyTorch, CNNs, Transformers Architecture' },
      { week: 'Week 7-9', topic: 'RAG Systems, Vector Embeddings & Quantized LLM Fine-tuning' },
      { week: 'Week 10-12', topic: 'Model Serving via FastAPI, Docker & MLOps Monitoring' }
    ]
  },
  {
    id: 'data-analytics-bi',
    title: 'Data Analytics & Business Intelligence',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    shortDesc: 'Transform raw enterprise telemetry into actionable executive decisions using advanced SQL, Python analytics, and interactive Tableau/Power BI dashboards.',
    durationBasic: '4 Weeks (SQL & Analytical Dashboards)',
    durationPro: '8 Weeks (Predictive Analytics & Executive BI)',
    rating: 4.88,
    reviewCount: 890,
    enrolledStudents: 5600,
    techStack: ['Advanced SQL', 'Python (Pandas, Seaborn)', 'Power BI', 'Tableau', 'Snowflake', 'Excel Modeling'],
    capstoneProjects: [
      'Omnichannel E-commerce Customer Retention & Churn Analysis',
      'FinTech Credit Risk Scoring & Default Prediction Model',
      'Real-time Supply Chain Logistical Health Dashboard'
    ],
    highlights: [
      'Live query optimization on million-row datasets',
      'Executive-ready storytelling & KPI framework',
      'Automated ETL pipelines'
    ],
    perks: ['Accredited Business Analytics Credential', 'Portfolio of 3 Production Dashboards', 'Alumni Mentorship'],
    nextCohort: 'Starts Nov 02, 2026',
    syllabusWeeks: [
      { week: 'Week 1-2', topic: 'Complex SQL Window Functions, CTEs, Joins & Query Tuning' },
      { week: 'Week 3-4', topic: 'Exploratory Data Analysis with Python & Statistical Testing' },
      { week: 'Week 5-6', topic: 'Interactive Visuals, DAX Calculations & Executive Storyboards' },
      { week: 'Week 7-8', topic: 'Data Warehousing Basics & Final Capstone Presentation' }
    ]
  },
  {
    id: 'cyber-security-pentesting',
    title: 'Cyber Security & Offensive Penetration Testing',
    category: 'security',
    categoryLabel: 'Security',
    badge: 'High Demand',
    shortDesc: 'Conduct vulnerability assessments, web application penetration tests, network traffic forensics, and implement Zero-Trust defensive hardening.',
    durationBasic: '4 Weeks (Network Basics & OWASP Top 10)',
    durationPro: '10 Weeks (Ethical Hacking & Cloud Security)',
    rating: 4.92,
    reviewCount: 740,
    enrolledStudents: 4100,
    techStack: ['Kali Linux', 'Burp Suite Pro', 'Wireshark', 'Metasploit', 'Nmap', 'Python Scripting', 'AWS IAM'],
    capstoneProjects: [
      'Full-scope Penetration Test on vulnerable Fintech sandbox',
      'Automated Vulnerability Scanner CLI in Python',
      'Incident Response & Forensic Memory Dump Analysis'
    ],
    highlights: [
      'Dedicated sandbox target machines & CTF challenges',
      'Standardized industry bug bounty reporting format',
      'Defense-in-depth security principles'
    ],
    perks: ['Certified Ethical Security Intern Badge', 'Hands-on CTF Leaderboard Ranking', 'MSME Verified Credential'],
    nextCohort: 'Starts Oct 26, 2026',
    syllabusWeeks: [
      { week: 'Week 1-2', topic: 'Linux Internals, TCP/IP Suite & Network Reconnaissance' },
      { week: 'Week 3-5', topic: 'OWASP Top 10 Exploitation (SQLi, XSS, SSRF, IDOR)' },
      { week: 'Week 6-8', topic: 'Privilege Escalation, Active Directory & Cloud Auditing' },
      { week: 'Week 9-10', topic: 'Defense Hardening, SIEM Analysis & Formal Pen-test Report' }
    ]
  },
  {
    id: 'cloud-devops-sre',
    title: 'Cloud Engineering & DevOps Infrastructure',
    category: 'cloud',
    categoryLabel: 'Cloud & DevOps',
    shortDesc: 'Automate containerized microservices deployment, configure multi-region Kubernetes clusters, and codify infrastructure using Terraform and GitHub Actions.',
    durationBasic: '4 Weeks (Docker, Linux & CI/CD)',
    durationPro: '10 Weeks (Kubernetes, Terraform & AWS Cloud)',
    rating: 4.89,
    reviewCount: 520,
    enrolledStudents: 3200,
    techStack: ['AWS Cloud', 'Docker', 'Kubernetes (k8s)', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
    capstoneProjects: [
      'Zero-Downtime Blue/Green Deployment Pipeline on AWS EKS',
      'Automated Multi-Tier Infrastructure as Code with Terraform',
      'Enterprise Observability Stack with Prometheus & Grafana'
    ],
    highlights: [
      'Real AWS Sandbox environment credits',
      'Production incident response simulation drills',
      'GitOps workflow best practices'
    ],
    perks: ['DevOps Engineer Certificate', 'Infrastructure Architect Portfolio', 'Mock SRE Interviews'],
    nextCohort: 'Starts Nov 05, 2026',
    syllabusWeeks: [
      { week: 'Week 1-2', topic: 'Linux Administration, Bash Scripting & Containerization with Docker' },
      { week: 'Week 3-5', topic: 'CI/CD Pipelines, GitHub Actions & Automated Testing Gates' },
      { week: 'Week 6-8', topic: 'Kubernetes Pods, Services, Ingress & Helm Charts' },
      { week: 'Week 9-10', topic: 'Infrastructure as Code (Terraform) & Production Monitoring' }
    ]
  },
  {
    id: 'mobile-app-flutter',
    title: 'Cross-Platform Mobile Development (Flutter & React Native)',
    category: 'development',
    categoryLabel: 'Development',
    shortDesc: 'Craft sleek, native-performance iOS and Android mobile experiences with offline caching, push notifications, and seamless REST/GraphQL syncing.',
    durationBasic: '4 Weeks (UI Components & State)',
    durationPro: '8 Weeks (Production App with App Store readiness)',
    rating: 4.87,
    reviewCount: 460,
    enrolledStudents: 2800,
    techStack: ['Flutter / Dart', 'React Native', 'Firebase', 'SQLite', 'Bloc / Riverpod', 'RESTful APIs'],
    capstoneProjects: [
      'Hyperlocal Food Delivery App with Live Driver GPS Tracking',
      'Personal Finance & Expense Manager with Offline Sync',
      'Social Fitness Tracker with Apple Health / Google Fit sync'
    ],
    highlights: [
      'Cross-platform responsive design for all screen densities',
      'Biometric authentication & local hardware sensors',
      'Play Store & App Store deployment guidelines'
    ],
    perks: ['Mobile App Developer Credential', 'Live Published App on Play Store', 'Mentorship Sessions'],
    nextCohort: 'Starts Nov 08, 2026',
    syllabusWeeks: [
      { week: 'Week 1-2', topic: 'Mobile UI Paradigms, Widgets, Animations & Responsive Layouts' },
      { week: 'Week 3-4', topic: 'State Management (Riverpod / Redux) & Navigation Stacks' },
      { week: 'Week 5-6', topic: 'Hardware APIs, Push Notifications, Local Caching & Background Tasks' },
      { week: 'Week 7-8', topic: 'App Security, Release Build Optimization & Store Publishing' }
    ]
  }
];

export const MENTORSHIP_STEPS = [
  {
    step: '01',
    title: 'Skill Assessment & Cohort Match',
    description: 'Begin with an automated diagnostic test to match your current baseline. Get paired into small cohort squads of 5-6 peers with a dedicated senior mentor.',
    tag: 'Day 1 to 3'
  },
  {
    step: '02',
    title: 'Sprint-Based Capstone Challenges',
    description: 'Work on actual enterprise user stories rather than generic tutorials. Follow industry Kanban boards, submit GitHub PRs, and tackle edge cases.',
    tag: 'Weeks 1 to 4'
  },
  {
    step: '03',
    title: '1:1 Code Reviews & Live Office Hours',
    description: 'Receive line-by-line feedback on code architecture, security holes, and runtime complexity from engineers working at top tech firms.',
    tag: 'Weekly Syncs'
  },
  {
    step: '04',
    title: 'Verified Credential & Career Referral',
    description: 'Defend your capstone in front of a mentor panel. Earn a verifiable MSME-recognized credential, Letter of Recommendation, and direct referral access.',
    tag: 'Graduation'
  }
];

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'ws-1',
    title: 'Architecting Event-Driven Microservices with Kafka & Go',
    speaker: 'Aman Sharma',
    speakerRole: 'Staff Platform Engineer',
    speakerCompany: 'Ex-Razorpay',
    date: 'Oct 18, 2026',
    time: '6:30 PM - 8:30 PM IST',
    tag: 'System Design',
    attendees: 420,
    isLive: true,
    imageAlt: 'Kafka Microservices'
  },
  {
    id: 'ws-2',
    title: 'Fine-Tuning Open Source LLMs on Custom Enterprise Data',
    speaker: 'Dr. Priya Nambiar',
    speakerRole: 'Lead AI Scientist',
    speakerCompany: 'Fractal Analytics',
    date: 'Oct 22, 2026',
    time: '7:00 PM - 9:00 PM IST',
    tag: 'Generative AI',
    attendees: 580,
    imageAlt: 'LLM Fine-tuning'
  },
  {
    id: 'ws-3',
    title: 'Live Frontend Machine Coding: Building Figma from Scratch',
    speaker: 'Rohan Verma',
    speakerRole: 'Senior Frontend Architect',
    speakerCompany: 'BrowserStack',
    date: 'Oct 27, 2026',
    time: '5:00 PM - 7:30 PM IST',
    tag: 'Frontend Mastery',
    attendees: 640,
    imageAlt: 'Machine Coding'
  },
  {
    id: 'ws-4',
    title: 'Web Application Penetration Testing: Bypassing WAFs & OAuth',
    speaker: 'Sneha Kapur',
    speakerRole: 'Principal Security Researcher',
    speakerCompany: 'Bugcrowd Top 50',
    date: 'Nov 01, 2026',
    time: '6:00 PM - 8:00 PM IST',
    tag: 'Cyber Security',
    attendees: 390,
    imageAlt: 'Pentesting Workshop'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ananya Mukherjee',
    role: 'Full Stack SDE Intern',
    collegeOrCompany: 'Placed at Swiggy (NIT Durgapur 2025)',
    domain: 'development',
    domainLabel: 'Web Development',
    rating: 5,
    reviewText: 'Before InternNova, my GitHub had regular calculator and clone projects that never got shortlisted. During the Pro cohort, we built a real multi-tenant SaaS. My interviewer spent 25 minutes discussing my Redis caching and database indexing from that exact project!',
    projectBuilt: 'Multi-Tenant Collaborative Kanban Engine',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    placedAt: 'Swiggy',
    verified: true
  },
  {
    id: 't-2',
    name: 'Karthik Raja',
    role: 'Machine Learning Associate',
    collegeOrCompany: 'Placed at Zomato (VIT Chennai 2024)',
    domain: 'ai-data',
    domainLabel: 'AI & Machine Learning',
    rating: 5,
    reviewText: 'The mentorship at InternNova is unmatched. Instead of dry theoretical slideshows, we worked directly with Hugging Face transformers, fine-tuned LoRA weights, and deployed to AWS. The code review comments pushed my standards to an industry-ready level.',
    projectBuilt: 'Autonomous Medical RAG Assistant',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    placedAt: 'Zomato',
    verified: true
  },
  {
    id: 't-3',
    name: 'Riddhi Patel',
    role: 'Cyber Security Analyst',
    collegeOrCompany: 'Placed at Deloitte Cyber Risk (Nirma Univ)',
    domain: 'security',
    domainLabel: 'Cyber Security',
    rating: 5,
    reviewText: 'Finding legitimate hands-on cyber security internships in India is tough. InternNova gave us dedicated sandbox lab environments to run Burp Suite and simulate realistic OWASP top 10 exploits. The MSME-verified certificate and detailed capstone report helped me crack Deloitte!',
    projectBuilt: 'Zero-Trust Sandbox Penetration Audit',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    placedAt: 'Deloitte',
    verified: true
  },
  {
    id: 't-4',
    name: 'Devendra Joshi',
    role: 'Data Analyst Intern',
    collegeOrCompany: 'Placed at Razorpay (BITS Pilani)',
    domain: 'ai-data',
    domainLabel: 'Data Analytics',
    rating: 5,
    reviewText: 'The SQL challenges on million-row mock tables taught me query optimizations that college never covered. I created 3 comprehensive dashboards in Tableau and Power BI that immediately demonstrated business thinking to my hiring manager.',
    projectBuilt: 'Customer Churn & Retention Cohort Model',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    placedAt: 'Razorpay',
    verified: true
  },
  {
    id: 't-5',
    name: 'Tanvi Saxena',
    role: 'Frontend Engineer',
    collegeOrCompany: 'Placed at Postman (DTU Delhi 2025)',
    domain: 'development',
    domainLabel: 'Web Development',
    rating: 5,
    reviewText: 'The contrast between InternNova and random video courses is the accountability. Having weekly deadlines, code reviews by actual staff engineers, and mock technical grilling prepared me for fast-paced startup rounds.',
    projectBuilt: 'Figma-like Real-time Vector Whiteboard',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    placedAt: 'Postman',
    verified: true
  },
  {
    id: 't-6',
    name: 'Sahil Kulkarni',
    role: 'Cloud & DevOps Intern',
    collegeOrCompany: 'Placed at Jio Cloud Systems (COEP Pune)',
    domain: 'development',
    domainLabel: 'Cloud & DevOps',
    rating: 5,
    reviewText: 'Configuring Kubernetes pods and Terraform scripts on real cloud infrastructure gave me tremendous confidence. I could talk through my CI/CD deployment pipelines effortlessly during interviews.',
    projectBuilt: 'Automated Multi-Region EKS Deployment',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    placedAt: 'Jio Platforms',
    verified: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General & Eligibility',
    question: 'Who is eligible to apply for InternNova internships?',
    answer: 'Any student enrolled in an undergraduate or postgraduate program (B.Tech, BCA, MCA, B.Sc, M.Sc, etc.) as well as early career graduates and self-taught developers can apply. We welcome learners from all engineering disciplines and graduation years across India.'
  },
  {
    id: 'faq-2',
    category: 'Internship Structure',
    question: 'What is the key difference between the Basic and Pro Internship tracks?',
    answer: 'The Basic Track (4 weeks) is designed for students seeking structured hands-on project experience with task checklists, automated validation, and a verifiable certificate. The Pro Track (8–12 weeks) includes 1:1 live mentor code reviews, production-grade capstone design, mock technical interviews, performance stipend eligibility up to ₹15,000, and direct referrals to hiring partners.'
  },
  {
    id: 'faq-3',
    category: 'Certification & Verification',
    question: 'Are InternNova certificates verifiable and recognized by universities?',
    answer: 'Yes! Every certificate issued by InternNova features a unique verifiable cryptographic credential ID (e.g., IN-2026-8841). Anyone, including your college training & placement cell or hiring managers, can verify its authenticity instantly on our Student Corner verification portal. InternNova is an MSME-registered enterprise compliant with standard industry internship protocols.'
  },
  {
    id: 'faq-4',
    category: 'Stipends & Rewards',
    question: 'How does the performance-based stipend work?',
    answer: 'In the Pro Internship Cohorts, interns are evaluated by mentors on code quality, task velocity, architecture decisions, and capstone presentation. Top performers receive a merit-based stipend of up to ₹15,000 along with an exclusive Letter of Recommendation (LOR) from our lead engineering mentors.'
  },
  {
    id: 'faq-5',
    category: 'Time Commitment',
    question: 'Can I balance this internship with regular college classes and exams?',
    answer: 'Absolutely. InternNova is built specifically around college schedules. All live mentoring office hours and workshops are scheduled during weekday evenings (after 6:30 PM IST) and on weekends. Task submissions are asynchronous with weekly milestones, and flexible leave extensions are available during semester exam periods.'
  },
  {
    id: 'faq-6',
    category: 'Mentorship & Support',
    question: 'What kind of support is provided if I get stuck while coding?',
    answer: 'You have access to a dedicated 24/7 technical doubt-resolution community on Discord/Slack, daily TA office hours, and weekly 1:1 screen-share debugging sessions with senior mentors. You will never be left stranded with a broken build or confusing bug.'
  }
];

export const SAMPLE_CERTIFICATES: Record<string, { student: string; domain: string; date: string; grade: string; mentor: string }> = {
  'IN-2026-8841': {
    student: 'Aarav Sharma',
    domain: 'Full Stack Web Development (MERN)',
    date: 'September 28, 2026',
    grade: 'A+ (Merit with Distinction)',
    mentor: 'Vikramaditya Sengupta (Staff SDE)'
  },
  'IN-2026-7290': {
    student: 'Meera Namboodiri',
    domain: 'Artificial Intelligence & Machine Learning',
    date: 'October 02, 2026',
    grade: 'A+ (Honors Capstone)',
    mentor: 'Dr. Priya Nambiar (Lead AI Scientist)'
  },
  'IN-2026-4412': {
    student: 'Rohan Deshmukh',
    domain: 'Cyber Security & Ethical Hacking',
    date: 'August 14, 2026',
    grade: 'A (Top 5% Pentest Score)',
    mentor: 'Sneha Kapur (Principal Security Lead)'
  }
};
