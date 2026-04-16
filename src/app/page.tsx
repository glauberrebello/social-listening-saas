'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, MessageCircle, Brain, TrendingUp, 
  FileText, Zap, Users, Globe, ArrowRight,
  CheckCircle, Star, Menu, X, Linkedin, 
  Instagram, Twitter, Youtube
} from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Monitoramento',
    description: 'Monitore dados públicos no universo aberto das redes sociais e tenha o entendimento das principais narrativas.'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'SAC 2.0',
    description: 'Responda comentários e mensagens privadas com controle de protocolos, tempo médio de resolução e sentimento.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Dashboards',
    description: 'Visualize informações importantes em tempo real em uma única tela. Compartilhe via link.'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Inteligência Artificial',
    description: 'Motor semântico próprio para maior acerto na leitura de sentimentos. Aprende com o uso.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Insights',
    description: 'Acompanhe o crescimento da marca com Pico de Impressões, Engajamento e Feedbacks Negativos.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Grafos',
    description: 'Visualize correlações entre hashtags, menções e perfis. Ideal para análise de redes e influenciadores.'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Word Tree',
    description: 'Imersão qualitativa com cadeias de menções. Descubra palavras e frases conectadas ao seu negócio.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Relatórios',
    description: 'Gráficos completos e personalizáveis. Customize posição, tamanho e formato dos gráficos.'
  }
];

const plans = [
  {
    name: 'Access',
    price: '1.500',
    features: ['4.000 occ/mês', 'Perfis ilimitados', 'Dashboards ilimitados', 'SAC 2.0', '1 usuário'],
    popular: false
  },
  {
    name: 'Starter',
    price: '2.275',
    features: ['15.000 occ/mês', 'Perfis ilimitados', 'Dashboards ilimitados', 'SAC 2.0', '5 usuários'],
    popular: true
  },
  {
    name: 'Essential',
    price: '2.800',
    features: ['25.000 occ/mês', 'Perfis ilimitados', 'Dashboards ilimitados', 'SAC 2.0', '6 usuários'],
    popular: false
  },
  {
    name: 'Advanced',
    price: '3.990',
    features: ['50.000 occ/mês', 'Perfis ilimitados', 'Dashboards ilimitados', 'SAC 2.0', '7 usuários'],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Marcele Dorea',
    role: 'Supervisora de Inteligência e Estratégia - ZAHG',
    text: 'O v-tracker nos surpreendeu com funcionalidades que otimizaram a rotina da equipe, o SLA de nossas entregas e o desenvolvimento de nossos relatórios.',
    avatar: 'M'
  },
  {
    name: 'Max Stabile',
    role: 'CEO - IBPAD',
    text: 'É uma poderosa ferramenta de insights sobre o ambiente difuso das redes sociais. Capaz de capturar milhares de menções e fornecer insights valiosos.',
    avatar: 'M'
  },
  {
    name: 'Pedro Barciela',
    role: 'Analista de Redes Sociais',
    text: 'As possibilidades de enriquecer dados dentro da própria plataforma, bem como exportá-los sempre foram excelentes soluções para nós.',
    avatar: 'P'
  }
];

