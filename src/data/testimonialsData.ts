import { imageConfig } from './imageConfig';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Claire Lefebvre',
    role: 'Maman de Lucas (12 ans)',
    content: "L'accompagnement d'Educa-Psy a transformé la relation avec mon fils. Les ateliers de parentalité nous ont donné des outils concrets pour mieux communiquer.",
    avatar: imageConfig.testimonials.avatar1,
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Marc Antoine',
    role: 'Enseignant au Primaire',
    content: "Leurs formations sur la santé mentale en milieu scolaire sont indispensables. J'ai appris à identifier des signes de détresse que je ne voyais pas auparavant.",
    avatar: imageConfig.testimonials.avatar2,
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Élodie Roux',
    role: 'Étudiante en Master',
    content: "Le mentorat professionnel m'a aidée à définir mon projet de carrière avec clarté et confiance. Un soutien précieux pour mon avenir.",
    avatar: imageConfig.testimonials.avatar3,
    rating: 4
  }
];
