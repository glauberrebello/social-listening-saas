'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, Search, Filter, Download, MoreHorizontal, 
  Clock, CheckCircle, AlertCircle, Tag, User,
  MessageCircle, Send, Archive, Star
} from 'lucide-react';

const tickets = [
  {
    id: '001',
    protocol: '20240115-001',
    author: '@maria_santos',
    avatar: 'M',
    subject: 'Problema com entrega',
    message: 'Meu pedido ainda não chegou. Podem me informar o status?',
    status: 'open',
    sentiment: 'neutro',
    createdAt: '2024-01-15T10:30:00Z',
    firstResponse: null,
    resolvedAt: null,
    tags: ['entrega', 'duvida'],
    assignedTo: null
  },
  {
    id: '002',
    protocol: '20240115-002',
    author: '@joao_pedro',
    avatar: 'J',
    subject: 'Produto com defeito',
    message: 'Recebi o produto com um arranhão. Gostaria da troca.',
    status: 'pending',
    sentiment: 'negativo',
    createdAt: '2024-01-15T09:45:00Z',
    firstResponse: '2024-01-15T09:55:00Z',
    resolvedAt: null,
    tags: ['produto', 'troca'],
    assignedTo: 'João Doe'
  },
  {
    id: '003',
    protocol: '20240114-089',
    author: '@carlos_m',
    avatar: 'C',
    subject: 'Elogio ao atendimento',
    message: 'Quero parabenizar o atendimento que recebi. Muito obrigado!',
    status: 'resolved',
    sentiment: 'positivo',
    createdAt: '2024-01-14T16:20:00Z',
    firstResponse: '2024-01-14T16:25:00Z',
    resolvedAt: '2024-01-14T16:30:00Z',
    tags: ['atendimento', 'elogio'],
    assignedTo: 'João Doe'
  },
  {
    id: '004',
    protocol: '20240114-088',
    author: '@ana_clara',
    avatar: 'A',
    subject: 'Dúvida sobre produto',
    message: 'Esse produto serve para uso profissional?',
    status: 'resolved',
    sentiment: 'neutro',
    createdAt: '2024-01-14T14:10:00Z',
    firstResponse: '2024-01-14T14:15:00Z',
    resolvedAt: '2024-01-14T14:20:00Z',
    tags: ['pergunta', 'produto'],
    assignedTo: null
  },
  {
    id: '005',
    protocol: '20240114-087',
    author: '@rafaela_b',
    avatar: 'R',
    subject: 'Reclamação sobre preço',
    message: 'Preço muito alto! Vocês acham que o cliente tem dinheiro infinito?',
    status: 'open',
    sentiment: 'negativo',
    createdAt: '2024-01-14T11:30:00Z',
    firstResponse: null,
    resolvedAt: null,
    tags: ['preco', 'reclamacao'],
    assignedTo: null
  },
];

const stats = {
  total: 156,
  open: 23,
  pending: 45,
  resolved: 88,
  avgResponseTime: '12 min',
  avgResolutionTime: '2h 35min',
  satisfaction: 4.2
};

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'open':
      return 'bg-red-500/10 text-red-400 border-red-500/20';
    case 'pending':
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    case 'resolved':
      return 'bg-green-500/10 text-green-400 border-green-500/20';
    default:
      return 'bg-surface-500/10 text-surface-400 border-surface-500/20';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'open': return 'Aberto';
    case 'pending': return 'Em andamento';
    case 'resolved': return 'Resolvido';
    default: return status;
  }
};

