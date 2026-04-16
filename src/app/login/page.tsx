import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SocialLens - Login',
};

export default function LoginTest() {
  return (
    <div className="min-h-screen bg-surface-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Servidor está funcionando!</h1>
        <p className="text-surface-400">Se você能看到 isso，说明 Next.js está rodando.</p>
      </div>
    </div>
  );
}