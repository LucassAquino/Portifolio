
# Portfólio - Lucas dos Reis Aquino

Projeto que mostra quais foram meus principais projetos durante a minha carreira como desenvolvedor.

## Descrição

Este repositório contém um site de portfólio single-page que mostra projetos, uma página inicial com uma breve apresentação, e uma página de contato. A seção de projetos permite buscar por título e navegar para uma página de detalhes de cada projeto.

Para acessar o projeto deployado no Vercel, acesse

`https://portifolio-liart-psi.vercel.app/`

Principais funcionalidades:
- Página inicial com breve apresentação e lista de projetos
- Busca por projetos (campo de pesquisa)
- Página de detalhes do projeto com tecnologias e descrição
- Navegação entre páginas usando React Router

## Tecnologias e bibliotecas

O projeto utiliza as seguintes tecnologias:

- React 19
- Vite (ferramenta de build e dev server)
- React Router Dom (roteamento)
- Lucide React (ícones)
- React Icons (ícones)
- ESLint (linting)

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd portfolio
```

2. Instale dependências:

```powershell
npm install
```

## Como executar

Inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

Abra no navegador:

http://localhost:5173

Para gerar build de produção:

```powershell
npm run build
```

## Estrutura do projeto (resumo)

- `src/` - código-fonte React
	- `components/` - componentes reutilizáveis (Header, Footer, ProjectCard, etc.)
	- `pages/` - páginas (Home, Projects, ProjectInfo, Contact)
	- `routes/` - definição de rotas
	- `data/` - dados estáticos (lista de projetos)
- `public/` - ativos estáticos
- `vite.config.js` - configuração do Vite
- `package.json` - dependências e scripts
