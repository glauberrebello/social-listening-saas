'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, ZoomIn, ZoomOut, RotateCcw, Download, 
  Filter, Maximize2, Rss, Hash, AtSign, Tag as TagIcon
} from 'lucide-react';

const graphData = {
  nodes: [
    { id: 'marca', label: 'Minha Marca', type: 'brand', x: 400, y: 300 },
    { id: 'produto', label: 'produto', type: 'keyword', x: 200, y: 200 },
    { id: 'atendimento', label: 'atendimento', type: 'keyword', x: 600, y: 200 },
    { id: 'preco', label: 'preço', type: 'keyword', x: 300, y: 450 },
    { id: 'qualidade', label: 'qualidade', type: 'keyword', x: 500, y: 450 },
    { id: '@influenciador1', label: '@influenciador1', type: 'user', x: 150, y: 350 },
    { id: '@influenciador2', label: '@influenciador2', type: 'user', x: 650, y: 350 },
    { id: '#lancamento', label: '#lancamento', type: 'hashtag', x: 400, y: 100 },
    { id: '#promocao', label: '#promoção', type: 'hashtag', x: 250, y: 550 },
    { id: '@concorrente', label: '@concorrente', type: 'user', x: 550, y: 550 },
  ],
  edges: [
    { from: 'marca', to: 'produto', weight: 85 },
    { from: 'marca', to: 'atendimento', weight: 72 },
    { from: 'marca', to: 'preco', weight: 65 },
    { from: 'marca', to: 'qualidade', weight: 58 },
    { from: 'marca', to: '#lancamento', weight: 45 },
    { from: 'produto', to: '@influenciador1', weight: 35 },
    { from: 'atendimento', to: '@influenciador2', weight: 28 },
    { from: 'preco', to: '#promocao', weight: 22 },
    { from: 'qualidade', to: '@concorrente', weight: 18 },
  ]
};

const correlationData = [
  { pair: 'produto ↔ atendimento', correlation: 0.85, strength: 'Forte' },
  { pair: 'preço ↔ qualidade', correlation: 0.72, strength: 'Moderada' },
  { pair: '#lancamento ↔ @influenciador1', correlation: 0.68, strength: 'Moderada' },
  { pair: 'atendimento ↔ @influenciador2', correlation: 0.55, strength: 'Fraca' },
  { pair: 'preço ↔ #promoção', correlation: 0.45, strength: 'Fraca' },
];

export default function GrafosPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Grafos e Correlações</h1>
          <p className="text-surface-400">Visualize relações entre hashtags, menções e perfis</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <button className="btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exportar PNG
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            Tela Cheia
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Graph Container */}
        <div className="lg:col-span-3 card rounded-xl overflow-hidden">
          {/* Graph Controls */}
          <div className="p-4 border-b border-surface-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors">
                <ZoomIn className="w-5 h-5" />
              </button>
              <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors">
                <ZoomOut className="w-5 h-5" />
              </button>
              <button className="p-2 text-surface-400 hover:text-white hover:bg-surface-700 rounded-lg transition-colors">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-surface-400">
                <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                Marca
              </span>
              <span className="flex items-center gap-2 text-surface-400">
                <Hash className="w-4 h-4" />
                Hashtag
              </span>
              <span className="flex items-center gap-2 text-surface-400">
                <AtSign className="w-4 h-4" />
                Usuário
              </span>
            </div>
          </div>

          {/* Graph Visualization */}
          <div className="relative h-[600px] bg-surface-900/50">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              {/* Edges */}
              {graphData.edges.map((edge, i) => {
                const fromNode = graphData.nodes.find(n => n.id === edge.from);
                const toNode = graphData.nodes.find(n => n.id === edge.to);
                if (!fromNode || !toNode) return null;
                return (
                  <line
                    key={i}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke="#6366f1"
                    strokeWidth={edge.weight / 20}
                    strokeOpacity={0.4}
                  />
                );
              })}
              
              {/* Nodes */}
              {graphData.nodes.map((node) => (
                <g 
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.type === 'brand' ? 30 : node.type === 'user' ? 22 : 18}
                    fill={
                      node.type === 'brand' ? '#6366f1' :
                      node.type === 'hashtag' ? '#8b5cf6' :
                      node.type === 'user' ? '#10b981' :
                      '#64748b'
                    }
                    className="hover:opacity-80 transition-opacity"
                  />
                  <text
                    x={node.x}
                    y={node.y + 35}
                    textAnchor="middle"
                    fill="#f8fafc"
                    fontSize={11}
                    fontWeight={node.type === 'brand' ? 'bold' : 'normal'}
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Selected Node Info */}
          {selectedNode && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="card p-4 rounded-xl"
            >
              <h3 className="text-white font-medium mb-4">Informações do nó</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-surface-500 text-xs">Label</p>
                  <p className="text-white font-medium">{graphData.nodes.find(n => n.id === selectedNode)?.label}</p>
                </div>
                <div>
                  <p className="text-surface-500 text-xs">Tipo</p>
                  <p className="text-white capitalize">{graphData.nodes.find(n => n.id === selectedNode)?.type}</p>
                </div>
                <div>
                  <p className="text-surface-500 text-xs">Conexões</p>
                  <p className="text-white">
                    {graphData.edges.filter(e => e.from === selectedNode || e.to === selectedNode).length}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Correlations */}
          <div className="card p-4 rounded-xl">
            <h3 className="text-white font-medium mb-4">Correlações Principais</h3>
            <div className="space-y-3">
              {correlationData.map((item, i) => (
                <div key={i} className="p-3 bg-surface-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{item.pair}</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      item.strength === 'Forte' ? 'bg-green-500/10 text-green-400' :
                      item.strength === 'Moderada' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-surface-500/10 text-surface-400'
                    }`}>
                      {item.strength}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary-500 rounded-full" 
                      style={{ width: `${item.correlation * 100}%` }}
                    />
                  </div>
                  <p className="text-surface-500 text-xs mt-1">{Math.round(item.correlation * 100)}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="card p-4 rounded-xl">
            <h3 className="text-white font-medium mb-4">Legenda</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-primary-500"></div>
                <span className="text-surface-400 text-sm">Marca monitorada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span className="text-surface-400 text-sm">Hashtag</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-surface-400 text-sm">Perfil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-surface-500"></div>
                <span className="text-surface-400 text-sm">Palavra-chave</span>
              </div>
            </div>
            <p className="text-surface-500 text-xs mt-4">
              A distância entre os pontos indica a proximidade dos temas. 
              Linhas mais grossas = maior correlação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}