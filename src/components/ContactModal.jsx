import React, { useState } from 'react';
import { X, CheckCircle, Send, ShieldAlert } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    painPoint: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-[#FAFAFA]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            <h3 className="font-display font-bold text-lg text-blue-900">
              {submitted ? '¡Postulación Recibida!' : 'Hablemos de tu negocio'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 overflow-y-auto flex-1">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center md:text-left">
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Completá estos pocos datos. No es una llamada técnica de ventas; es una charla amigable para entender tus tareas manuales y ver si podemos automatizarlas.
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="name">
                  Tu nombre y apellido *
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Carlos Rossi"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-800 text-sm placeholder:text-slate-400 transition-all bg-slate-50"
                />
              </div>

              {/* Company & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="company">
                    Nombre de tu empresa *
                  </label>
                  <input
                    required
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ej. Distribuidora Rossi"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-800 text-sm placeholder:text-slate-400 transition-all bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="phone">
                    Número de WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ej. +54 9 11 2345 6789"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-800 text-sm placeholder:text-slate-400 transition-all bg-slate-50"
                  />
                </div>
              </div>

              {/* Pain Point Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  ¿Cuál es tu mayor dolor de cabeza actual? *
                </label>
                <select
                  required
                  name="painPoint"
                  value={formData.painPoint}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-800 text-sm transition-all bg-slate-50"
                >
                  <option value="" disabled>Seleccioná una opción...</option>
                  <option value="caos-whatsapp">El caos del WhatsApp (audios largos y carga manual)</option>
                  <option value="clientes-espera">Clientes esperando respuestas mucho tiempo</option>
                  <option value="falta-control">Falta de control (no sé cuánto vendí en el día)</option>
                  <option value="varios">Una combinación de todas las anteriores</option>
                  <option value="otro">Otro proceso manual que quiero automatizar</option>
                </select>
              </div>

              {/* Optional message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="message">
                  Contanos brevemente qué hacen a mano hoy (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ej. Mis vendedores me mandan audios con lo que venden y yo tengo que pasarlo a Excel por la noche..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-800 text-sm placeholder:text-slate-400 transition-all bg-slate-50 resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2.5 bg-blue-50/50 border border-blue-100 rounded-xl p-3.5">
                <ShieldAlert className="h-5 w-5 text-blue-800 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900 leading-relaxed">
                  <strong>Privacidad Garantizada:</strong> Tus datos solo se usarán para esta consulta. Odiamos el spam tanto como tú, jamás te enviaremos publicidad molesta.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Analizando viabilidad de tu Pyme...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4.5 w-4.5" />
                    <span>Postular mi empresa al Piloto de 30 Días</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mx-auto h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-2xl text-blue-900">
                  ¡Gracias por tu interés, {formData.name.split(' ')[0]}!
                </h4>
                <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                  Hemos recibido la postulación de <strong>{formData.company}</strong> para nuestro piloto sin riesgo.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 max-w-md mx-auto text-left text-sm text-slate-600 space-y-3">
                <p className="font-semibold text-slate-800">¿Qué sigue ahora?</p>
                <div className="flex gap-3">
                  <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">1</span>
                  <p>Revisaremos tus respuestas internamente para entender tu proceso manual.</p>
                </div>
                <div className="flex gap-3">
                  <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">2</span>
                  <p>Te escribiremos personalmente por WhatsApp al <strong>{formData.phone}</strong> en menos de 24 horas hábiles.</p>
                </div>
                <div className="flex gap-3">
                  <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">3</span>
                  <p>Agendaremos una videollamada corta de 15 minutos para afinar los detalles de tu piloto.</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-all cursor-pointer"
              >
                Cerrar ventana
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
