'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, LayoutDashboard, Target, MessageCircle, 
  Brain, FileText, Bell, Settings, Users, Search,
  TrendingUp, Mic, BarChart, Globe, Zap, LogOut
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/monitoramentos', icon: Target, label: 'Monitoramentos' },
  { href: '/dashboard/mencoes', icon: Mic, label: 'Menções' },
  { href: '/dashboard/sac', icon: MessageCircle, label: 'SAC 2.0' },
  { href: '/dashboard/analise', icon: Brain, label: 'Análise' },
  { href: '/dashboard/grafos', icon: TrendingUp, label: 'Grafos' },
  { href: '/dashboard/relatorios', icon: FileText, label: 'Relatórios' },
  { href: '/dashboard/alertas', icon: Bell, label: 'Alertas' },
  { href: '/dashboard/equipe', icon: Users, label: 'Equipe' },
  { href: '/dashboard/configuracoes', icon: Settings, label: 'Configurações' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-surface-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-800 border-r border-surface-700 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-surface-700">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-bold text-white">SocialLens</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-500/10 text-primary-400'
                    : 'text-surface-400 hover:bg-surface-700 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-surface-700">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-surface-400 hover:bg-surface-700 hover:text-white transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-surface-800 border-b border-surface-700 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 text-surface-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Buscar menções..." 
                className="bg-surface-700 border-none rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 w-80"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-surface-400 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
                JD
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white">João Doe</p>
                <p className="text-xs text-surface-400">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}