import { imageConfig } from './imageConfig';

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
  category: 'Éducation' | 'Santé' | 'Technologie' | 'Institutionnel';
}

export const partners: Partner[] = [
  {
    id: 'univ-paris',
    name: 'Université de Paris',
    logo: imageConfig.home.partners[0],
    description: 'Partenaire académique principal pour nos recherches en neurosciences et psychologie cognitive.',
    category: 'Institutionnel',
    website: 'https://u-paris.fr'
  },
  {
    id: 'edu-tech',
    name: 'EduTech Solutions',
    logo: imageConfig.home.partners[1],
    description: 'Fournisseur de solutions technologiques innovantes pour nos plateformes d\'apprentissage en ligne.',
    category: 'Technologie',
    website: '#'
  },
  {
    id: 'fondation-sante',
    name: 'Fondation Santé Mentale',
    logo: imageConfig.home.partners[2],
    description: 'Soutien financier et logistique pour nos programmes d\'aide aux familles défavorisées.',
    category: 'Santé',
    website: '#'
  },
  {
    id: 'ecole-normale',
    name: 'École Normale Supérieure',
    logo: imageConfig.home.partners[3],
    description: 'Collaboration sur le développement de nouvelles méthodes pédagogiques pour le primaire.',
    category: 'Éducation',
    website: '#'
  },
  {
    id: 'ministere-edu',
    name: 'Ministère de l\'Éducation',
    logo: imageConfig.home.partners[4],
    description: 'Agrément officiel pour nos interventions en milieu scolaire et nos formations pour enseignants.',
    category: 'Institutionnel',
    website: '#'
  }
];
