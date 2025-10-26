import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import type { Project, Skill, Experience, SocialLink } from '../types';

export const personalInfo = {
  name: 'Vinicius Rosa de Lima',
  title: 'Desenvolvedor de Software',
  email: 'viniciusrosalima14@gmail.com',
  location: 'Recife, Pernambuco, Brasil',
  bio: 'Estudante de Ciência da Computação (6º período) e Estagiário de Desenvolvimento de Software no Bradesco. Experiência com backend em Java e Spring Boot, microserviços, integração de APIs e arquitetura em nuvem.',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/vinnyhbr',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/vinicius-rosa-de-lima',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:viniciusrosalima14@gmail.com',
    icon: FaEnvelope,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  
  // Backend
  { name: 'Java', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Kotlin', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'REST API', category: 'backend' },
  { name: 'Microservices', category: 'backend' },
  { name: 'JWT', category: 'backend' },
  
  // Databases
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Oracle Database', category: 'backend' },
  
  // Tools & DevOps
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Azure', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'CI/CD', category: 'tools' },
  { name: 'Spring Cloud', category: 'tools' },
  { name: 'Eureka', category: 'tools' },
  { name: 'OpenFeign', category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema Corporativo AI Atende',
    description: 'Dashboard corporativo desenvolvido com Java (backend) e React (frontend), integrado ao Kommo (amoCRM). Solução full stack com integração de APIs e boas práticas de arquitetura.',
    technologies: ['Java', 'React', 'Node.js', 'API Integration', 'Kommo'],
    githubUrl: 'https://github.com/viniciusrosa',
    featured: true,
  },
  {
    id: 2,
    title: 'Microserviços Horizon',
    description: 'Arquitetura de microserviços com Java 21 e Spring Boot. Implementação de REST APIs seguras com JWT, OpenFeign, Eureka e Spring Cloud Gateway. Integração com Google Maps API e deploy na Azure.',
    technologies: ['Java 21', 'Spring Boot', 'JWT', 'Microservices', 'Azure', 'Spring Cloud'],
    githubUrl: 'https://github.com/viniciusrosa',
    featured: true,
  },
  {
    id: 3,
    title: 'Sistema Backend Compass UOL',
    description: 'Desenvolvimento backend com Java, Spring Boot e bancos SQL/NoSQL. Implementação de microsserviços e cloud computing na AWS com boas práticas de versionamento.',
    technologies: ['Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'MongoDB', 'Microservices'],
    githubUrl: 'https://github.com/viniciusrosa',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Bradesco',
    position: 'Estagiário de Desenvolvimento de Software',
    period: 'Out/2025 - Atual',
    description: [
      'Desenvolvimento de soluções backend com Java e Spring Boot',
      'Trabalho com microserviços e arquitetura em nuvem',
      'Integração de APIs e implementação de boas práticas de engenharia de software',
    ],
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Azure', 'REST API'],
  },
  {
    id: 2,
    company: 'AI Atende',
    position: 'Software Developer',
    period: 'Jul/2025 - Out/2025',
    description: [
      'Desenvolvimento de soluções em Node.js integradas ao Kommo (amoCRM)',
      'Criação de dashboard corporativo com Java (backend) e React (frontend)',
      'Atuação full stack com integração de APIs e boas práticas de arquitetura',
    ],
    technologies: ['Node.js', 'Java', 'React', 'API Integration', 'Kommo'],
  },
  {
    id: 3,
    company: 'Horizon',
    position: 'Software Developer (Backend)',
    period: 'Jan/2025 - Out/2025',
    description: [
      'Desenvolvimento de microserviços com Java 21 e Spring Boot',
      'Implementação de REST APIs seguras com JWT e OpenFeign',
      'Uso de Eureka e Spring Cloud Gateway para descoberta e roteamento',
      'Integração com Google Maps API e deploy na Azure',
    ],
    technologies: ['Java 21', 'Spring Boot', 'JWT', 'Microservices', 'Azure', 'Spring Cloud'],
  },
  {
    id: 4,
    company: 'Compass UOL',
    position: 'Backend Developer',
    period: 'Set/2024 - Fev/2025',
    description: [
      'Desenvolvimento backend com Java, Spring Boot e bancos SQL/NoSQL',
      'Experiência com microsserviços e cloud computing (AWS)',
      'Adoção de boas práticas de versionamento com Git',
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'MongoDB', 'Git'],
  },
];
