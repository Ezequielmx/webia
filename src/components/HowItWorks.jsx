import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import WhatsAppSimulator from './WhatsAppSimulator';

export default function HowItWorks() {
  const benefits = [
    {
      title: 'Siguen usando WhatsApp como siempre',
      desc: 'Tus vendedores no tienen que aprender a usar ningún programa nuevo o complicado. Siguen mandando mensajes y audios por WhatsApp como lo hacen todos los días.'
    },
    {
      title: 'La IA entiende audios o textos con errores',
      desc: 'Entiende mensajes de voz, abreviaturas o textos informales con errores de ortografía. Procesa la información tal cual se la mandarías a un colega humano.'
    },
    {
      title: 'Pregunta los datos faltantes por su cuenta',
      desc: 'Si el vendedor olvida un dato crucial (por ejemplo, si el pedido es con envío o retiro, o la fecha de entrega), la IA le responde el chat preguntándole el dato faltante antes de guardar nada.'
    },
    {
      title: 'Todo queda en planillas en tiempo real',
      desc: 'Los datos estructurados de la venta se cargan de inmediato en una planilla de Excel compartida en la nube. Vos y tu equipo pueden ver las ventas actualizadas al instante.'
    }
  ];

  return (
    <section id="como-ayuda" className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      
      {/* Soft circular background decoration */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-100/30 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-800 tracking-tight">
            ¿Qué hace exactamente la Inteligencia Artificial por vos?
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Te lo traducimos a palabras sencillas, sin tecnicismos ni jerga difícil.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Col 1: Text & Benefits (5/12 grid cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* The Analogy Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-3">
              <span className="text-xs bg-blue-50 text-blue-900 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                ¿Cómo funciona en tu día a día?
              </span>
              <p className="font-sans text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>La Inteligencia Artificial actúa como un conector invisible</strong>. Lee correos, mensajes de WhatsApp, archivos PDF o planillas, extrae la información relevante sin cometer errores y la ingresa automáticamente en tus planillas de Excel, sistemas de facturación o software de gestión.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  
                  {/* Icon */}
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-1.5 border border-blue-200">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>

                  {/* Benefit details */}
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-slate-800">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Other usecases badge */}
            <div className="bg-[#FAF9F5] rounded-2xl p-5 border border-[#FAF9F5] text-xs text-slate-600 space-y-2">
              <p className="font-bold text-slate-800 uppercase tracking-wider">Otros Procesos que Automatizamos:</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg">Facturación automática</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg">Seguimiento de presupuestos</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg">Control de stock e inventario</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg">Consolidación de reportes</span>
              </div>
            </div>

          </div>

          {/* Col 2: The WhatsApp Simulator (7/12 grid cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F5] p-5 md:p-8 rounded-[40px] border border-slate-200/50 shadow-inner space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-2">
                <span>CASO DE EJEMPLO: AUTOMATIZACIÓN DE VENTAS</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              
              {/* Animated simulator integration */}
              <WhatsAppSimulator />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
