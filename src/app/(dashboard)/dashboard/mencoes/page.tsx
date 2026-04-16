'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Download, MoreHorizontal, Tag,
  TrendingUp, TrendingDown, MessageCircle, Eye,
  Heart, Share2, Reply, Trash2, Check, X
} from 'lucide-react';

const mentions = [
  {
    id: 1,
    author: '@maria_santos',
    avatar: 'M',
    content: 'Adorei o atendimento da empresa! Muito rápida a resposta e resolveu meu problema.',
    source: 'twitter',
    sentiment: 'positivo',
    emotion: 'alegria',
    publishedAt: '2024-01-15T10:30:00Z',
    engagement: { likes: 45, shares: 12, comments: 8 },
    tags: ['atendimento', 'elogio'],
    project: 'Minha Marca'
  },
  {
    id: 2,
    author: '@joao_pedro',
    avatar: 'J',
    content: 'Produto chegou com defeito. Já mandei mensagemDirectMessage e ninguém respondeu até agora. Muito ruim!',
    source: 'instagram',
    sentiment: 'negativo',
    emotion: 'raiva',
    publishedAt: '2024-01-15T09:45:00Z',
    engagement: { likes: 23, shares: 5, comments: 3 },
    tags: ['produto', 'defeito'],
    project: 'Minha Marca'
  },
  {
    id: 3,
    author: '@ana_clara',
    avatar: 'A',
    content: 'Alguém sabe se o prazo de entrega é bom? Estou pensando em comprar.',
    source: 'facebook',
    sentiment: 'neutro',
    emotion: 'anticipacao',
    publishedAt: '2024-01-15T09:15:00Z',
    engagement: { likes: 8, shares: 2, comments: 5 },
    tags: ['pergunta'],
    project: 'Minha Marca'
  },
  {
    id: 4,
    author: '@carlos_m',
    avatar: 'C',
    content: 'Recomendo! Produto de excelente qualidade e preço justo. Vou comprar mais vezes.',
    source: 'twitter',
    sentiment: 'positivo',
    emotion: 'alegria',
    publishedAt: '2024-01-15T08:20:00Z',
    engagement: { likes: 67, shares: 18, comments: 12 },
    tags: ['produto', 'recomendacao'],
    project: 'Minha Marca'
  },
  {
    id: 5,
    author: '@rafaela_b',
    avatar: 'R',
    content: 'Preço muito alto para a qualidade entregue. Esperava mais pelo que pagamos.',
    source: 'instagram',
    sentiment: 'negativo',
    emotion: 'tristeza',
    publishedAt: '2024-01-15T07:50:00Z',
    engagement: { likes: 31, shares: 8, comments: 4 },
    tags: ['preco', 'qualidade'],
    project: 'Minha Marca'
  },
  {
    id: 6,
    author: '@pedro_h',
    avatar: 'P',
    content: 'Novo lançamento da marca está incrível! Mal posso esperar para testar.',
    source: 'twitter',
    sentiment: 'positivo',
    emotion: 'anticipacao',
    publishedAt: '2024-01-14T22:30:00Z',
    engagement: { likes: 89, shares: 25, comments: 15 },
    tags: ['lancamento', 'interesse'],
    project: 'Campanha Produto Y'
  },
];

const filters = {
  sentiment: ['Todos', 'Positivo', 'Neutro', 'Negativo'],
  source: ['Todos', 'Twitter', 'Instagram', 'Facebook', 'RSS', 'News'],
  project: ['Todos os projetos', 'Minha Marca', 'Concorrente XYZ', 'Campanha Produto Y', 'Setor Tech']
};

const getSentimentStyles = (sentiment: string) => {
  switch (sentiment) {
    case 'positivo':
      return 'text-green-400 bg-green-400/10 border-green-400/20';
    case 'negativo':
      return 'text-red-400 bg-red-400/10 border-red-400/20';
    default:
      return 'text-surface-400 bg-surface-400/10 border-surface-400/20';
  }
};

