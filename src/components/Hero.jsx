import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative bg-blue-900 text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Background soft lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-950 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Superior Badge */}
        <div className="inline-flex items-center gap-2.5 bg-blue-800/80 border border-blue-700/60 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-blue-100 tracking-wide shadow-inner">
          <Coffee className="h-4 w-4 text-amber-400" />
          <span>Productividad y eficiencia para dueños de empresas y gerentes</span>
        </div>

        {/* Main Heading H1 */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl mx-auto leading-[1.1] tracking-tight">
          La Inteligencia Artificial no es ciencia ficción.{' '}
          <span className="text-blue-300 block mt-2 font-display">
            Es tu nuevo empleado administrativo multitarea.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          No necesitas saber de tecnología. Nosotros agarramos tus procesos manuales repetitivos —desde la carga de ventas y actualización de planillas Excel, hasta la facturación y el seguimiento de presupuestos— y los convertimos en procesos automáticos que trabajan solos.
        </p>

        {/* Buttons Action */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-blue-900 font-bold py-4 px-8 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
          >
            Quiero saber si aplica a mi empresa
          </button>
          
          <a
            href="#como-ayuda"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-blue-200 hover:text-white font-semibold py-4 px-6 text-sm sm:text-base transition-all duration-200 cursor-pointer group"
          >
            <span>Ver un ejemplo real</span>
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
