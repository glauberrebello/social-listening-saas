'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - SocialLens',
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('E-mail ou senha inválidos');
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-surface-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Entrar no SocialLens</h1>
          <p className="text-surface-400 mt-2">Acesse sua plataforma de social listening</p>
        </div>

        <div className="card p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}
            <div>
              <label className="block text-surface-400 text-sm mb-2">E-mail</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field" 
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-surface-400 text-sm mb-2">Senha</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field" 
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-surface-400 text-sm">
                <input type="checkbox" className="rounded bg-surface-700 border-surface-600" />
                Lembrar-me
              </label>
              <a href="#" className="text-primary-400 text-sm hover:text-primary-300">
                Esqueci minha senha
              </a>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-surface-400 text-sm">
              Não tem conta?{' '}
              <a href="#" className="text-primary-400 hover:text-primary-300 font-medium">
                Fale com nossos consultores
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}