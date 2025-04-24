import { NavItem, Feature, SocialLink, Technology } from '../types';

export const API_URL = 'https://movie-genre-api.onrender.com';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Demo', href: '#demo' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    title: 'AI-Powered Prediction',
    description: 'Leveraging DistilBERT, a lightweight transformer model, to accurately predict multiple movie genres from textual descriptions.',
    icon: 'Sparkles',
  },
  {
    title: 'Real-time Analysis',
    description: 'Get instant predictions for your movie descriptions, allowing for quick iteration and refinement.',
    icon: 'Zap',
  },
  {
    title: 'Multi-Genre Classification',
    description: 'Unlike simplistic tools, our predictor can identify multiple genres that apply to a single movie description.',
    icon: 'Tags',
  },
  {
    title: 'Modern Architecture',
    description: 'Built with a React frontend and FastAPI backend, ensuring speed, reliability, and scalability.',
    icon: 'Layers',
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'DistilBERT',
    description: 'A lightweight transformer model fine-tuned for multi-label genre classification, offering excellent performance with reduced computational demands.',
    icon: 'Brain',
  },
  {
    name: 'FastAPI',
    description: 'Modern, high-performance web framework for building APIs with Python, providing the backend infrastructure for our prediction service.',
    icon: 'Server',
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces, powering our responsive and interactive frontend experience.',
    icon: 'Code',
  },
  {
    name: 'Docker',
    description: 'Containerization technology used to package and deploy our application consistently across different environments.',
    icon: 'Package',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:manasjanapati@gmail.com',
    icon: 'Mail',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manas-janapati/',
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/manas-janapati',
    icon: 'Github',
  },
];

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Demo', href: '#demo' },
      { name: 'API', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
  },
];

export const SAMPLE_DESCRIPTIONS = [
  "In a dystopian future, a skilled hacker discovers a conspiracy that threatens humanity's last surviving city.",
  "A talented chef inherits her grandmother's rustic restaurant and must navigate between tradition and innovation while dealing with family dynamics.",
  "When mysterious signals from deep space reach Earth, a team of scientists races against time to prevent an impending alien invasion.",
  "During the 1920s, a determined detective investigates a series of art heists that seem to be connected to an underground supernatural society.",
  "Two unlikely friends embark on a cross-country road trip that turns into an adventure of self-discovery and unexpected friendship."
];