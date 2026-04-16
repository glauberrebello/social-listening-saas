'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, MessageCircle, TrendingUp, TrendingDown,
  AlertTriangle, Users, Globe, Eye, Heart, Share2,
  MoreHorizontal, Search, Filter, Download, RefreshCw
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';

const volumeData = [
  { time: '00h', mentions: 45 },
  { time: '04h', mentions: 32 },
  { time: '08h', mentions: 78 },
  { time: '12h', mentions: 156 },
  { time: '16h', mentions: 189 },
  { time: '20h', mentions: 142 },
  { time: '24h', mentions: 98 },
];

const sentimentData = [
  { name: 'Positivo', value: 45, color: '#10b981' },
  { name: 'Neutro', value: 35, color: '#64748b' },
  { name: 'Negativo', value: 20, color: '#ef4444' },
];

const sourceData = [
  { source: 'Twitter', count: 420 },
  { source: 'Instagram', count: 280 },
  { source: 'Facebook', count: 150 },
  { source: 'RSS', count: 80 },
  { source: 'News', count: 70 },
];

const topTopics = [
  { topic: 'atendimento', count: 156 },
  { topic: 'produto', count: 142 },
  { topic: 'preço', count: 98 },
  { topic: 'qualidade', count: 87 },
  { topic: 'entrega', count: 76 },
];

const recentMentions = [
  {
    id: 1,
    author: '@maria_santos',
    avatar: 'M',
    content: 'Adorei o atendimento da empresa! Muito rápida a resposta.',
    source: 'twitter',
    sentiment: 'positivo',
    time: '5 min',
    engagement: 45
  },
  {
    id: 2,
    author: '@joao_pedro',
    avatar: 'J',
    content: 'Produto chegou com defeito. Já mandei mensagem e ninguém respondeu.',
    source: 'instagram',
    sentiment: 'negativo',
    time: '12 min',
    engagement: 23
  },
  {
    id: 3,
    author: '@ana_clara',
    avatar: 'A',
    content: 'Alguém sabe se o prazo de entrega é bom?',
    source: 'facebook',
    sentiment: 'neutro',
    time: '25 min',
    engagement: 8
  },
  {
    id: 4,
    author: '@carlos_m',
    avatar: 'C',
    content: 'Recomendo! Produto de excelente qualidade.',
    source: 'twitter',
    sentiment: 'positivo',
    time: '1h',
    engagement: 67
  },
  {
    id: 5,
    author: '@rafaela_b',
    avatar: 'R',
    content: 'Preço muito alto para a qualidade entregue.',
    source: 'instagram',
    sentiment: 'negativo',
    time: '2h',
    engagement: 31
  },
];

const alerts = [
  {
    id: 1,
    type: 'sentimento',
    message: 'Aumento de menções negativas sobre atendimento',
    time: '1h atrás',
    urgent: true
  },
  {
    id: 2,
    type: 'volume',
    message: 'Pico de volume detectado - +156% nas últimas 2h',
    time: '2h atrás',
    urgent: false
  },
];

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positivo': return 'text-green-400 bg-green-400/10';
    case 'negativo': return 'text-red-400 bg-red-400/10';
    default: return 'text-surface-400 bg-surface-400/10';
  }
};

