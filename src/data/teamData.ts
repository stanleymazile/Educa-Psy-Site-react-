import { imageConfig } from './imageConfig';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'marie-laurent',
    name: 'Dr. Marie Laurent',
    role: 'Fondatrice & Psychologue Clinicienne',
    bio: 'Spécialisée dans le développement de l\'enfant et de l\'adolescent avec plus de 15 ans d\'expérience.',
    image: imageConfig.team.member1,
    socials: { linkedin: '#' }
  },
  {
    id: 'jean-dupont',
    name: 'Jean Dupont',
    role: 'Directeur Pédagogique',
    bio: 'Expert en méthodes d\'apprentissage innovantes et en soutien scolaire spécialisé.',
    image: imageConfig.team.member2,
    socials: { linkedin: '#' }
  },
  {
    id: 'sophie-martin',
    name: 'Sophie Martin',
    role: 'Responsable Recherche',
    bio: 'Chercheuse en neurosciences cognitives appliquée à l\'éducation.',
    image: imageConfig.team.member3,
    socials: { twitter: '#' }
  },
  {
    id: 'lucas-bernard',
    name: 'Lucas Bernard',
    role: 'Médiateur Familial',
    bio: 'Accompagne les familles dans la résolution de conflits et l\'amélioration de la communication.',
    image: imageConfig.team.member4,
    socials: { linkedin: '#' }
  }
];
