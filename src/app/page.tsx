'use client';

import { useState } from 'react';

export default function Home() {
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'success'>('idle');

  const runSimulation = () => {
    setPipelineState('running');
    setTimeout(() => {
      setPipelineState('success');
    }, 2000);
  };

  return (
    <main
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      {/* Header Section */}
      <header style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="status-badge">
            <span className="status-dot"></span>
            CI/CD Pipeline Ready
          </span>
        </div>
        <h1
          className="gradient-text"
          style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          Estudando CI/CD com Next.js
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Projeto modelo com Next.js (App Router), ESLint e Prettier para testes de integração contínua.
        </p>
      </header>

      {/* Main Grid Section */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--accent-cyan)' }}>
            1. ESLint
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
            Validação estática de código para evitar erros de sintaxe, tipos ou más práticas em JavaScript e TypeScript.
          </p>
          <pre
            style={{
              background: 'rgba(0,0,0,0.5)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: '#38bdf8',
            }}
          >
            npm run lint
          </pre>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--accent-purple)' }}>
            2. Prettier
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
            Formatação padronizada e automática do código para manter padrão consistente na equipe.
          </p>
          <pre
            style={{
              background: 'rgba(0,0,0,0.5)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: '#a855f7',
            }}
          >
            npm run format:check
          </pre>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--accent-pink)' }}>
            3. GitHub Actions
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
            Execução automatizada das verificações de linting, formatação e build a cada commit ou pull request.
          </p>
          <pre
            style={{
              background: 'rgba(0,0,0,0.5)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: '#ec4899',
            }}
          >
            git push origin main
          </pre>
        </div>
      </section>

      {/* Interactive Simulation Section */}
      <section className="card" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
          Simulador de Verificação Local
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
          Clique no botão abaixo para simular os passos que a pipeline de CI irá executar.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <button className="btn btn-primary" onClick={runSimulation} disabled={pipelineState === 'running'}>
            {pipelineState === 'idle' && '🚀 Executar Verificação CI'}
            {pipelineState === 'running' && '⏳ Verificando Linting & Prettier...'}
            {pipelineState === 'success' && '✅ Todas as Etapas Aprovadas!'}
          </button>
        </div>

        {pipelineState !== 'idle' && (
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              background: 'rgba(0,0,0,0.6)',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'left',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.875rem',
            }}
          >
            <div style={{ color: '#22c55e' }}>✔ Check format: npm run format:check</div>
            <div style={{ color: pipelineState === 'running' ? '#eab308' : '#22c55e', marginTop: '6px' }}>
              {pipelineState === 'running' ? '⏳ Running linter...' : '✔ Check lint: npm run lint'}
            </div>
            <div style={{ color: pipelineState === 'running' ? '#6b7280' : '#22c55e', marginTop: '6px' }}>
              {pipelineState === 'running' ? '⏳ Pending build...' : '✔ Build project: npm run build'}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