const navItems = [
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Fale conosco', href: '#contato' }
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SocialLens</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-surface-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="/login" className="text-surface-300 hover:text-white transition-colors">
              Login
            </a>
            <a href="#planos" className="btn-primary text-sm">
              Fale com nossos consultores
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-surface-800 border-t border-surface-700 px-6 py-4"
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block py-3 text-surface-300 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="/login" className="block py-3 text-surface-300 hover:text-white">Login</a>
            <a href="#planos" className="block py-3 text-primary-400 font-medium">Fale com nossos consultores</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sua plataforma
              <br />
              <span className="gradient-text">mais completa de</span>
              <br />
              Social Listening
            </h1>
            <p className="text-xl text-surface-400 mb-8 max-w-2xl mx-auto">
              Entregamos o melhor do social listening e do SAC 2.0 em uma única ferramenta. 
              Identificamos temas e comportamentos nas mídias sociais com IA de verdade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#planos" className="btn-primary inline-flex items-center justify-center gap-2">
                Fale com nossos consultores
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#funcionalidades" className="btn-secondary inline-flex items-center justify-center gap-2">
                Veja como funciona
              </a>
            </div>
          </motion.div>

          {/* Hero Image Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="card rounded-2xl p-2">
              <div className="bg-surface-800 rounded-xl overflow-hidden">
                <div className="bg-surface-700 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-6 grid grid-cols-4 gap-4">
                  <div className="col-span-1 space-y-3">
                    <div className="h-8 bg-surface-700 rounded animate-pulse"></div>
                    <div className="h-20 bg-surface-700 rounded animate-pulse"></div>
                    <div className="h-20 bg-surface-700 rounded animate-pulse"></div>
                    <div className="h-20 bg-surface-700 rounded animate-pulse"></div>
                  </div>
                  <div className="col-span-3 space-y-3">
                    <div className="h-32 bg-surface-700 rounded animate-pulse"></div>
                    <div className="h-48 bg-surface-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 px-6 border-y border-surface-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-surface-500 mb-8">Nossos parceiros</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            <div className="h-10 w-32 bg-surface-700 rounded flex items-center justify-center text-surface-400">Parceiro 1</div>
            <div className="h-10 w-32 bg-surface-700 rounded flex items-center justify-center text-surface-400">IBPAD</div>
            <div className="h-10 w-32 bg-surface-700 rounded flex items-center justify-center text-surface-400">Parceiro 3</div>
            <div className="h-10 w-32 bg-surface-700 rounded flex items-center justify-center text-surface-400">Parceiro 4</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funcionalidades" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Por que escolher o SocialLens?
            </h2>
            <p className="text-surface-400 text-lg max-w-2xl mx-auto">
              Inteligência artificial de verdade para análise de sentimentos e insights de qualidade no timing certo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 rounded-xl hover:border-primary-500/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-surface-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-surface-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">O que falam sobre o SocialLens</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-surface-300 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-surface-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Planos a partir de</h2>
            <p className="text-5xl font-bold gradient-text mb-4">R$ 1.500 mensais</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-surface-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Extraia insights assertivos</span>
              </div>
              <div className="flex items-center gap-2 text-surface-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Gere relatórios em um clique</span>
              </div>
              <div className="flex items-center gap-2 text-surface-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Adapte ao tamanho da sua equipe</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card p-8 rounded-xl relative ${plan.popular ? 'border-primary-500 ring-2 ring-primary-500/20' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MAIS POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-white">R$</span>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-surface-500">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-surface-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                    : 'bg-surface-700 hover:bg-surface-600 text-white'
                }`}>
                  QUERO ESSE
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-surface-400 mb-4">Precisa de um plano especial?</p>
            <a href="#contato" className="text-primary-400 hover:text-primary-300 font-medium">
              Fale conosco para um plano Enterprise &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-20 px-6 bg-surface-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Fale conosco</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-surface-400 text-sm mb-2">Nome</label>
                  <input type="text" className="input-field" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-surface-400 text-sm mb-2">E-mail</label>
                  <input type="email" className="input-field" placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Empresa</label>
                <input type="text" className="input-field" placeholder="Nome da sua empresa" />
              </div>
              <div>
                <label className="block text-surface-400 text-sm mb-2">Mensagem</label>
                <textarea className="input-field h-32" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-surface-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">SocialLens</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-surface-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-surface-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-surface-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-surface-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-surface-500 text-sm">
              &copy; 2024 SocialLens. Todos os direitos reservados.
            </p>
          </div>
          <div className="mt-8 text-center text-surface-500 text-sm">
            <p>Trabalhamos dentro da LGPD (Lei nº 13.709/2018)</p>
            <p className="mt-2">dados@sociallens.com.br</p>
          </div>
        </div>
      </footer>
    </div>
  );
}