import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Estudando CI/CD | Next.js + ESLint + Prettier',
  description:
    'Ambiente de estudos para testes de integração e entrega contínua (CI/CD) com Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="glow-bg" />
        {children}
      </body>
    </html>
  );
}
