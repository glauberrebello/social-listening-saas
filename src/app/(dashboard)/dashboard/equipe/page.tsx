'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Plus, MoreHorizontal, Mail, Shield,
  Crown, User, Trash2, Edit, Check
} from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'João Doe',
    email: 'joao@empresa.com',
    role: 'admin',
    status: 'active',
    lastActive: '2024-01-15T12:00:00Z'
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@empresa.com',
    role: 'user',
    status: 'active',
    lastActive: '2024-01-15T11:30:00Z'
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro@empresa.com',
    role: 'user',
    status: 'active',
    lastActive: '2024-01-14T16:45:00Z'
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana@empresa.com',
    role: 'viewer',
    status: 'inactive',
    lastActive: '2024-01-10T09:00:00Z'
  },
];

const getRoleIcon = (role: string) => {
  switch (role) {
    case 'admin': return <Crown className="w-4 h-4 text-yellow-400" />;
    case 'user': return <User className="w-4 h-4 text-blue-400" />;
    default: return <Shield className="w-4 h-4 text-surface-400" />;
  }
};

const getRoleLabel = (role: string) => {
  switch (role) {
    case 'admin': return 'Administrador';
    case 'user': return 'Usuário';
    case 'viewer': return 'Visualizador';
    default: return role;
  }
};

export default function EquipePage() {
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Equipe</h1>
          <p className="text-surface-400">Gerencie usuários e permissões</p>
        </div>
        <button 
          onClick={() => setShowInviteModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Convidar Usuário
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-surface-400 text-sm">Total de Usuários</p>
              <p className="text-2xl font-bold text-white">{teamMembers.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-surface-400 text-sm">Ativos</p>
              <p className="text-2xl font-bold text-white">{teamMembers.filter(m => m.status === 'active').length}</p>
            </div>
          </div>
        </div>
        <div className="card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-surface-400 text-sm">Administradores</p>
              <p className="text-2xl font-bold text-white">{teamMembers.filter(m => m.role === 'admin').length}</p>
            </div>
          </div>
        </div>
        <div className="card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-surface-400 text-sm">Inativos</p>
              <p className="text-2xl font-bold text-white">{teamMembers.filter(m => m.status === 'inactive').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-surface-700">
          <h3 className="text-lg font-semibold text-white">Membros da Equipe</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-800/50">
              <tr className="text-left text-surface-400 text-sm">
                <th className="p-4">Usuário</th>
                <th className="p-4">Função</th>
                <th className="p-4">Status</th>
                <th className="p-4">Última Atividade</th>
                <th className="p-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-700">
              {teamMembers.map((member, index) => (
                <motion.tr 
                  key={member.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-surface-800/30"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{member.name}</p>
                        <p className="text-surface-500 text-sm">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-sm">
                      {getRoleIcon(member.role)}
                      <span className="text-surface-300">{getRoleLabel(member.role)}</span>
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      member.status === 'active' 
                        ? 'bg-green-500/10 text-green-400' 
                        : 'bg-surface-500/10 text-surface-400'
                    }`}>
                      {member.status === 'active' ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-surface-400 text-sm">
                      {new Date(member.lastActive).toLocaleString('pt-BR')}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Editar">
                        <Edit className="w-4 h-4" />
                      </button>
                      {member.role !== 'admin' && (
                        <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors" title="Remover">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface-800 rounded-2xl p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-bold text-white mb-6">Convidar Usuário</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-surface-400 text-sm mb-2">E-mail</label>
                <input type="email" className="input-field" placeholder="email@empresa.com" />
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Função</label>
                <select className="input-field">
                  <option value="user">Usuário</option>
                  <option value="viewer">Visualizador</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowInviteModal(false)} className="btn-secondary flex-1">
                  Cancelar
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Enviar Convite
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}