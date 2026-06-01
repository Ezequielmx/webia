import React from 'react';
import { TrendingUp, Cpu, Layers } from 'lucide-react';

export default function Team() {
  const members = [
    {
      name: 'Ezequiel',
      role: 'Estrategia y Negocios',
      bio: 'Ex-gerente de operaciones. Me dedico a sentarme con dueños de PyMEs para traducir dolores reales en flujos eficientes. No te voy a hablar de código; te voy a hablar de margen de ganancia.',
      icon: <TrendingUp className="h-6 w-6 text-indigo-500" />,
      tag: 'Estrategia'
    },
    {
      name: 'Mateo',
      role: 'Tecnología e IA',
      bio: 'Apasionado por la tecnología aplicada. Conecto tu WhatsApp con planillas y sistemas usando agentes autónomos de IA. Hago que las máquinas trabajen por vos para que tu equipo se concentre en vender.',
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
      tag: 'Automatización'
    },
    {
      name: 'Sofía',
      role: 'Procesos y UX',
      bio: 'Especialista en rediseño de procesos. Me aseguro de que la transición a la IA sea amigable y sin fricciones para tus empleados. Si no es fácil de usar en el día a día, simplemente no sirve.',
      icon: <Layers className="h-6 w-6 text-purple-500" />,
      tag: 'Experiencia'
    }
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Quiénes Somos
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Somos tres consultores enfocados en simplificar el día a día de las PyMEs argentinas usando tecnología que de verdad funciona.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((m, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/50 border border-slate-100 hover:border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 bg-white rounded-2xl shadow-sm border border-slate-100/60">
                  {m.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200/50 text-slate-600 px-3 py-1 rounded-full">
                  {m.tag}
                </span>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-slate-900">{m.name}</h3>
                <p className="font-sans text-sm text-indigo-600 font-semibold">{m.role}</p>
              </div>

              <p className="font-sans text-sm text-slate-600 leading-relaxed flex-1">
                "{m.bio}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
