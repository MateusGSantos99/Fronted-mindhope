🌿 MindHope

MindHope é uma plataforma web que conecta psicólogos voluntários a pessoas que buscam apoio emocional, facilitando agendamento, gerenciamento de sessões e acompanhamento de pacientes.
Desenvolvida com React 19, Vite 7 e Tailwind CSS 4, a plataforma busca democratizar o acesso ao cuidado emocional através da tecnologia.

📌 Índice

Sobre o MindHope

Funcionalidades

Tecnologias

Como Rodar

Contas de Teste

Organização do Código

API Simulada

Chat com IA

Design & UI

Rotas da Aplicação

Equipe

🌱 Sobre o MindHope

MindHope é uma rede de cuidado emocional baseada em empatia e tecnologia, que conecta psicólogos voluntários a pessoas que precisam de apoio.

Objetivos principais:

✅ Facilitar o acesso ao atendimento psicológico voluntário

✅ Criar uma plataforma intuitiva, segura e responsiva

✅ Permitir o acompanhamento completo de pacientes e sessões

✨ Funcionalidades Principais
Para Psicólogos

📊 Dashboard completo: visão de pacientes e agendamentos

🗂 Gerenciamento de sessões e histórico clínico

🤖 Chat integrado com Inteligência Artificial para suporte

📈 Relatórios e gráficos para acompanhamento de atendimentos

📅 Controle de agenda e disponibilidade

Para Pacientes

🗓 Agendamento rápido de consultas

🔍 Visualização de psicólogos disponíveis e horários livres

📝 Histórico de atendimentos

🎨 Interface intuitiva e acessível

Segurança e Acessibilidade

🔒 Autenticação segura com controle por perfil

📱 Interface responsiva e compatível com recursos assistivos

🛡 Proteção rigorosa dos dados do usuário

🛠 Tecnologias Utilizadas

React 19 & Vite 7

Tailwind CSS 4

React Router DOM

Framer Motion

Lucide React (Ícones)

Recharts & Chart.js

React Hot Toast (Notificações)

Hugging Face API (chat com IA)

💡 Extras: Projeto modular, fácil de escalar e estilizado com componentes reutilizáveis.

🚀 Como Rodar o Projeto
# Clone o repositório
git clone https://github.com/seu-usuario/mindhope.git
cd mindhope

# Instale as dependências
npm install
# ou
yarn install

# Configure variáveis de ambiente
cp .env.example .env
# Adicione seu token Hugging Face no .env

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

# Acesse no navegador
http://localhost:5173

💻 Contas de Teste
Psicólogos
Nome	Email	Senha	Especialidade
Dr. João Silva	psicologo@test.com
	123456	Psicologia Clínica
Dra. Ana Costa	ana@test.com
	123456	TCC
Dr. Carlos Mendes	carlos@test.com
	123456	Psicologia Infantil
Dra. Lucia Ferreira	lucia@test.com
	123456	Terapia Familiar
Paciente
Nome	Email	Senha
Maria Santos	paciente@test.com
	123456

Fluxo rápido:

Login com qualquer conta

Acesse o dashboard correspondente

Pacientes agendam consultas

Psicólogos gerenciam pacientes, sessões e relatórios

📁 Organização do Código
src/
├─ assets/          # Imagens e ícones
├─ components/      # Botões, cards, inputs, navbar, sidebar
├─ context/         # AuthContext
├─ pages/           # Páginas do sistema
├─ routes/          # Configuração de rotas
├─ services/        # API simulada e serviços IA
├─ App.jsx          # Componente principal
├─ main.jsx         # Ponto de entrada
...

🔌 API Simulada - Como Funciona

O projeto não depende de backend real durante o desenvolvimento.

✅ Características:

Armazenamento usando localStorage

Login, registro, agendamentos, consultas e solicitações simuladas

Delay artificial para simular latência de rede

Dados iniciais de teste criados automaticamente

Exemplos de dados simulados:

Usuários de teste (psicólogos e pacientes)

Pacientes vinculados a psicólogos

Agendamentos passados e futuros

Solicitações pendentes

🤖 Chat com Inteligência Artificial

Modelo: zai-org/GLM-4.5 (Hugging Face)

Especialização: Psicologia clínica

Histórico de até 10 mensagens

Respostas em Markdown para melhor legibilidade

Exemplos de perguntas:

“Técnicas para ansiedade”

“Abordagem em terapia infantil”

“Sinais de alerta em depressão”

🎨 Design e Componentes

Paleta de cores:

Dark (#172738), Medium (#005FA3), Light (#2EC4F3), Accent (#1A73E8), Button (#1E293B), Background (#F5F9FF)

Fonte: Roboto (fallback Inter/Nunito)

Layout responsivo, moderno e clean

Botões, inputs, sidebar e navbar estilizados com Tailwind

🛣️ Rotas da Aplicação
🔓 Rotas Públicas

/ → Home

/about → Sobre

/login → Login

/register → Cadastro

Usuários logados: redirecionados para /dashboard.

🔒 Rotas Protegidas

/dashboard → Dashboard (Psicólogo ou Paciente)

/agendamentos → Gerenciar consultas

/solicitacoes → Solicitações de pacientes (Psicólogos)

/pacientes → Lista de pacientes

/pacientes/:id → Detalhes de paciente

/sessao/:sessionId → Detalhes de sessão

/chat-ia → Chat com IA

/relatorios → Relatórios e gráficos

/historico → Histórico de sessões

🚫 Página de Erro

* → NotFound

👥 Equipe

Desenvolvedor Principal: Mateus Gabriel Oliveira Santos

Design: Mateus Gabriel Oliveira Santos

Consultoria Psicológica: Conteúdo baseado em estudos e situações fictícias