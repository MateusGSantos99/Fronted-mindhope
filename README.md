# 🌿 MindHope - Plataforma de Agendamento para Atendimento Psicológico Voluntário

MindHope é uma plataforma web inovadora que conecta psicólogos voluntários a pessoas que buscam apoio emocional, simplificando o agendamento e a gestão de consultas psicológicas. Desenvolvida com React 19 e Vite, nossa missão é democratizar o acesso ao cuidado emocional por meio da tecnologia.

![Mind Hope logo](public/logo.png)
---

## 📋 Índice

- [Sobre o MindHope](#sobre-o-mindhope)  
- [Funcionalidades Principais](#funcionalidades-principais)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Como Rodar o Projeto](#como-rodar-o-projeto)  
- [Contas de Teste](#contas-de-teste)  
- [Organização do Código](#organização-do-código)  
- [API Simulada](#api-simulada)  
- [Chat com Inteligência Artificial](#chat-com-inteligência-artificial)  
- [Design e Componentes](#design-e-componentes)  
- [Rotas da Aplicação](#rotas-da-aplicação) 
- [Equipe](#equipe)  

---

## 🌱 Sobre o MindHope

O MindHope nasceu para facilitar o acesso ao atendimento psicológico voluntário, promovendo uma rede de cuidado baseada em empatia, inovação e tecnologia. Nosso objetivo é aproximar psicólogos e pacientes, criando uma plataforma intuitiva, segura e acessível para todos.

---

## ✨ Funcionalidades Principais

### Para Psicólogos

- Dashboard com visão geral dos pacientes e agendamentos  
- Gerenciamento completo de sessões e histórico clínico  
- Chat integrado com inteligência artificial para suporte  
- Relatórios e gráficos para acompanhamento dos atendimentos  
- Controle personalizado da agenda e disponibilidade  

### Para Pacientes

- Agendamento simples e rápido de consultas  
- Visualização de psicólogos disponíveis e horários livres  
- Histórico de atendimentos e informações relevantes  
- Interface intuitiva e acessível  

### Segurança e Acessibilidade

- Autenticação segura com controle de acesso por perfil  
- Interface responsiva, compatível com recursos assistivos  
- Proteção rigorosa dos dados dos usuários  

---

## 🛠 Tecnologias Utilizadas

- React 19  
- Vite 7  
- Tailwind CSS 4  
- React Router DOM  
- Framer Motion  
- Lucide React (Ícones)  
- Recharts e Chart.js (Gráficos)  
- React Hot Toast (Notificações)  
- Hugging Face API para chat com IA  

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/mindhope.git
cd mindhope

Instale as dependências:

npm install
# ou
yarn install


Configure as variáveis de ambiente:

cp .env.example .env


Depois, edite o arquivo .env para adicionar seu token Hugging Face.

Inicie o servidor de desenvolvimento:

npm run dev
# ou
yarn dev


Acesse a aplicação no navegador:

http://localhost:5173


💻 Uso e Contas de Teste
Usuários de teste
Psicólogos
Nome	Email	Senha	Especialidade
Dr. João Silva	psicologo@test.com
	123456	Psicologia Clínica
Dra. Ana Costa	ana@test.com
	123456	Terapia Cognitivo-Comportamental
Dr. Carlos Mendes	carlos@test.com
	123456	Psicologia Infantil
Dra. Lucia Ferreira	lucia@test.com
	123456	Terapia Familiar
Paciente
Nome	Email	Senha
Maria Santos	paciente@test.com
	123456
Fluxo básico

Faça login com uma das contas de teste.
Acesse o dashboard correspondente ao seu perfil.
Pacientes podem agendar consultas, selecionando psicólogo e horário.
Psicólogos podem gerenciar pacientes, sessões e visualizar relatórios.

## 📁 Organização do Código

FRONTED-MINDHOPE/
├── node_modules/
├── public/
│   ├── logo.png
│   ├── logo.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── DescriptionTextarea.jsx
│   │   ├── Input.jsx
│   │   ├── KpiCard.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── MarkdownRenderer.jsx
│   │   ├── PsychologistSelect.jsx
│   │   ├── PublicNavbar.jsx
│   │   ├── RejectionForm.jsx
│   │   ├── Sidebar.jsx
│   │   └── UrgencySelect.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Agendamento.jsx
│   │   ├── Chat.jsx
│   │   ├── DashBoardPaciente.jsx
│   │   ├── DashBoardPsicologo.jsx
│   │   ├── Historico.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   ├── PacienteDetalhes.jsx
│   │   ├── Pacientes.jsx
│   │   ├── Register.jsx
│   │   ├── Relatorios.jsx
│   │   ├── SessaoDetalhes.jsx
│   │   └── Solicitações.jsx
│   ├── routes/
│   │   └── appRoutes.jsx
│   ├── services/
│   │   ├── aiServices.js
│   │   └── mockApi.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .gitignore
├── debug.log
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

## 🔌 API Simulada - Como Funciona

O sistema não depende de um backend real durante o desenvolvimento. Em vez disso, foi criada uma Mock API que simula um servidor, com autenticação, registros, agendamentos e persistência de dados utilizando localStorage do navegador.

Isso permite testar todas as funcionalidades (login, cadastro, consultas, solicitações, etc.) de forma realista, sem precisar de uma API externa.

Estrutura

Simulação de rede:
Cada requisição tem um pequeno delay(ms) para imitar a latência de um servidor real.

Armazenamento no localStorage:
Os dados são salvos e recuperados do navegador utilizando chaves prefixadas com lunysse_, evitando conflitos com outros sistemas:

mindhope_users → Usuários (psicólogos e pacientes)
mindhope_patients → Dados detalhados dos pacientes
mindhope_appointments → Agendamentos e sessões
mindhope_requests → Solicitações de novos pacientes

Dados iniciais:
Caso não exista nada no localStorage, o sistema cria registros padrão:

Usuários de teste (psicólogos e pacientes)
Pacientes vinculados a psicólogos
Agendamentos passados e futuros
Solicitações pendentes
Funcionalidades principais
Login (login)
Valida email e senha, retornando usuário autenticado e token fake.
A senha nunca é retornada.

Registro (register)
Cria novos usuários (psicólogos ou pacientes).

Para pacientes, também gera um registro completo na tabela de pacientes com idade calculada automaticamente.

Agendamentos (getAppointments, createAppointment, updateAppointment, cancelAppointment)
Permite listar, criar, atualizar e cancelar consultas.
Novos agendamentos têm status inicial agendado.

Consulta por email (getAppointmentsByEmail)
Busca agendamentos de pacientes a partir do email registrado.

Psicólogos (getPsychologists)
Retorna lista de psicólogos disponíveis com informações públicas.

Horários disponíveis (getAvailableSlots)
Verifica conflitos com agendamentos já existentes e retorna apenas horários livres.

👉 Em resumo: o mockApi funciona como um backend completo simulado, com dados persistentes e realistas. Isso torna o desenvolvimento mais rápido e permite rodar o sistema mesmo sem conexão com servidores reais.

## 🤖 Chat com Inteligência Artificial

O MindHope conta com um chat integrado de IA para auxiliar psicólogos com sugestões baseadas em evidências científicas.

- **Modelo**: zai-org/GLM-4.5 (via Hugging Face)
- **Especialização**: Psicologia clínica
- **Parâmetros**: `max_tokens: 1500`, `temperature: 0.7`

### Funcionalidades
- Respostas em Markdown para melhor legibilidade
- Histórico de até 10 mensagens por conversa
- Sugestões rápidas de perguntas
- Tratamento de erros (token inválido, timeouts, conexão)

### Exemplos de uso
- “Quais técnicas aplicar em casos de ansiedade?”
- “Como abordar pacientes em terapia infantil?”
- “Quais sinais de alerta observar em depressão?”


## 🎨 Design e Componentes

O projeto segue um design moderno e responsivo, baseado em TailwindCSS com uma paleta personalizada definida em index.css.

Paleta de Cores

Dark (#172738) → fundo escuro, textos de contraste
Medium (#005FA3) → azul médio, usado em áreas principais (sidebar, headers)
Light (#2EC4F3) → azul claro, usado para realces e bordas de foco
Accent (#1A73E8) → azul de destaque, usado em links e hover de botões
Button (#1E293B) → fundo dos botões principais
Background (#F5F9FF) → fundo claro para seções e cartões

Estilo Global
Fonte: Roboto (com fallback Inter/Nunito)
Background padrão: gradiente linear do azul claro → azul médio → azul escuro
Texto padrão: branco, para contraste com o fundo
Componentes estilizados
Botões primários (.btn-primary): fundo escuro → muda para azul de destaque no hover, com efeito de zoom.
Inputs (.input-field): fundo branco, borda suave, foco com brilho azul claro.
Sidebar / Navbar: seguem a paleta (bg-dark, bg-medium) com textos em text-light e text-accent nos destaques.

## 🛣️ Rotas da Aplicação

A navegação do MindHope é gerenciada com React Router DOM, dividida em rotas públicas e rotas protegidas.

🔓 Rotas Públicas

Disponíveis para todos os usuários, mesmo sem login:

/ → Home
/about → Sobre a Plataforma
/login → Tela de Login
/register → Cadastro de novo usuário

⚡ Caso o usuário já esteja logado, ao tentar acessar uma rota pública, ele é redirecionado automaticamente para /dashboard.

🔒 Rotas Protegidas

Disponíveis apenas para usuários autenticados.
Essas rotas só podem ser acessadas após o login. Caso contrário, o usuário é redirecionado para /login.

/dashboard → Painel principal
Psicólogos veem o DashboardPsicologo
Pacientes veem o DashboardPaciente
/agendamentos → Lista e gerenciamento de agendamentos
/solicitacoes → Solicitações de novos pacientes (apenas psicólogos)
/pacientes → Lista de pacientes vinculados
/pacientes/:id → Detalhes de um paciente específico
/sessao/:sessionId → Detalhes de uma sessão específica
/chat-ia → Chat com inteligência artificial integrado
/relatorios → Relatórios de atendimentos e gráficos
/historico → Histórico de sessões anteriores

🚫 Página de Erro

* → NotFound (renderiza quando a rota não é encontrada)

👉 Resumindo:

Público: home, login, cadastro, sobre.
Protegido: tudo relacionado a pacientes, psicólogos, agendamentos e relatórios.
Controle de acesso: feito pelo AuthContext com ProtectedRoute e PublicRoute.

👥 Equipe
Desenvolvedor Principal: Mateus Gabriel OlIveira Santos
Design: Mateus Gabriel OlIveira Santos
Consultoria Psicológica: Conteúdo baseado em estudos e situações fictícias (nenhum profissional envolvido)