import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Building2, Globe, ShieldCheck } from 'lucide-react';
import { partners } from '../data/partnersData';
import { imageConfig } from '../data/imageConfig';

export function Partners() {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Nos Partenaires</h1>
        <p className="text-lg text-slate-600">
          Nous collaborons avec des institutions et des entreprises de premier plan pour offrir le meilleur accompagnement possible.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-32 h-20 shrink-0 flex items-center justify-center bg-slate-50 rounded-2xl p-4 group-hover:bg-white transition-colors">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900">{partner.name}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                  {partner.category}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {partner.description}
              </p>
              {partner.website && (
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 transition-all"
                >
                  Visiter le site <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white text-center space-y-8 relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Devenir Partenaire ?</h2>
          <p className="text-slate-400">
            Vous partagez nos valeurs et souhaitez contribuer à l'amélioration de l'éducation et du bien-être psychologique ? Rejoignez notre réseau.
          </p>
          <div className="pt-4">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20">
              Nous Contacter pour un Partenariat
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -ml-32 -mb-32" />
      </div>
    </div>
  );
}