const getSentimentIcon = (sentiment: string) => {
  switch (sentiment) {
    case 'positivo': return <TrendingUp className="w-4 h-4" />;
    case 'negativo': return <TrendingDown className="w-4 h-4" />;
    default: return null;
  }
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-surface-400">Visão geral das suas métricas de social listening</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary flex items-center gap-2 text-sm">
            <RefreshCw className="w-4 h-4" />
            Atualizar
          </button>
          <button className="btn-primary flex items-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <span className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> +12.5%
            </span>
          </div>
          <p className="text-surface-400 text-sm mb-1">Total de Menções</p>
          <p className="text-3xl font-bold text-white">1.247</p>
          <p className="text-surface-500 text-xs mt-2">Últimas 24 horas</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> +8.2%
            </span>
          </div>
          <p className="text-surface-400 text-sm mb-1">Sentimento Positivo</p>
          <p className="text-3xl font-bold text-white">45%</p>
          <p className="text-surface-500 text-xs mt-2">20% negativo, 35% neutro</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Globe className="w-6 h-6" />
            </div>
          </div>
          <p className="text-surface-400 text-sm mb-1">Alcance Total</p>
          <p className="text-3xl font-bold text-white">89.4K</p>
          <p className="text-surface-500 text-xs mt-2">Possíveis impressões</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-red-400 text-sm flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" /> 2 urgentes
            </span>
          </div>
          <p className="text-surface-400 text-sm mb-1">Alertas</p>
          <p className="text-3xl font-bold text-white">8</p>
          <p className="text-surface-500 text-xs mt-2">Últimas 24 horas</p>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Volume Over Time */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-6 rounded-xl lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Volume de Menções</h3>
            <select className="bg-surface-700 border-none rounded-lg px-3 py-1 text-sm text-surface-300">
              <option>Últimas 24h</option>
              <option>Últimos 7 dias</option>
              <option>Últimos 30 dias</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={volumeData}>
              <defs>
                <linearGradient id="colorMentions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#f8fafc' }}
              />
              <Area 
                type="monotone" 
                dataKey="mentions" 
                stroke="#6366f1" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorMentions)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Sentiment Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Distribuição de Sentimento</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            {sentimentData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-surface-400 text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sources */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Fontes</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sourceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
              <XAxis type="number" stroke="#64748b" fontSize={12} />
              <YAxis type="category" dataKey="source" stroke="#64748b" fontSize={12} width={80} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Bar dataKey="count" fill="#6366f1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Topics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Principais Tópicos</h3>
          <div className="space-y-4">
            {topTopics.map((item, index) => (
              <div key={item.topic} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-surface-500 text-sm w-5">#{index + 1}</span>
                  <span className="text-white font-medium">{item.topic}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-surface-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary-500 rounded-full" 
                      style={{ width: `${(item.count / 156) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-surface-400 text-sm w-10 text-right">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Alerts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Alertas Recentes</h3>
            <a href="/dashboard/alertas" className="text-primary-400 text-sm hover:text-primary-300">Ver todos</a>
          </div>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-4 rounded-lg ${alert.urgent ? 'bg-red-500/10 border border-red-500/20' : 'bg-surface-700/50'}`}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-5 h-5 ${alert.urgent ? 'text-red-400' : 'text-yellow-400'}`} />
                  <div className="flex-1">
                    <p className="text-white text-sm">{alert.message}</p>
                    <p className="text-surface-500 text-xs mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Mentions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="card rounded-xl overflow-hidden"
      >
        <div className="p-6 border-b border-surface-700 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Menções Recentes</h3>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-surface-400 hover:text-white text-sm">
              <Filter className="w-4 h-4" />
              Filtrar
            </button>
            <a href="/dashboard/mencoes" className="text-primary-400 text-sm hover:text-primary-300">Ver todas</a>
          </div>
        </div>
        <div className="divide-y divide-surface-700">
          {recentMentions.map((mention) => (
            <div key={mention.id} className="p-6 flex items-start gap-4 hover:bg-surface-800/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-surface-700 flex items-center justify-center text-surface-400 font-bold">
                {mention.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-white font-medium">{mention.author}</span>
                  <span className="text-surface-500 text-sm capitalize">via {mention.source}</span>
                  <span className="text-surface-500 text-sm">{mention.time}</span>
                </div>
                <p className="text-surface-300 text-sm mb-2">{mention.content}</p>
                <div className="flex items-center gap-4">
                  <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getSentimentColor(mention.sentiment)}`}>
                    {getSentimentIcon(mention.sentiment)}
                    {mention.sentiment}
                  </span>
                  <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <Heart className="w-3 h-3" /> {Math.floor(mention.engagement * 0.6)}
                  </span>
                  <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <Share2 className="w-3 h-3" /> {Math.floor(mention.engagement * 0.3)}
                  </span>
                  <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <Eye className="w-3 h-3" /> {mention.engagement}
                  </span>
                </div>
              </div>
              <button className="p-2 text-surface-400 hover:text-white transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}