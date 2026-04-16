import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SocialLens - Sua plataforma completa de Social Listening',
  description: 'Monitoramento de redes sociais, SAC 2.0, análise de sentimento com IA e dashboards em tempo real.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}