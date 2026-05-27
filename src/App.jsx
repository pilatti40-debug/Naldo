import React, { useState } from 'react';
import { Settings, Thermometer, Briefcase, User, LayoutDashboard, Snowflake, DollarSign, Package, HardHat, MapPin, Plus } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('painel');

  const tabs = [
    { id: 'painel', label: 'Painel de Controle', icon: <LayoutDashboard size={20} /> },
    { id: 'os', label: 'Ordens de Serviço (OS)', icon: <Briefcase size={20} /> },
    { id: 'clientes', label: 'Clientes (CRM)', icon: <User size={20} /> },
    { id: 'tecnicos', label: 'Equipe Técnica', icon: <HardHat size={20} /> },
    { id: 'estoque', label: 'Estoque & Peças', icon: <Package size={20} /> },
    { id: 'financeiro', label: 'Financeiro', icon: <DollarSign size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-72 bg-[#0B132C] text-slate-200 flex flex-col flex-shrink-0 p-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-900/40">
            <Snowflake className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">NewArService</h1>
            <p className="text-sm text-blue-300 font-medium">Campo Grande - MS</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {tabs.map((tab) => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-4 p-3.5 rounded-xl transition-all duration-200 font-medium ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                  : 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* ÁREA DE CONTEÚDO */}
      <main className="flex-grow flex flex-col h-screen overflow-y-auto">
        {/* HEADER */}
        <header className="bg-white border-b border-slate-100 py-6 px-10 flex justify-between items-center shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <p className="text-slate-400 flex items-center gap-1 text-sm mt-1">
              <MapPin size={14} /> Campo Grande, MS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="font-bold text-slate-800">27 de maio de 2026</p>
              <p className="text-xs text-slate-500">Quarta-feira</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl flex items-center gap-2">
              <Thermometer className="text-amber-600" size={20} />
              <span className="text-sm font-semibold text-amber-800">CG: 33°C</span>
            </div>
          </div>
        </header>

        <div className="p-10 flex-grow">
          {/* CONTEÚDO DINÂMICO */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 min-h-[500px]">
            {activeTab === 'clientes' ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-700">Base de Clientes</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <Plus size={18} /> Novo Cliente
                  </button>
                </div>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                   <table className="w-full text-left text-sm">
                     <thead className="bg-slate-50 text-slate-500 uppercase">
                       <tr>
                         <th className="p-4">ID</th>
                         <th className="p-4">Nome</th>
                         <th className="p-4">Contato</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                       <tr className="hover:bg-slate-50">
                         <td className="p-4 font-bold text-slate-600">#201</td>
                         <td className="p-4 font-semibold">Dr. Roberto Albuquerque</td>
                         <td className="p-4 text-slate-600">(67) 99122-4455</td>
                       </tr>
                       <tr className="hover:bg-slate-50">
                         <td className="p-4 font-bold text-slate-600">#202</td>
                         <td className="p-4 font-semibold">Márcia Valéria Mendes</td>
                         <td className="p-4 text-slate-600">(67) 98455-3321</td>
                       </tr>
                     </tbody>
                   </table>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-4">
                <LayoutDashboard size={48} className="opacity-20" />
                <p>Conteúdo da aba <strong>{tabs.find(t => t.id === activeTab)?.label}</strong> em desenvolvimento.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
