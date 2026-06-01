import React from 'react';
import { Zap, ArrowRight, MessageSquare, Database, Clock } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative bg-[#090D1A] text-white pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 overflow-hidden">
      
      {/* Premium background grid & glow patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141B2D_1px,transparent_1px),linear-gradient(to_bottom,#141B2D_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Floating ambient light spheres */}
      <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium copywriting with vibe */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            
            {/* Elegant Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-xs font-semibold text-blue-300 tracking-wide shadow-inner">
              <Zap className="h-4 w-4 text-blue-400 animate-pulse" />
              <span>La Inteligencia Artificial que trabaja por vos</span>
            </div>

            {/* Main Heading H1 */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight">
              Menos planillas.<br />
              Menos WhatsApps colapsados.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 font-display">
                Más libertad para crecer.
              </span>
            </h1>

            {/* Concise, High-Impact Subtitle */}
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Delegá las tareas administrativas repetitivas en asistentes de Inteligencia Artificial hechos a medida. Sin cambiar tus sistemas, sin saber programar y 100% automático.
            </p>

            {/* Premium Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="https://wa.me/5491131155986?text=Hola!%20Quiero%20postular%20mi%20empresa%20a%20la%20Prueba%20Gratis%20de%2030%20d%C3%ADas."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-8 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer text-center"
              >
                Quiero mi Prueba Gratis
              </a>
              
              <a
                href="#como-ayuda"
                className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white font-semibold py-4 px-6 text-sm sm:text-base transition-all duration-200 cursor-pointer group"
              >
                <span>Ver ejemplo en vivo</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium interactive glassmorphic dashboard mockup */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Glowing background halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-60"></div>
            
            {/* Dashboard Container */}
            <div className="relative bg-[#0F172A]/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
              
              {/* Header Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="font-sans text-xs md:text-sm font-semibold text-slate-300 tracking-wide uppercase">
                    Agente IA: Conectado
                  </span>
                </div>
                <span className="font-sans text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Automático
                </span>
              </div>

              {/* Status List */}
              <div className="space-y-4">
                
                {/* Status 1: WhatsApp */}
                <div className="flex items-center gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/40 hover:border-slate-800/80 transition-all duration-300">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[10px] text-slate-500 font-semibold uppercase tracking-wider">WhatsApp Clientes</p>
                    <p className="font-display font-bold text-sm sm:text-base text-white">184 chats respondidos hoy</p>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">100%</span>
                </div>

                {/* Status 2: Data Entry */}
                <div className="flex items-center gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/40 hover:border-slate-800/80 transition-all duration-300">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Database className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Base de Datos / Excel</p>
                    <p className="font-display font-bold text-sm sm:text-base text-white">Planillas Auto-actualizadas</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping"></div>
                </div>

                {/* Status 3: Time Saved */}
                <div className="flex items-center gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/40 hover:border-slate-800/80 transition-all duration-300">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Tiempo Liberado</p>
                    <p className="font-display font-bold text-sm sm:text-base text-white">18 horas ahorradas / sem</p>
                  </div>
                  <span className="text-[11px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full">¡Libre!</span>
                </div>

              </div>

              {/* Client Quote */}
              <div className="pt-2 text-center border-t border-slate-800/50">
                <p className="font-sans text-xs text-slate-400 italic">
                  "El bot responde, actualiza el stock y nos avisa al WhatsApp administrativo."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
