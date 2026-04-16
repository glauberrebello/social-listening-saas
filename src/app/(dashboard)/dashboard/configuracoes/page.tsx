'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, User, Building, Bell, Key, Globe,
  Palette, Shield, Database, Webhook, Save, Check
} from 'lucide-react';

const tabs = [
  { id: 'perfil', label: 'Perfil', icon: User },
  { id: 'empresa', label: 'Empresa', icon: Building },
  { id: 'notificacoes', label: 'Notificações', icon: Bell },
  { id: 'seguranca', label: 'Segurança', icon: Shield },
  { id: 'integracoes', label: 'Integrações', icon: Webhook },
  { id: 'aparencia', label: 'Aparência', icon: Palette },
];

export default function ConfiguracoesPage() {
  const [activeTab, setActiveTab] = useState('perfil');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Configurações</h1>
          <p className="text-surface-400">Gerencie as configurações da sua conta</p>
        </div>
        <button 
          onClick={handleSave}
          className="btn-primary flex items-center gap-2"
        >
          {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {saved ? 'Salvo!' : 'Salvar Alterações'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="card rounded-xl p-2">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-500/10 text-primary-400'
                      : 'text-surface-400 hover:bg-surface-700 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'perfil' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 rounded-xl"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Perfil do Usuário</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary-500 flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <div>
                    <button className="btn-secondary text-sm">Alterar foto</button>
                    <p className="text-surface-500 text-sm mt-2">JPG, PNG ou GIF. Max 2MB.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-surface-400 text-sm mb-2">Nome</label>
                    <input type="text" className="input-field" defaultValue="João Doe" />
                  </div>
                  <div>
                    <label className="block text-surface-400 text-sm mb-2">E-mail</label>
                    <input type="email" className="input-field" defaultValue="joao@empresa.com" />
                  </div>
                  <div>
                    <label className="block text-surface-400 text-sm mb-2">Telefone</label>
                    <input type="tel" className="input-field" placeholder="+55 (11) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-surface-400 text-sm mb-2">Cargo</label>
                    <input type="text" className="input-field" placeholder="Seu cargo" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'empresa' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 rounded-xl"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Informações da Empresa</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-xl bg-surface-700 flex items-center justify-center">
                    <Building className="w-8 h-8 text-surface-400" />
                  </div>
                  <div>
                    <button className="btn-secondary text-sm">Alterar logo</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-surface-400 text-sm mb-2">Nome da Empresa</label>
                    <input type="text" className="input-field" defaultValue="Minha Empresa Ltda" />
                  </div>
                  <div>
                    <label className="block text-surface-400 text-sm mb-2">CNPJ</label>
                    <input type="text" className="input-field" placeholder="00.000.000/0001-00" />
                  </div>
                  <div>
                    <label className="block text-surface-400 text-sm mb-2">Website</label>
                    <input type="url" className="input-field" placeholder="https://empresa.com.br" />
                  </div>
                  <div>
                    <label className="block text-surface-400 text-sm mb-2">Plano</label>
                    <select className="input-field" defaultValue="starter">
                      <option value="access">Access - R$ 1.500/mês</option>
                      <option value="starter">Starter - R$ 2.275/mês</option>
                      <option value="essential">Essential - R$ 2.800/mês</option>
                      <option value="advanced">Advanced - R$ 3.990/mês</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'notificacoes' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 rounded-xl"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Configurações de Notificações</h2>
              <div className="space-y-6">
                {[
                  { title: 'E-mail quando houver novo alerta', description: 'Receba um e-mail quando um novo alerta for disparado', enabled: true },
                  { title: 'E-mail de resumo diário', description: 'Receba um resumo diário das métricas', enabled: true },
                  { title: 'Notificações de novos tickets SAC', description: 'Seja notificado sobre novos atendimentos', enabled: false },
                  { title: 'Alertas de sentimento negativo', description: 'Receba alertas quando o sentimento negativo aumentar', enabled: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-surface-700/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-surface-400 text-sm">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={item.enabled} className="sr-only peer" />
                      <div className="w-11 h-6 bg-surface-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'seguranca' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 rounded-xl"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Segurança</h2>
              <div className="space-y-6">
                <div className="p-4 bg-surface-700/50 rounded-lg">
                  <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Key className="w-5 h-5" />
                    Alterar Senha
                  </h3>
                  <div className="space-y-4 mt-4">
                    <input type="password" className="input-field" placeholder="Senha atual" />
                    <input type="password" className="input-field" placeholder="Nova senha" />
                    <input type="password" className="input-field" placeholder="Confirmar nova senha" />
                  </div>
                </div>
                <div className="p-4 bg-surface-700/50 rounded-lg">
                  <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Autenticação em Deux Fatores (2FA)
                  </h3>
                  <p className="text-surface-400 text-sm mb-4">Adicione uma camada extra de segurança à sua conta.</p>
                  <button className="btn-secondary text-sm">Ativar 2FA</button>
                </div>
                <div className="p-4 bg-surface-700/50 rounded-lg">
                  <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Sessões Ativas
                  </h3>
                  <p className="text-surface-400 text-sm mb-4">Gerencie seus dispositivos conectados.</p>
                  <button className="btn-secondary text-sm">Ver sessões</button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'integracoes' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 rounded-xl"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Integrações</h2>
              <div className="space-y-4">
                {[
                  { name: 'Slack', description: 'Receba alertas no seu workspace do Slack', connected: true },
                  { name: 'Microsoft Teams', description: 'Receba alertas no Teams', connected: false },
                  { name: 'Zapier', description: 'Conecte com mais de 5.000 apps', connected: false },
                  { name: 'Webhook', description: 'Envie dados para sua API', connected: true },
                ].map((integration, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-surface-700/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{integration.name}</p>
                      <p className="text-surface-400 text-sm">{integration.description}</p>
                    </div>
                    <button className={integration.connected ? 'btn-secondary text-sm' : 'btn-primary text-sm'}>
                      {integration.connected ? 'Configurar' : 'Conectar'}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'aparencia' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 rounded-xl"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Aparência</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-surface-400 text-sm mb-2">Cor Principal</label>
                  <div className="flex gap-3">
                    {['#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#ec4899'].map((color) => (
                      <button key={color} className="w-10 h-10 rounded-lg" style={{ backgroundColor: color }}></button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-surface-400 text-sm mb-2">Modo</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Escuro', 'Claro', 'Sistema'].map((mode, i) => (
                      <button key={mode} className={`p-4 rounded-lg text-center ${i === 0 ? 'bg-primary-500/20 border border-primary-500 text-primary-400' : 'bg-surface-700 text-surface-400'}`}>
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}