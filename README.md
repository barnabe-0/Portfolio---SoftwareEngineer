# Portfólio - Nicolas Barnabe

> Projeto de portfólio pessoal criado com React + Vite para apresentar projetos, habilidades e formas de contato.

## Descrição

Este repositório contém um site de portfólio profissional desenvolvido em React com Vite. O objetivo é apresentar projetos, experiências, habilidades e fornecer um formulário de contato integrado com EmailJS. O layout usa Tailwind CSS e o site é organizado em seções (Home, About, Skills, Portfolio, Contact) com rotas dinâmicas para detalhes de cada projeto.

## Demonstração

O projeto roda localmente usando o servidor de desenvolvimento do Vite. Para hospedar, você pode buildar a versão de produção e enviar para Vercel, Netlify ou outro provedor.

## Funcionalidades

- Página inicial com seções: Hero, About, Skills, Portfolio e Contact
- Busca e listagem de projetos (dados em `src/data/data.jsx`)
- Rotas dinâmicas para detalhes do projeto (`/project/:id`)
- Tratamento de rota 404 (NotFound)
- Lazy loading de componentes (melhora o tempo de carregamento inicial)
- Scroll-to-top automático ao navegar entre rotas
- Formulário de contato integrado com EmailJS
- Ícones com `react-icons` e design responsivo com Tailwind CSS

## Estrutura principal

- `index.html` - ponto de entrada
- `src/main.jsx` - bootstrap da aplicação
- `src/App.jsx` - configuração de rotas
- `src/components/` - componentes React (Navbar, Footer, Portfolio, ProjectDetail, etc.)
- `src/data/data.jsx` - dados dos projetos, skills e navegação
- `src/assets/` - imagens

## Tecnologias e bibliotecas usadas

- React 19 (via Vite)
- Vite
- React Router DOM (rotas e navegação)
- Tailwind CSS (estilização)
- react-icons (ícones)
- @emailjs/browser (integração com EmailJS para o formulário de contato)
- Node.js / npm (ferramentas de build e scripts)

> Observação: as versões exatas podem ser conferidas no `package.json` do projeto.

## Rotas principais

- `/` - Página inicial com todas as seções
- `/project/:id` - Detalhes do projeto (rota dinâmica, use o `id` presente em `src/data/data.jsx`)
- `/*` - Página 404 (NotFound)

## Como rodar (Windows PowerShell)

Abra o PowerShell no diretório do projeto e rode:

```powershell
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento (Vite)
npm run dev

# Build para produção
npm run build

# Rodar build localmente (serve recomendado)
# Instale uma ferramenta para servir arquivos estáticos, ex: npm i -g serve
serve -s dist
```

Se você estiver usando outro shell (bash, zsh), os mesmos comandos npm funcionam.

## Como adicionar/editar projetos

Os projetos estão listados em `src/data/data.jsx` (array `portfolioItems`). Para adicionar um novo projeto, inclua um objeto com os campos:

- `id` (número único)
- `title`
- `category`
- `image` (caminho relativo em `src/assets` ou URL externa)
- `description`
- `technologies` (array de strings)
- `github` (URL)
- `live` (URL)

Após salvar, o novo projeto aparecerá na listagem e terá uma rota de detalhe acessível em `/project/:id`.

## Configurar o formulário de contato (EmailJS)

1. Crie uma conta em https://www.emailjs.com/
2. Crie um `Service` e um `Template` seguindo a documentação do EmailJS
3. Obtenha seu `serviceID`, `templateID` e `publicKey` (ou user ID)
4. Substitua os placeholders no componente de `Contact` pelo seus IDs ou configure variáveis de ambiente e faça o componente ler de `process.env`.

Exemplo simples (conceitual) dentro do `Contact.jsx`:

```js
emailjs.sendForm(serviceID, templateID, form.current, publicKey)
```

> Não comite chaves secretas no repositório público. Use um `.env` local e ferramentas de CI/CD para configurar variáveis seguras.

## Dependências (exemplos importantes)

- react
- react-dom
- react-router-dom
- tailwindcss
- react-icons
- @emailjs/browser
- vite

NICOLAS BARNABE DA CRUZ RM:561997

LINK VERCEL: https://portfolio-software-engineer-1vxw.vercel.app/