export default function SACPage() {
  const [selectedTicket, setSelectedTicket] = useState(tickets[0]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">SAC 2.0</h1>
          <p className="text-surface-400">Gestão de atendimentos e protocolos</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Novo Ticket
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="card p-4 rounded-xl">
          <p className="text-surface-400 text-sm mb-1">Total</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="card p-4 rounded-xl">
          <p className="text-surface-400 text-sm mb-1">Abertos</p>
          <p className="text-2xl font-bold text-red-400">{stats.open}</p>
        </div>
        <div className="card p-4 rounded-xl">
          <p className="text-surface-400 text-sm mb-1">Andamento</p>
          <p className="text-2xl font-bold text-yellow-400">{stats.pending}</p>
        </div>
        <div className="card p-4 rounded-xl">
          <p className="text-surface-400 text-sm mb-1">Resolvidos</p>
          <p className="text-2xl font-bold text-green-400">{stats.resolved}</p>
        </div>
        <div className="card p-4 rounded-xl">
          <p className="text-surface-400 text-sm mb-1">Tempo Médio Resposta</p>
          <p className="text-2xl font-bold text-white">{stats.avgResponseTime}</p>
        </div>
        <div className="card p-4 rounded-xl">
          <p className="text-surface-400 text-sm mb-1">Tempo Médio Resolução</p>
          <p className="text-2xl font-bold text-white">{stats.avgResolutionTime}</p>
        </div>
        <div className="card p-4 rounded-xl">
          <p className="text-surface-400 text-sm mb-1">Satisfação</p>
          <p className="text-2xl font-bold text-white flex items-center gap-1">
            {stats.satisfaction} <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tickets List */}
        <div className="lg:col-span-1 card rounded-xl overflow-hidden">
          <div className="p-4 border-b border-surface-700">
            <div className="relative">
              <Search className="w-5 h-5 text-surface-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Buscar tickets..." 
                className="input-field pl-10 py-2"
              />
            </div>
          </div>
          <div className="divide-y divide-surface-700 max-h-[600px] overflow-y-auto">
            {tickets.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket)}
                className={`w-full p-4 text-left hover:bg-surface-800/50 transition-colors ${
                  selectedTicket.id === ticket.id ? 'bg-surface-800/80' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-surface-500 text-xs">{ticket.protocol}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs border ${getStatusStyles(ticket.status)}`}>
                    {getStatusLabel(ticket.status)}
                  </span>
                </div>
                <p className="text-white font-medium text-sm mb-1 line-clamp-1">{ticket.subject}</p>
                <div className="flex items-center justify-between">
                  <span className="text-surface-400 text-xs">{ticket.author}</span>
                  <span className="text-surface-500 text-xs">
                    {new Date(ticket.createdAt).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Ticket Detail */}
        <div className="lg:col-span-2 card rounded-xl overflow-hidden">
          <div className="p-6 border-b border-surface-700">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-surface-500 text-sm mb-1">Protocolo</p>
                <h3 className="text-xl font-bold text-white">{selectedTicket.protocol}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm border ${getStatusStyles(selectedTicket.status)}`}>
                {getStatusLabel(selectedTicket.status)}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                {selectedTicket.avatar}
              </div>
              <div>
                <p className="text-white font-medium">{selectedTicket.author}</p>
                <p className="text-surface-400 text-sm">Ticket #{selectedTicket.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <p className="text-surface-500 text-sm mb-1">Assunto</p>
              <p className="text-white">{selectedTicket.subject}</p>
            </div>
            <div>
              <p className="text-surface-500 text-sm mb-1">Mensagem</p>
              <p className="text-surface-300">{selectedTicket.message}</p>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-surface-500 text-sm mb-1">Criado em</p>
                <p className="text-white text-sm">{new Date(selectedTicket.createdAt).toLocaleString('pt-BR')}</p>
              </div>
              {selectedTicket.firstResponse && (
                <div>
                  <p className="text-surface-500 text-sm mb-1">Primeira resposta</p>
                  <p className="text-white text-sm">{new Date(selectedTicket.firstResponse).toLocaleString('pt-BR')}</p>
                </div>
              )}
              {selectedTicket.resolvedAt && (
                <div>
                  <p className="text-surface-500 text-sm mb-1">Resolvido em</p>
                  <p className="text-white text-sm">{new Date(selectedTicket.resolvedAt).toLocaleString('pt-BR')}</p>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedTicket.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-surface-700 rounded text-xs text-surface-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Response Section */}
          <div className="p-6 border-t border-surface-700">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-surface-400" />
              <span className="text-surface-400 text-sm">Responder atendimento</span>
            </div>
            <textarea 
              className="input-field h-32 mb-4" 
              placeholder="Digite sua resposta..."
            ></textarea>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Inserir tag">
                  <Tag className="w-4 h-4" />
                </button>
                <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Arquivar">
                  <Archive className="w-4 h-4" />
                </button>
              </div>
              <button className="btn-primary flex items-center gap-2">
                <Send className="w-4 h-4" />
                Enviar Resposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}