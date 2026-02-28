import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Award, HeartPulse, Sparkles, Linkedin, Twitter } from 'lucide-react';
import { imageConfig } from '../data/imageConfig';
import { teamMembers } from '../data/teamData';

const values = [
  { title: "Empathie", description: "L'écoute active et la compréhension profonde sont au cœur de nos interventions.", icon: HeartPulse },
  { title: "Innovation", description: "Nous utilisons les dernières recherches en neurosciences et pédagogie.", icon: Sparkles },
  { title: "Inclusion", description: "Chaque individu mérite un accompagnement adapté à sa singularité.", icon: Users },
  { title: "Excellence", description: "Nous nous engageons à fournir des services de la plus haute qualité.", icon: Award }
];

export function About() {
  return (
    <div className="space-y-20 pb-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">À Propos d'Educa-Psy</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Fondée en 2015, Educa-Psy est née de la volonté de combler le fossé entre l'éducation formelle et le bien-être psychologique. Nous sommes une organisation multidisciplinaire regroupant des psychologues, des pédagogues et des travailleurs sociaux.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-8">
          <div className="p-4 bg-indigo-50 rounded-xl">
            <div className="text-2xl font-bold text-indigo-600">10+</div>
            <div className="text-sm text-slate-600">Années d'expérience</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">25+</div>
            <div className="text-sm text-slate-600">Experts passionnés</div>
          </div>
        </div>
      </div>

      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre Vision & Mission</h2>
          <p className="text-slate-600">
            Nous travaillons chaque jour pour construire une société où chacun a les outils pour s'épanouir pleinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Notre Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              Démocratiser l'accès au soutien psychologique et aux méthodes pédagogiques innovantes pour favoriser la réussite éducative et le bien-être émotionnel.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Notre Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              Devenir la référence nationale en matière d'accompagnement psychosocial et éducatif, reconnue pour son impact positif et durable sur les familles.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre Équipe d'Experts</h2>
          <p className="text-slate-600">
            Des professionnels passionnés et dévoués à votre épanouissement et à celui de vos proches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    {member.socials?.linkedin && (
                      <a href={member.socials.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-indigo-600 transition-all">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a href={member.socials.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-indigo-600 transition-all">
                        <Twitter size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Nos Valeurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-50 rounded-2xl text-center"
            >
              <div className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <value.icon size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{value.title}</h4>
              <p className="text-sm text-slate-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
