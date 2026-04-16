'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, AlertTriangle, TrendingUp, TrendingDown, 
  Check, X, Settings, Plus, Filter, Search
} from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'sentimento',
    title: 'Aumento de menções negativas',
    message: 'Detectado aumento de 45% nas menções negativas sobre atendimento nas últimas 2 horas.',
    project: 'Minha Marca',
    timestamp: '2024-01-15T12:30:00Z',
    read: false,
    urgent: true
  },
  {
    id: 2,
    type: 'volume',
    title: 'Pico de volume',
    message: 'Volume de menções aumentou 156% nas últimas 2h em relação à média das últimas 24h.',
    project: 'Minha Marca',
    timestamp: '2024-01-15T11:00:00Z',
    read: false,
    urgent: false
  },
  {
    id: 3,
    type: 'influenciador',
    title: 'Influenciador negativo',
    message: 'O perfil @famoso_reclamão fez postagem negativa sobre a marca com alto alcance.',
    project: 'Minha Marca',
    timestamp: '2024-01-15T10:15:00Z',
    read: true,
    urgent: true
  },
  {
    id: 4,
    type: 'sentimento',
    title: 'Sentimento negativo estável',
    message: 'Sentimento negativo acima de 20% por mais de 3 horas. Recomenda-se atenção.',
    project: 'Concorrente XYZ',
    timestamp: '2024-01-15T09:00:00Z',
    read: true,
    urgent: false
  },
  {
    id: 5,
    type: 'anomalia',
    title: 'Anomalia detectada',
    message: 'Comportamento atípico detectado no monitoramento de palavras-chave relacionadas.',
    project: 'Setor Tech',
    timestamp: '2024-01-14T22:30:00Z',
    read: true,
    urgent: false
  },
];

const alertRules = [
  { id: 1, name: 'Sentimento negativo > 20%', type: 'sentimento', status: 'active', triggerCount: 156 },
  { id: 2, name: 'Pico de volume > 100%', type: 'volume', status: 'active', triggerCount: 23 },
  { id: 3, name: 'Influenciador negativo', type: 'influenciador', status: 'active', triggerCount: 8 },
  { id: 4, name: 'Menção com palavra-chave específica', type: 'keyword', status: 'inactive', triggerCount: 45 },
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'sentimento': return <TrendingDown className="w-5 h-5 text-red-400" />;
    case 'volume': return <TrendingUp className="w-5 h-5 text-yellow-400" />;
    case 'influenciador': return <AlertTriangle className="w-5 h-5 text-orange-400" />;
    case 'anomalia': return <Bell className="w-5 h-5 text-blue-400" />;
    default: return <Bell className="w-5 h-5 text-surface-400" />;
  }
};

export default function AlertasPage() {
  const [activeTab, setActiveTab] = useState<'alertas' | 'regras'>('alertas');
  const [filterRead, setFilterRead] = useState<'all' | 'unread'>('all');

  const filteredAlerts = filterRead === 'unread' ? alerts.filter(a => !a.read) : alerts;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Central de Alertas</h1>
          <p className="text-surface-400">Gerencie alertas e regras de automação</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Nova Regra
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-surface-700">
        <button 
          onClick={() => setActiveTab('alertas')}
          className={`pb-3 px-4 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'alertas' 
              ? 'border-primary-500 text-primary-400' 
              : 'border-transparent text-surface-400 hover:text-white'
          }`}
        >
          <span className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Alertas ({alerts.filter(a => !a.read).length} não lidos)
          </span>
        </button>
        <button 
          onClick={() => setActiveTab('regras')}
          className={`pb-3 px-4 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'regras' 
              ? 'border-primary-500 text-primary-400' 
              : 'border-transparent text-surface-400 hover:text-white'
          }`}
        >
          <span className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Regras de Alerta
          </span>
        </button>
      </div>

      {activeTab === 'alertas' ? (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-surface-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Buscar alertas..." 
                className="input-field pl-10"
              />
            </div>
            <select 
              value={filterRead}
              onChange={(e) => setFilterRead(e.target.value as 'all' | 'unread')}
              className="bg-surface-700 border-none rounded-lg px-4 py-2 text-sm text-surface-300"
            >
              <option value="all">Todos</option>
              <option value="unread">Não lidos</option>
            </select>
          </div>

          {/* Alerts List */}
          <div className="space-y-3">
            {filteredAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`card p-4 rounded-xl ${
                  !alert.read ? 'border-l-4 border-l-primary-500' : ''
                } ${alert.urgent ? 'border border-red-500/20' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${alert.urgent ? 'bg-red-500/10' : 'bg-surface-700'}`}>
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-medium">{alert.title}</h3>
                      <span className="text-surface-500 text-sm">
                        {new Date(alert.timestamp).toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-surface-400 text-sm mb-3">{alert.message}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-surface-500 text-xs">Projeto: {alert.project}</span>
                      {alert.urgent && (
                        <span className="px-2 py-0.5 bg-red-500/10 text-red-400 rounded text-xs">
                          Urgente
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!alert.read && (
                      <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Marcar como lido">
                        <Check className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Configurar regra">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors" title="Ignorar">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="card rounded-xl overflow-hidden">
          <div className="p-4 border-b border-surface-700 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Regras de Alerta</h3>
            <button className="btn-secondary flex items-center gap-2 text-sm">
              <Plus className="w-4 h-4" />
              Nova Regra
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-800/50">
                <tr className="text-left text-surface-400 text-sm">
                  <th className="p-4">Nome</th>
                  <th className="p-4">Tipo</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Disparos</th>
                  <th className="p-4">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-700">
                {alertRules.map((rule, index) => (
                  <motion.tr 
                    key={rule.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-surface-800/30"
                  >
                    <td className="p-4">
                      <p className="text-white font-medium">{rule.name}</p>
                    </td>
                    <td className="p-4">
                      <span className="text-surface-400 text-sm capitalize">{rule.type}</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        rule.status === 'active' 
                          ? 'bg-green-500/10 text-green-400' 
                          : 'bg-surface-500/10 text-surface-400'
                      }`}>
                        {rule.status === 'active' ? 'Ativa' : 'Inativa'}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-surface-400 text-sm">{rule.triggerCount}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors">
                          <Settings className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}