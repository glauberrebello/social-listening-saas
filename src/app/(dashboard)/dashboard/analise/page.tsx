'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, TrendingUp, PieChart, BarChart3, Download,
  Calendar, Filter, Share2, Zap, Target, Eye
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart as RePieChart, Pie, Cell,
  BarChart, Bar, LineChart, Line
} from 'recharts';

const sentimentHistory = [
  { date: '01/01', positivo: 45, negativo: 20, neutro: 35 },
  { date: '02/01', positivo: 48, negativo: 18, neutro: 34 },
  { date: '03/01', positivo: 42, negativo: 25, neutro: 33 },
  { date: '04/01', positivo: 50, negativo: 15, neutro: 35 },
  { date: '05/01', positivo: 52, negativo: 18, neutro: 30 },
  { date: '06/01', positivo: 45, negativo: 22, neutro: 33 },
  { date: '07/01', positivo: 55, negativo: 12, neutro: 33 },
];

const shareOfVoice = [
  { brand: 'Minha Marca', share: 45, mentions: 1247 },
  { brand: 'Concorrente A', share: 28, mentions: 776 },
  { brand: 'Concorrente B', share: 15, mentions: 416 },
  { brand: 'Outros', share: 12, mentions: 333 },
];

const emotionsData = [
  { name: 'Alegria', value: 35, color: '#10b981' },
  { name: 'Anticipação', value: 20, color: '#6366f1' },
  { name: 'Confiança', value: 18, color: '#8b5cf6' },
  { name: 'Tristeza', value: 12, color: '#f59e0b' },
  { name: 'Raiva', value: 8, color: '#ef4444' },
  { name: 'Medo', value: 7, color: '#ec4899' },
];

const topInfluencers = [
  { rank: 1, handle: '@influenciador_pro', followers: '2.5M', mentions: 45, reach: '5.2M' },
  { rank: 2, handle: '@blog_tech', followers: '890K', mentions: 32, reach: '1.8M' },
  { rank: 3, handle: '@jornalista_digital', followers: '1.2M', mentions: 28, reach: '3.1M' },
  { rank: 4, handle: '@analista_marketing', followers: '450K', mentions: 21, reach: '890K' },
  { rank: 5, handle: '@startup_brasil', followers: '680K', mentions: 18, reach: '1.2M' },
];

const engagementByType = [
  { type: 'Likes', desktop: 4500, mobile: 8200 },
  { type: 'Comments', desktop: 1200, mobile: 2800 },
  { type: 'Shares', desktop: 800, mobile: 1500 },
  { type: 'Saves', desktop: 300, mobile: 2100 },
];

const insights = [
  {
    type: 'positive',
    title: 'Aumento de engajamento positivo',
    description: 'Menções com sentimento positivo aumentaram 15% na última semana.',
    metric: '+15%'
  },
  {
    type: 'warning',
    title: 'Pico de menções negativas',
    description: 'Detecto aumento de reclamações sobre atendimento nos últimos 3 dias.',
    metric: '+45%'
  },
  {
    type: 'info',
    title: 'Novo influenciador mencionando',
    description: 'O perfil @influenciador_pro começou a mencionar sua marca.',
    metric: 'Novo'
  },
  {
    type: 'positive',
    title: 'Alcance em crescimento',
    description: 'O alcance das menções aumentou significativamente.',
    metric: '+28%'
  },
];

export default function AnalisePage() {
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Análise e IA</h1>
          <p className="text-surface-400">Insights avançados e inteligência artificial</p>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-surface-700 border-none rounded-lg px-4 py-2 text-sm text-surface-300"
          >
            <option value="24h">Últimas 24h</option>
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
          </select>
          <button className="btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Compartilhar
          </button>
        </div>
      </div>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`card p-4 rounded-xl border-l-4 ${
              insight.type === 'positive' ? 'border-l-green-500' :
              insight.type === 'warning' ? 'border-l-yellow-500' :
              'border-l-blue-500'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-white font-medium text-sm">{insight.title}</h3>
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                insight.type === 'positive' ? 'bg-green-500/10 text-green-400' :
                insight.type === 'warning' ? 'bg-yellow-500/10 text-yellow-400' :
                'bg-blue-500/10 text-blue-400'
              }`}>
                {insight.metric}
              </span>
            </div>
            <p className="text-surface-400 text-sm">{insight.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentiment Over Time */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary-400" />
              Evolução do Sentimento
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={sentimentHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Line type="monotone" dataKey="positivo" stroke="#10b981" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="negativo" stroke="#ef4444" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="neutro" stroke="#64748b" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Emotions Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary-400" />
              Distribuição de Emoções
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <RePieChart>
              <Pie
                data={emotionsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {emotionsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </RePieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {emotionsData.map((item) => (
              <div key={item.name} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-surface-400 text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Share of Voice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary-400" />
            Share of Voice
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <RePieChart>
              <Pie
                data={shareOfVoice}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="share"
                label={({ brand, share }) => `${brand}: ${share}%`}
              >
                <Cell fill="#6366f1" />
                <Cell fill="#8b5cf6" />
                <Cell fill="#a78bfa" />
                <Cell fill="#c4b5fd" />
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </RePieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {shareOfVoice.map((item) => (
              <div key={item.brand} className="flex items-center justify-between">
                <span className="text-surface-400 text-sm">{item.brand}</span>
                <span className="text-white font-medium">{item.mentions.toLocaleString()} menções</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Influencers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary-400" />
            Principais Influenciadores
          </h3>
          <div className="space-y-4">
            {topInfluencers.map((influencer) => (
              <div key={influencer.rank} className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-surface-700 flex items-center justify-center text-surface-400 text-xs font-bold">
                  {influencer.rank}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">{influencer.handle}</p>
                  <p className="text-surface-500 text-xs">{influencer.followers} seguidores</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium text-sm">{influencer.mentions}</p>
                  <p className="text-surface-500 text-xs">{influencer.reach} alcance</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engagement by Type */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary-400" />
            Engajamento por Tipo
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={engagementByType}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="type" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Bar dataKey="desktop" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mobile" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* AI Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card p-6 rounded-xl"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary-400" />
          Resumo Inteligente (IA)
        </h3>
        <div className="bg-surface-800/50 rounded-lg p-4">
          <p className="text-surface-300 leading-relaxed">
            Na última semana, a marca <strong className="text-white">Minha Marca</strong> apresentou um aumento de 15% 
            no sentiment positivo, principalmente relacionado a comentários sobre o atendimento ao cliente. O volume total 
            de menções manteve-se estável, com pico no dia 05/01. O <strong className="text-white">Share of Voice</strong> 
            permanece liderando no setor com 45% das menções. Recomenda-se atenção ao aumento de menções negativas sobre 
            o tempo de entrega nos próximos dias.
          </p>
        </div>
      </motion.div>
    </div>
  );
}