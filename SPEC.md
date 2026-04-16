# Social Listening SaaS - Especificação Técnica

## Visão Geral do Projeto

Plataforma SaaS de Social Listening completa com frontend institucional (landing page) e painel administrativo para gestão de monitoramentos, análise de sentimento via IA, SAC 2.0, dashboards em tempo real e relatórios automatizados.

## Stack Tecnológico

- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **Database:** PostgreSQL (Prisma ORM)
- **Auth:** NextAuth.js
- **Charts:** Recharts
- **State:** Zustand
- **Forms:** React Hook Form + Zod

## Estrutura do Projeto

```
social-listening-saas/
├── src/
│   ├── app/
│   │   ├── (marketing)/          # Páginas institucionais
│   │   │   ├── page.tsx          # Landing page
│   │   │   ├── quem-somos/page.tsx
│   │   │   ├── planos/page.tsx
│   │   │   ├── blog/page.tsx
│   │   │   └── contato/page.tsx
│   │   ├── (app)/                # Painel administrativo
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── monitoramentos/page.tsx
│   │   │   ├── mencoes/page.tsx
│   │   │   ├── sac/page.tsx
│   │   │   ├── analise/page.tsx
│   │   │   ├── relatorios/page.tsx
│   │   │   ├── alertas/page.tsx
│   │   │   ├── configuracoes/page.tsx
│   │   │   └── equipe/page.tsx
│   │   ├── api/                  # API routes
│   │   └── login/page.tsx
│   ├── components/
│   │   ├── ui/                   # Componentes base
│   │   ├── marketing/            # Componentes landing
│   │   └── app/                  # Componentes painel
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   └── types/
└── prisma/
    └── schema.prisma
```

## Funcionalidades

### 1. Landing Page Institucional

- Hero section com CTA
- Seção "Quem somos"
- Produtos (v-tracker clone)
- Planos com precificação
- Blog
- Contato
- Footer com política de privacidade

### 2. Painel Admin - Dashboard

- Métricas gerais em tempo real
- Total de menções
- Sentimento geral (positivo/negativo/neutro)
- Volume ao longo do tempo (gráfico)
- Principais tópicos (word cloud)
- Alertas urgentes
- Fontes de menções

### 3. Monitoramentos

- Criar/editar/ excluir monitoramentos
- Palavras-chave (track keywords)
- Redes sociais (Twitter, Instagram, Facebook, RSS, News)
- Filtros por idioma, localização

### 4. Central de Menções

- Lista de menções capturadas
- Filtros avançados (sentimento, fonte, data, tags)
- Sentimentalização manual
- Ações em massa (tag, exportar CSV, qualificar)
- Resposta direta (SAC)

### 5. SAC 2.0

- Gestão de atendimentos
- Protocolos automáticos
- Tempo médio de resposta
- Sentimento por atendimento
- Tags e categorização
- Relatórios de performance

### 6. Análise e IA

- Share of Voice (comparação com concorrentes)
- Tópicos emergentes
- Grafos de relacionamento (hashtags, menções, perfis)
- Evolução de interações
- Word Tree (árvore de palavras)

### 7. Dashboards

- Visualizações em tempo real
- Modo compartilhável (link público)
- Personalizável (arrastar componentes)

### 8. Relatórios

- Relatórios PDF automáticos
- Gráficos personalizados
- Exportação (CSV, Excel)

### 9. Regras de Automação

- Aplicar tag automaticamente
- Classificar sentimento
- Enviar e-mail
- Abrir ticket
- Arquivar ocorrência

### 10. Configurações

- Perfil da empresa
- Usuários e permissões
- Planos e limites
- Integrações (webhooks)

## Modelos de Dados (Prisma)