export default function MencoesPage() {
  const [selectedMentions, setSelectedMentions] = useState<number[]>([]);
  const [filterSentiment, setFilterSentiment] = useState('Todos');
  const [filterSource, setFilterSource] = useState('Todos');

  const toggleSelectAll = () => {
    if (selectedMentions.length === mentions.length) {
      setSelectedMentions([]);
    } else {
      setSelectedMentions(mentions.map(m => m.id));
    }
  };

  const toggleSelect = (id: number) => {
    if (selectedMentions.includes(id)) {
      setSelectedMentions(selectedMentions.filter(i => i !== id));
    } else {
      setSelectedMentions([...selectedMentions, id]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Central de Menções</h1>
          <p className="text-surface-400">1.247 menções capturadas</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="card p-4 rounded-xl">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-5 h-5 text-surface-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Buscar nas menções..." 
              className="input-field pl-10 py-2"
            />
          </div>
          
          <select 
            value={filterSentiment}
            onChange={(e) => setFilterSentiment(e.target.value)}
            className="bg-surface-700 border-none rounded-lg px-4 py-2 text-sm text-surface-300"
          >
            {filters.sentiment.map(s => <option key={s}>{s}</option>)}
          </select>
          
          <select 
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value)}
            className="bg-surface-700 border-none rounded-lg px-4 py-2 text-sm text-surface-300"
          >
            {filters.source.map(s => <option key={s}>{s}</option>)}
          </select>
          
          <select className="bg-surface-700 border-none rounded-lg px-4 py-2 text-sm text-surface-300">
            {filters.project.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedMentions.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-4 rounded-xl flex items-center justify-between"
        >
          <span className="text-surface-400">
            {selectedMentions.length} menções selecionadas
          </span>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-700 hover:bg-surface-600 rounded-lg text-sm text-white">
              <Tag className="w-4 h-4" />
              Inserir Tag
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-700 hover:bg-surface-600 rounded-lg text-sm text-white">
              <Check className="w-4 h-4" />
              Qualificar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-700 hover:bg-surface-600 rounded-lg text-sm text-white">
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </motion.div>
      )}

      {/* Mentions List */}
      <div className="card rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-surface-700 bg-surface-800/50 text-surface-400 text-sm">
          <div className="col-span-1">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                checked={selectedMentions.length === mentions.length}
                onChange={toggleSelectAll}
                className="rounded bg-surface-700 border-surface-600"
              />
            </label>
          </div>
          <div className="col-span-4">Menção</div>
          <div className="col-span-2">Autor</div>
          <div className="col-span-2">Sentimento</div>
          <div className="col-span-2">Engajamento</div>
          <div className="col-span-1">Ações</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-surface-700">
          {mentions.map((mention, index) => (
            <motion.div 
              key={mention.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-12 gap-4 p-4 hover:bg-surface-800/30 transition-colors items-center"
            >
              <div className="col-span-1">
                <input 
                  type="checkbox" 
                  checked={selectedMentions.includes(mention.id)}
                  onChange={() => toggleSelect(mention.id)}
                  className="rounded bg-surface-700 border-surface-600"
                />
              </div>
              <div className="col-span-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-700 flex items-center justify-center text-surface-400 font-bold flex-shrink-0">
                    {mention.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-sm line-clamp-2">{mention.content}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-surface-500 text-xs capitalize">via {mention.source}</span>
                      <span className="text-surface-600">•</span>
                      <span className="text-surface-500 text-xs">{new Date(mention.publishedAt).toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {mention.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-primary-500/10 text-primary-400 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-white text-sm font-medium">{mention.author}</p>
                <p className="text-surface-500 text-xs">{mention.project}</p>
              </div>
              <div className="col-span-2">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${getSentimentStyles(mention.sentiment)}`}>
                  {mention.sentiment === 'positivo' && <TrendingUp className="w-3 h-3" />}
                  {mention.sentiment === 'negativo' && <TrendingDown className="w-3 h-3" />}
                  {mention.sentiment}
                </span>
                <p className="text-surface-500 text-xs mt-1 capitalize">{mention.emotion}</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-4 text-surface-400">
                  <span className="flex items-center gap-1 text-xs">
                    <Heart className="w-3 h-3" /> {mention.engagement.likes}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <Share2 className="w-3 h-3" /> {mention.engagement.shares}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <MessageCircle className="w-3 h-3" /> {mention.engagement.comments}
                  </span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-2">
                  <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Responder">
                    <Reply className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors" title="Mais opções">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-surface-400 text-sm">Mostrando 1-6 de 1.247 menções</p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-surface-700 text-surface-300 rounded-lg text-sm hover:bg-surface-600">
            Anterior
          </button>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm">
            1
          </button>
          <button className="px-4 py-2 bg-surface-700 text-surface-300 rounded-lg text-sm hover:bg-surface-600">
            2
          </button>
          <button className="px-4 py-2 bg-surface-700 text-surface-300 rounded-lg text-sm hover:bg-surface-600">
            3
          </button>
          <button className="px-4 py-2 bg-surface-700 text-surface-300 rounded-lg text-sm hover:bg-surface-600">
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}