import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Teníamos a dos personas perdiendo toda la mañana cargando pedidos de WhatsApp a la planilla. Empezamos con la prueba gratis y ahora los pedidos entran solos al Excel y se autogenera la nota de venta. Es un viaje de ida.',
      author: 'Gastón R.',
      company: 'Distribuidora de Alimentos',
      location: 'Buenos Aires',
      initials: 'GR'
    },
    {
      quote: 'Seguir los presupuestos enviados era imposible. El asistente de IA les hace el seguimiento por WhatsApp a los 3 y 7 días de forma ultra personalizada. Recuperamos 4 ventas grandes en el primer mes de prueba.',
      author: 'Mariana L.',
      company: 'Constructora y Desarrolladora',
      location: 'Córdoba',
      initials: 'ML'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white relative border-b border-slate-100">
      
      {/* Background soft gradients */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-indigo-50 rounded-full blur-3xl pointer-events-none opacity-60"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Qué dicen los que ya lo probaron
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Resultados reales obtenidos durante nuestras primeras pruebas gratis con PyMEs locales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/40 border border-slate-100 hover:border-slate-200 rounded-3xl p-8 md:p-10 transition-all duration-300 relative flex flex-col justify-between hover:shadow-lg"
            >
              {/* Quote Mark background */}
              <div className="absolute top-8 right-8 text-slate-200/50">
                <Quote className="h-10 w-10 rotate-180 transform" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-sans text-base text-slate-700 italic leading-relaxed mb-8 relative z-10">
                "{t.quote}"
              </p>

              {/* Author Metadata */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 text-white font-display font-bold text-sm flex items-center justify-center shadow-inner shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">{t.author}</h4>
                  <p className="font-sans text-xs text-slate-500">{t.company} — <span className="font-semibold text-indigo-600">{t.location}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
