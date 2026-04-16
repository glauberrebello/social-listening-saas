'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Download, Plus, Calendar, Filter, 
  Share2, Eye, Trash2, Copy, CheckCircle
} from 'lucide-react';

const reports = [
  {
    id: 1,
    name: 'Relatório Semanal - Minha Marca',
    project: 'Minha Marca',
    type: 'automático',
    schedule: 'Seg',
    createdAt: '2024-01-15T08:00:00Z',
    lastGenerated: '2024-01-15T08:00:00Z',
    format: 'PDF'
  },
  {
    id: 2,
    name: 'Análise Concorrente XYZ',
    project: 'Concorrente XYZ',
    type: 'manual',
    schedule: null,
    createdAt: '2024-01-14T14:30:00Z',
    lastGenerated: '2024-01-14T14:30:00Z',
    format: 'PDF'
  },
  {
    id: 3,
    name: 'Dashboard Tempo Real - Campanha Y',
    project: 'Campanha Produto Y',
    type: 'dashboard',
    schedule: null,
    createdAt: '2024-01-13T10:00:00Z',
    lastGenerated: '2024-01-15T12:00:00Z',
    format: 'Link'
  },
  {
    id: 4,
    name: 'Relatório Mensal - Setor Tech',
    project: 'Setor Tech',
    type: 'automático',
    schedule: 'Dia 1',
    createdAt: '2024-01-01T09:00:00Z',
    lastGenerated: '2024-01-01T09:00:00Z',
    format: 'PDF'
  },
  {
    id: 5,
    name: 'Análise de Sentimento - Janeiro',
    project: 'Minha Marca',
    type: 'manual',
    schedule: null,
    createdAt: '2024-01-15T16:00:00Z',
    lastGenerated: null,
    format: 'PDF'
  },
];

const recentExports = [
  { id: 1, name: 'menções_janeiro_2024.csv', size: '2.4 MB', date: '2024-01-15T10:30:00Z' },
  { id: 2, name: 'relatorio_semanal.pdf', size: '1.8 MB', date: '2024-01-15T08:00:00Z' },
  { id: 3, name: 'dados_sac_janeiro.xlsx', size: '856 KB', date: '2024-01-14T15:20:00Z' },
  { id: 4, name: 'insights_ia.txt', size: '12 KB', date: '2024-01-14T10:00:00Z' },
];

export default function RelatoriosPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Relatórios</h1>
          <p className="text-surface-400">Gere, agende e exporte relatórios</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Novo Relatório
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-surface-400 text-sm">Total de Relatórios</p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>
          </div>
        </div>
        <div className="card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-surface-400 text-sm">Agendados</p>
              <p className="text-2xl font-bold text-white">5</p>
            </div>
          </div>
        </div>
        <div className="card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <p className="text-surface-400 text-sm">Exportações (30d)</p>
              <p className="text-2xl font-bold text-white">28</p>
            </div>
          </div>
        </div>
        <div className="card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-surface-400 text-sm">Dashboards Compartilhados</p>
              <p className="text-2xl font-bold text-white">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-surface-700 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Meus Relatórios</h3>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-surface-400 hover:text-white text-sm">
              <Filter className="w-4 h-4" />
              Filtrar
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-800/50">
              <tr className="text-left text-surface-400 text-sm">
                <th className="p-4">Nome</th>
                <th className="p-4">Projeto</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Agendamento</th>
                <th className="p-4">Última Geração</th>
                <th className="p-4">Formato</th>
                <th className="p-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-700">
              {reports.map((report, index) => (
                <motion.tr 
                  key={report.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-surface-800/30"
                >
                  <td className="p-4">
                    <p className="text-white font-medium">{report.name}</p>
                  </td>
                  <td className="p-4">
                    <span className="text-surface-400 text-sm">{report.project}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      report.type === 'automático' ? 'bg-green-500/10 text-green-400' :
                      report.type === 'dashboard' ? 'bg-purple-500/10 text-purple-400' :
                      'bg-surface-500/10 text-surface-400'
                    }`}>
                      {report.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-surface-400 text-sm">
                      {report.schedule || '-'}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-surface-400 text-sm">
                      {report.lastGenerated 
                        ? new Date(report.lastGenerated).toLocaleString('pt-BR')
                        : 'Nunca'}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-surface-400 text-sm">{report.format}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Gerar">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Download">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Compartilhar">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Duplicar">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Exports */}
      <div className="card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-surface-700">
          <h3 className="text-lg font-semibold text-white">Exportações Recentes</h3>
        </div>
        <div className="divide-y divide-surface-700">
          {recentExports.map((export_, index) => (
            <div key={export_.id} className="p-4 flex items-center justify-between hover:bg-surface-800/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-700 flex items-center justify-center">
                  <Download className="w-5 h-5 text-surface-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{export_.name}</p>
                  <p className="text-surface-500 text-sm">{export_.size} • {new Date(export_.date).toLocaleString('pt-BR')}</p>
                </div>
              </div>
              <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Create Report Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface-800 rounded-2xl p-6 w-full max-w-lg"
          >
            <h2 className="text-xl font-bold text-white mb-6">Criar Novo Relatório</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-surface-400 text-sm mb-2">Nome do Relatório</label>
                <input type="text" className="input-field" placeholder="Meu Relatório" />
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Projeto</label>
                <select className="input-field">
                  <option>Minha Marca</option>
                  <option>Concorrente XYZ</option>
                  <option>Campanha Produto Y</option>
                  <option>Setor Tech</option>
                </select>
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Tipo de Relatório</label>
                <div className="grid grid-cols-3 gap-3">
                  <label className="p-3 bg-surface-700 rounded-lg cursor-pointer hover:bg-surface-600 text-center">
                    <input type="radio" name="type" className="hidden" />
                    <FileText className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                    <span className="text-surface-300 text-sm">Geral</span>
                  </label>
                  <label className="p-3 bg-surface-700 rounded-lg cursor-pointer hover:bg-surface-600 text-center">
                    <input type="radio" name="type" className="hidden" />
                    <Calendar className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                    <span className="text-surface-300 text-sm">Agendado</span>
                  </label>
                  <label className="p-3 bg-surface-700 rounded-lg cursor-pointer hover:bg-surface-600 text-center">
                    <input type="radio" name="type" className="hidden" />
                    <Share2 className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                    <span className="text-surface-300 text-sm">Dashboard</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Formato</label>
                <select className="input-field">
                  <option>PDF</option>
                  <option>Excel</option>
                  <option>CSV</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary flex-1">
                  Cancelar
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Criar Relatório
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}