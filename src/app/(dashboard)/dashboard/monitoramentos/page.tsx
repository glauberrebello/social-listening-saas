'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, Search, Filter, MoreHorizontal, Globe, 
  Twitter, Instagram, Facebook, Rss, Newspaper,
  Play, Pause, Trash2, Edit, Copy
} from 'lucide-react';

const sources = [
  { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'text-blue-400' },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-400' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'text-blue-500' },
  { id: 'rss', name: 'RSS', icon: Rss, color: 'text-orange-400' },
  { id: 'news', name: 'News', icon: Newspaper, color: 'text-green-400' },
];

const projects = [
  {
    id: 1,
    name: 'Minha Marca',
    description: 'Monitoramento da marca principal',
    keywords: ['minha marca', '#minhamarca', '@minhamarca'],
    sources: ['twitter', 'instagram', 'facebook'],
    status: 'active',
    mentions: 1247,
    lastUpdate: '5 min atrás'
  },
  {
    id: 2,
    name: 'Concorrente XYZ',
    description: 'Análise do concorrente principal',
    keywords: ['concorrente xyz', '#concorrente'],
    sources: ['twitter', 'news'],
    status: 'active',
    mentions: 856,
    lastUpdate: '15 min atrás'
  },
  {
    id: 3,
    name: 'Campanha Produto Y',
    description: 'Monitoramento da campanha do novo produto',
    keywords: ['produto y', '#lancamentoY'],
    sources: ['instagram', 'facebook'],
    status: 'paused',
    mentions: 432,
    lastUpdate: '2h atrás'
  },
  {
    id: 4,
    name: 'Setor Tech',
    description: 'Monitoramento do setor de tecnologia',
    keywords: ['#tech', 'tecnologia', 'startup'],
    sources: ['twitter', 'rss', 'news'],
    status: 'active',
    mentions: 2103,
    lastUpdate: '10 min atrás'
  }
];

export default function MonitoramentosPage() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getSourceIcon = (sourceId: string) => {
    const source = sources.find(s => s.id === sourceId);
    if (!source) return null;
    const Icon = source.icon;
    return <Icon className={`w-4 h-4 ${source.color}`} />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Monitoramentos</h1>
          <p className="text-surface-400">Gerencie seus projetos de monitoramento</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Novo Monitoramento
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-5 h-5 text-surface-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Buscar monitoramentos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <button className="btn-secondary flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtrar
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card rounded-xl overflow-hidden hover:border-primary-500/30 transition-colors"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                  <p className="text-surface-400 text-sm">{project.description}</p>
                </div>
                <button className="p-2 text-surface-400 hover:text-white transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Keywords */}
              <div className="mb-4">
                <p className="text-surface-500 text-xs mb-2">PALAVRAS-CHAVE</p>
                <div className="flex flex-wrap gap-2">
                  {project.keywords.slice(0, 3).map((keyword, i) => (
                    <span key={i} className="px-2 py-1 bg-surface-700 rounded text-xs text-surface-300">
                      {keyword}
                    </span>
                  ))}
                  {project.keywords.length > 3 && (
                    <span className="px-2 py-1 bg-surface-700 rounded text-xs text-surface-400">
                      +{project.keywords.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Sources */}
              <div className="mb-4">
                <p className="text-surface-500 text-xs mb-2">FONTES</p>
                <div className="flex items-center gap-2">
                  {project.sources.map((source, i) => (
                    <div key={source} className="p-2 bg-surface-700 rounded-lg">
                      {getSourceIcon(source)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-surface-700">
                <div>
                  <p className="text-surface-500 text-xs">MENÇÕES</p>
                  <p className="text-xl font-bold text-white">{project.mentions.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-surface-500 text-xs">ÚLTIMA ATUALIZAÇÃO</p>
                  <p className="text-sm text-surface-400">{project.lastUpdate}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-surface-800/50 flex items-center justify-between">
              <span className={`flex items-center gap-2 text-sm ${project.status === 'active' ? 'text-green-400' : 'text-surface-400'}`}>
                {project.status === 'active' ? (
                  <><Play className="w-4 h-4" /> Ativo</>
                ) : (
                  <><Pause className="w-4 h-4" /> Pausado</>
                )}
              </span>
              <div className="flex items-center gap-2">
                <button className="p-2 text-surface-400 hover:text-white transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-surface-400 hover:text-white transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-400 hover:text-red-300 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal (simplified) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface-800 rounded-2xl p-6 w-full max-w-lg"
          >
            <h2 className="text-xl font-bold text-white mb-6">Novo Monitoramento</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-surface-400 text-sm mb-2">Nome do Projeto</label>
                <input type="text" className="input-field" placeholder="Minha Marca" />
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Descrição</label>
                <textarea className="input-field h-20" placeholder="Descrição opcional..."></textarea>
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Palavras-chave (uma por linha)</label>
                <textarea className="input-field h-24" placeholder="minha marca&#10;#minhamarca&#10;@minhamarca"></textarea>
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Fontes</label>
                <div className="flex flex-wrap gap-3">
                  {sources.map((source) => {
                    const Icon = source.icon;
                    return (
                      <label key={source.id} className="flex items-center gap-2 p-3 bg-surface-700 rounded-lg cursor-pointer hover:bg-surface-600">
                        <input type="checkbox" className="rounded bg-surface-600 border-surface-500" />
                        <Icon className={`w-5 h-5 ${source.color}`} />
                        <span className="text-surface-300 text-sm">{source.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary flex-1">
                  Cancelar
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Criar Monitoramento
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}