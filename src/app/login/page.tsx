import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - SocialLens',
};

export default function LoginPage() {
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
          <form className="space-y-6">
            <div>
              <label className="block text-surface-400 text-sm mb-2">E-mail</label>
              <input 
                type="email" 
                className="input-field" 
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-surface-400 text-sm mb-2">Senha</label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="••••••••"
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
            <button type="submit" className="btn-primary w-full">
              Entrar
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