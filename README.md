# Estudando CI/CD com Next.js

Este é um projeto prático desenvolvido com **Next.js (App Router)**, **TypeScript**, **ESLint**, **Prettier**, **GitHub Actions** e **Vercel** para estudo e implementação de pipelines de **Integração Contínua (CI)** e **Entrega/Implantação Contínua (CD)**.

---

## 🚀 Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org/)** — Framework React para produção (App Router)
- **[React 19](https://react.dev/)** — Biblioteca de interface de usuário
- **[TypeScript](https://www.typescriptlang.org/)** — Superset JavaScript com tipagem estática
- **[ESLint](https://eslint.org/)** — Linter para identificação e correção de padrões no código
- **[Prettier](https://prettier.io/)** — Formatador de código opinativo
- **[GitHub Actions](https://github.com/features/actions)** — Automação de Workflows de CI/CD
- **[Vercel](https://vercel.com/)** — Plataforma de hospedagem e deploy contínuo

---

## 🛠️ Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

| Comando                | Descrição                                                             |
| :--------------------- | :-------------------------------------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento local em `http://localhost:3000` |
| `npm run build`        | Cria a build otimizada da aplicação para produção                     |
| `npm run start`        | Inicia o servidor em modo de produção                                 |
| `npm run lint`         | Executa a verificação estática do código com o ESLint                 |
| `npm run format`       | Corrige e formata automaticamente o código usando o Prettier          |
| `npm run format:check` | Verifica se os arquivos estão alinhados com as regras do Prettier     |

---

## ⚙️ Pipelines de CI/CD

### 🔄 CI Pipeline (`.github/workflows/ci.yml`)

Disparado a cada `push` ou `pull_request` nos branches `main` e `master`.

1. **Instalação de Dependências**: Executa `npm ci`
2. **Verificação de Formatação**: Executa `npm run format:check`
3. **Verificação de Linting**: Executa `npm run lint`
4. **Build do Projeto**: Executa `npm run build`

### 🚀 CD Pipeline (`.github/workflows/relese.yml`)

Disparado no `push` para branches de produção.

1. **Pull de Ambientes**: Conecta com a Vercel usando `VERCEL_TOKEN`
2. **Build de Produção**: `vercel build --prod`
3. **Deploy Automático**: `vercel deploy --prebuilt --prod`

#### 🔑 Secrets Necessárias no GitHub:

- `VERCEL_TOKEN`
- `VERCEL_PROJECT_ID`
- `VERCEL_ORG_ID`

---

## 💻 Como Executar Localmente

### Pré-requisitos

- **Node.js** v20 ou superior
- **npm** v10 ou superior

### Passos:

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/estudando-ci-cd.git
   cd estudando-ci-cd
   ```

2. **Instalar as dependências:**

   ```bash
   npm install
   ```

3. **Iniciar o ambiente de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acessar a aplicação:**
   Navegue até [http://localhost:3000](http://localhost:3000) no seu navegador.