```prisma
model Tenant {
  id            String    @id @default(cuid())
  name          String
  plan          String    @default("starter")
  logo          String?
  primaryColor  String    @default("#6366f1")
  createdAt     DateTime  @default(now())
  users         User[]
  projects      Project[]
  mentions      Mention[]
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String
  password      String
  role          String    @default("user")
  tenantId      String
  tenant        Tenant    @relation(fields: [tenantId], references: [id])
  createdAt     DateTime  @default(now())
}

model Project {
  id            String    @id @default(cuid())
  name          String
  description   String?
  keywords      Keyword[]
  sources       String[]
  tenantId      String
  tenant        Tenant    @relation(fields: [tenantId], references: [id])
  mentions      Mention[]
  createdAt     DateTime  @default(now())
}

model Keyword {
  id            String    @id @default(cuid())
  term          String
  projectId     String
  project       Project   @relation(fields: [projectId], references: [id])
}

model Mention {
  id            String    @id @default(cuid())
  content       String
  source         String
  author         String
  authorUrl      String?
  authorImage    String?
  sentiment      String    @default("neutro")
  confidence     Float?
  emotion        String?
  url            String
  publishedAt   DateTime
  projectId     String
  project       Project   @relation(fields: [projectId], references: [id])
  tenantId      String
  tenant        Tenant    @relation(fields: [tenantId], references: [id])
  tags          Tag[]
  tags           Tag[]
  createdAt     DateTime  @default(now())
}

model Tag {
  id            String    @id @default(cuid())
  name          String
  color         String    @default("#6366f1")
  tenantId      String
  mentions      Mention[] @relation("MentionTags")
}

model Alert {
  id            String    @id @default(cuid())
  type          String
  message       String
  mentionId     String?
  tenantId      String
  read          Boolean   @default(false)
  createdAt     DateTime  @default(now())
}

model Report {
  id            String    @id @default(cuid())
  name          String
  projectId     String
  data          Json
  tenantId      String
  createdAt     DateTime  @default(now())
}

model Ticket {
  id            String    @id @default(cuid())
  protocol      String    @unique
  status        String    @default("open")
  mentionId     String?
  assignedTo    String?
  sentiment     String?
  tags          String[]
  resolutionTime Int?
  firstResponseTime Int?
  tenantId      String
  createdAt     DateTime  @default(now())
}
```

## Páginas da Landing Page

1. **Home (/)** - Hero, features overview, testimonials, CTA
2. **Quem somos (/quem-somos)** - Empresa, missão, valores
3. **Planos (/planos)** - Pricing table (Access, Lite, Starter, Essential, Advanced, Enterprise)
4. **Blog (/blog)** - Artigos sobre social listening
5. **Contato (/contato)** - Formulário de contato

## Páginas do Painel Admin

1. **Dashboard (/dashboard)** - Visão geral com métricas
2. **Monitoramentos (/monitoramentos)** - Gestão de projetos
3. **Menções (/mencoes)** - Central de menções capturadas
4. **SAC (/sac)** - Gestão de atendimento
5. **Análise (/analise)** - IA, gráficos, insights
6. **Relatórios (/relatorios)** - Relatórios e exportação
7. **Alertas (/alertas)** - Central de alertas
8. **Configurações (/configuracoes)** - Configurações da conta

## Design System

### Cores
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)
- Error: `#ef4444` (Red)
- Background: `#0f172a` (Dark mode default)
- Surface: `#1e293b`
- Text: `#f8fafc`

### Tipografia
- Headings: Inter Bold
- Body: Inter Regular

## Implementação - Fases

### Fase 1: Landing Page
- Layout completo com todas as seções
- Design responsivo
- Integração com formulário de contato

### Fase 2: Autenticação
- Login/Cadastro
- NextAuth.js com credenciais
- Middleware de proteção

### Fase 3: Dashboard Principal
- Métricas em tempo real
- Gráficos com Recharts
- Layout do painel

### Fase 4: Monitoramentos e Menções
- CRUD de monitoramentos
- Lista de menções com filtros
- Ações em massa

### Fase 5: SAC 2.0
- Gestão de tickets
- Resposta a menções
- Relatórios de performance

### Fase 6: Análise Avançada
- Share of Voice
- Tópicos emergentes
- Grafos e visualizações

### Fase 7: Relatórios e Exportação
- Geração de PDFs
- Exportação CSV/Excel

## Preços base (参照 v-tracker)

- Access: R$ 1.500/mês (4.000 occ/mês, 1 usuário)
- Lite: R$ 1.890/mês (10.000 occ/mês, 2 usuários)
- Starter: R$ 2.275/mês (15.000 occ/mês, 5 usuários)
- Essential: R$ 2.800/mês (25.000 occ/mês, 6 usuários)
- Advanced: R$ 3.990/mês (50.000 occ/mês, 7 usuários)
- Enterprise: Sob consulta