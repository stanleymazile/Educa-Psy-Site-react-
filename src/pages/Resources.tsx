import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, BookOpen, Video, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: "Guide de la Santé Mentale Scolaire",
    description: "Un guide complet pour les enseignants et les parents sur l'identification des signes de détresse chez les élèves.",
    type: "PDF",
    size: "2.4 MB",
    icon: FileText,
    category: "Psychologie",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Cahier d'Exercices de Concentration",
    description: "Série d'activités ludiques pour aider les enfants à améliorer leur attention et leur mémoire.",
    type: "PDF",
    size: "1.8 MB",
    icon: BookOpen,
    category: "Éducation",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Webinaire : Communication Parent-Ado",
    description: "Enregistrement de notre conférence sur les techniques de dialogue non-violent avec les adolescents.",
    type: "Vidéo",
    size: "45 min",
    icon: Video,
    category: "Famille",
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Fiches Pratiques : Gestion du Stress",
    description: "Outils concrets et exercices de respiration pour gérer l'anxiété avant les examens.",
    type: "PDF",
    size: "1.2 MB",
    icon: FileText,
    category: "Psychologie",
    color: "bg-rose-50 text-rose-600"
  }
];

export function Resources() {
  return (
    <div className="space-y-12 pb-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Ressources</h1>
        <p className="text-lg text-slate-600">
          Accédez à nos guides, outils et contenus exclusifs pour vous accompagner au quotidien.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6"
          >
            <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${resource.color}`}>
              <resource.icon size={32} />
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {resource.category}
                </span>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {resource.type} • {resource.size}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{resource.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {resource.description}
              </p>
              <button className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 transition-all">
                Télécharger <Download size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-2xl font-bold">Vous ne trouvez pas ce que vous cherchez ?</h2>
          <p className="text-indigo-100 max-w-md">
            Notre équipe développe constamment de nouvelles ressources. Dites-nous de quel outil vous auriez besoin.
          </p>
        </div>
        <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors flex items-center gap-2 shrink-0">
          Suggérer une ressource <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
