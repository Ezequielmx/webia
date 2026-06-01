import React from 'react';
import { ShieldCheck, Plus } from 'lucide-react';

export default function RiskFreePilot({ onOpenContact }) {
  const steps = [
    {
      num: '1',
      title: 'Elegimos tu cuello de botella',
      desc: 'Analizamos las tareas manuales que más tiempo le quitan a tu equipo hoy (carga de datos, seguimiento, planillas) y configuramos toda la automatización a medida sin cobrarte desarrollo inicial.'
    },
    {
      num: '2',
      title: 'Lo probás 1 mes',
      desc: 'Usamos el sistema automatizado con los datos y correos reales de tu empresa en el día a día para comprobar cómo funciona, pagando solo los costos mínimos de servidores.'
    },
    {
      num: '3',
      title: 'Vos decidís',
      desc: 'Si sirve, te ahorra horas de trabajo y estás conforme, abonas la implementación comercial. Si decidís que no es para vos, lo apagamos sin contratos ni ataduras.'
    }
  ];

  return (
    <section id="piloto" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Inner Card Container */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-[40px] p-8 md:p-16 space-y-12 shadow-sm">
          
          {/* Header */}
          <div className="text-center space-y-4">
            
            {/* Trust Shield Icon */}
            <div className="mx-auto h-14 w-14 rounded-2xl bg-blue-100 text-blue-900 border border-blue-200 flex items-center justify-center shadow-xs">
              <ShieldCheck className="h-7 w-7" />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-blue-900 tracking-tight leading-tight">
                Te lo demostramos con un Piloto de 30 Días
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                Queremos eliminar todo el miedo y la incertidumbre. Prueba la tecnología en las operaciones reales de tu negocio antes de comprometer tu presupuesto.
              </p>
            </div>

          </div>

          {/* Three steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-150 shadow-xs flex flex-col space-y-4 relative overflow-hidden group hover:shadow-md transition-all duration-200"
              >
                {/* Visual Number Tag */}
                <div className="h-10 w-10 rounded-full bg-blue-900 text-white font-display font-bold text-sm flex items-center justify-center shadow-sm">
                  {step.num}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-800">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Background numbers styling decoration */}
                <span className="absolute -bottom-8 -right-4 text-8xl font-display font-black text-slate-100/40 select-none group-hover:scale-105 transition-transform duration-300 pointer-events-none">
                  {step.num}
                </span>
              </div>
            ))}
          </div>

          {/* Button CTA */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-2xl text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              Quiero postular mi empresa al Piloto
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
