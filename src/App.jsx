import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Bot,
  ChevronRight,
  Code2,
  Eye,
  FlaskConical,
  Flame,
  Globe2,
  GraduationCap,
  House,
  Landmark,
  LibraryBig,
  LogOut,
  MessageCircleMore,
  MessageSquareText,
  MoonStar,
  NotebookPen,
  PenSquare,
  Plus,
  Reply,
  Search,
  SendHorizontal,
  Sparkles,
  Star,
  SunMedium,
  Trophy,
  UserPlus,
  UserRound,
  Users,
  Video,
} from 'lucide-react';
import {
  HashRouter,
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

const dashboardMetrics = [
  { label: 'Discussões', value: '127', icon: MessageSquareText, tone: 'violet' },
  { label: 'Grupos', value: '42', icon: Users, tone: 'orange' },
  { label: 'Materiais', value: '823', icon: LibraryBig, tone: 'gold' },
  { label: 'Pontos', value: '300', icon: Trophy, tone: 'crimson' },
];

const profileMetrics = [
  { label: 'Materiais', value: '23', icon: LibraryBig, tone: 'gold' },
  { label: 'Tópicos', value: '15', icon: PenSquare, tone: 'violet' },
  { label: 'Grupos', value: '3', icon: Users, tone: 'teal' },
  { label: 'Pontos', value: '240', icon: Trophy, tone: 'crimson' },
];

const recentActivity = [
  { title: 'Partilhou resumo das estruturas', time: '2h', tone: 'orange' },
  { title: 'Comentou dúvidas sobre IA', time: '5h', tone: 'gold' },
  { title: 'Juntou-se a Python Data Science', time: '1d', tone: 'violet' },
  { title: 'Criou técnicas de estudo', time: '2d', tone: 'slate' },
];

const popularTopics = [
  { title: 'IA machine learning', comments: 231, tone: 'coral' },
  { title: 'Cálculo II - resumo', comments: 128, tone: 'pink' },
  { title: 'Projeto IoT na saúde', comments: 95, tone: 'amber' },
];

const badges = [
  { title: 'Primeiro post', description: 'Criou tópico', icon: NotebookPen, tone: 'gold' },
  { title: 'Partilha ativa', description: '10 materiais', icon: BadgeCheck, tone: 'violet' },
  { title: 'Colaborador', description: '5 grupos', icon: Users, tone: 'teal' },
  { title: 'Estrela', description: '50 likes', icon: Star, tone: 'crimson' },
  { title: 'Expert', description: 'Nível 5', icon: Trophy, tone: 'orange' },
  { title: 'Mentor', description: '20 ajudas', icon: GraduationCap, tone: 'gold' },
];

const subjects = [
  { label: 'Geografia', icon: Globe2 },
  { label: 'Programação', icon: Code2 },
  { label: 'Química', icon: FlaskConical },
  { label: 'História', icon: Landmark },
];

const expertise = [
  { label: 'Geografia', icon: Globe2 },
  { label: 'História', icon: Landmark },
];

const forumCategories = ['Todos', 'Informática', 'Matemática', 'Gestão', 'Design'];

const forumTopics = [
  {
    id: 'machine-learning',
    title: 'Machine Learning em Python',
    author: 'Conquista',
    category: 'Informática',
    age: '5 dias',
    excerpt:
      'Estou a começar a estudar Machine Learning em Python e queria perceber melhor como organizar o fluxo completo de um projeto.',
    likes: 28,
    replies: 15,
    views: 445,
    tone: 'orange',
    detail: {
      intro:
        'Estou a começar a estudar Machine Learning em Python e queria tirar algumas dúvidas a quem já tem mais experiência na área.',
      body: [
        'Já tenho uma base sólida de Python e comecei a explorar bibliotecas como scikit-learn e TensorFlow, mas ainda me sinto pouco seguro relativamente ao fluxo completo de um projeto.',
        'Por exemplo, tenho dúvidas sobre como estruturar a preparação dos dados, como escolher um modelo adequado e como avaliar os resultados de forma consistente.',
        'Também me interrogo sobre quando faz sentido usar regressão, árvores de decisão ou redes neuronais. Existe um caminho mais seguro para começar?',
      ],
      replies: [
        {
          author: 'Luís Mangalhos',
          role: 'Aluno de Ciência de Dados',
          age: '5 minutos',
          text: [
            'O melhor caminho é começar pelo básico bem estruturado: compreender o problema, preparar os dados, separar treino e teste, treinar um modelo simples e só depois comparar alternativas mais complexas.',
            'Na prática, vale a pena começar por modelos interpretáveis. Isso ajuda a perceber o que os dados estão a mostrar antes de passar para arquiteturas mais pesadas.',
          ],
        },
        {
          author: 'Conquista',
          role: 'Autor do tópico',
          age: '1 minuto',
          text: [
            'Faz sentido. Eu estava a tentar avançar demasiado depressa e faltava-me esse encadeamento mais metódico.',
            'Vou organizar primeiro um pipeline simples em scikit-learn e depois, com mais segurança, avanço para soluções mais exigentes.',
          ],
        },
      ],
    },
  },
  {
    id: 'derivadas-parciais',
    title: 'Derivadas parciais - Cálculo II',
    author: 'Mariana Oliveira',
    category: 'Matemática',
    age: '4h',
    excerpt: 'Explicação com exemplos práticos sobre derivadas parciais para a próxima avaliação.',
    likes: 34,
    replies: 12,
    views: 567,
    tone: 'gold',
  },
  {
    id: 'gestao-ia',
    title: 'Aplicação de gestão com IA',
    author: 'Pedro Costa',
    category: 'Gestão',
    age: '1d',
    excerpt: 'Procuro colaboradores de diferentes cursos para um projeto interdisciplinar com IA.',
    likes: 19,
    replies: 10,
    views: 389,
    tone: 'crimson',
  },
  {
    id: 'recursos-design',
    title: 'Recursos UX/UI Design',
    author: 'Ana Ferreira',
    category: 'Design',
    age: '2d',
    excerpt: 'Seleção de cursos e referências gratuitas para reforçar fundamentos visuais e prototipagem.',
    likes: 22,
    replies: 9,
    views: 445,
    tone: 'violet',
  },
];

const resources = [
  { id: 'resumo-estruturas', type: 'Docs', title: 'Resumo - Estrutura de Dados', views: 532, author: 'Rafael Dias', age: '2 dias', rating: 4 },
  { id: 'formularios-derivadas', type: 'Docs', title: 'Formulários - Derivadas', views: 727, author: 'Breno Alves', age: '6 dias', rating: 3 },
  { id: 'tutorial-arvores', type: 'Vídeos', title: 'Tutorial: Árvores Binárias', views: 176, author: 'Carlos Mendes', age: '1 dia', rating: 2 },
  { id: 'visual-basic', type: 'Vídeos', title: 'Visual Basic', views: 10000000, author: 'Luís Mangalhos', age: '50 meses', rating: 5 },
];

const groups = [
  {
    id: 'algoritmos',
    title: 'Algoritmos e Estruturas',
    subject: 'Programação',
    status: 'Já é membro',
    description:
      'Grupo focado em resolver exercícios, discutir estruturas de dados e partilhar materiais úteis para a unidade curricular.',
    course: 'Eng. Informática',
    members: '24/30 membros',
    schedule: 'Amanhã às 15:00',
    location: 'Sala B204',
    owner: 'Ricardo Santos',
    tag: 'Algoritmos - Programação',
    progress: 0.62,
    tone: 'crimson',
  },
  {
    id: 'calculo',
    title: 'Cálculo II - Exames',
    subject: 'Matemática',
    status: 'Já é membro',
    description:
      'Espaço colaborativo para revisar exercícios, consolidar fórmulas e preparar o exame final em conjunto.',
    course: 'Matemática',
    members: '18/25 membros',
    schedule: 'Sexta às 14:00',
    location: 'Biblioteca',
    owner: 'Mariana Oliveira',
    tag: 'Matemática - Exames',
    progress: 0.48,
    tone: 'amber',
  },
  {
    id: 'ia-saude',
    title: 'IA - Na Saúde',
    subject: 'Interdisciplinar',
    status: 'Juntar-se ao grupo',
    description:
      'Projeto interdisciplinar para discutir modelos de IA aplicados à saúde e organizar tarefas por sprint.',
    course: 'Interdisciplinar',
    members: '12/15 membros',
    schedule: 'Segunda às 16:30',
    location: 'Online - Teams',
    owner: 'Pedro Costa',
    tag: 'IA - Saúde',
    progress: 0.51,
    tone: 'violet',
  },
];

const groupConversations = {
  algoritmos: {
    title: 'Programação',
    members: [
      { name: 'Ricardo Santos', role: 'Moderador' },
      { name: 'Marta Costa', role: 'Backend' },
      { name: 'Sofia Alves', role: 'Frontend' },
      { name: 'Bruno Lima', role: 'Dados' },
      { name: 'Luís M.', role: 'QA' },
    ],
    messages: [
      { author: 'Ricardo Santos', role: 'Moderador', text: 'Hoje podemos rever a estrutura dos módulos antes de avançar para os exercícios.' },
      { author: 'Marta Costa', role: 'Backend', text: 'Concordo. Se separarmos autenticação, dados e UI desde já, o projeto fica muito mais fácil de manter.' },
      { author: 'Sofia Alves', role: 'Frontend', text: 'Do lado da interface, já posso preparar os componentes reutilizáveis para as páginas principais.' },
      { author: 'Bruno Lima', role: 'Dados', text: 'Também deixo uma checklist para validar as entradas e evitar erros silenciosos mais tarde.' },
      { author: 'Luís M.', role: 'QA', text: 'Se alinharmos o fluxo hoje, amanhã já conseguimos testar o primeiro protótipo com menos atrito.', align: 'right' },
      { author: 'Ricardo Santos', role: 'Moderador', text: 'Perfeito. Fechamos a arquitetura, definimos as tarefas e depois cada um avança na sua frente.' },
    ],
  },
};

const managementGroups = {
  owned: [
    { name: 'Físico-Química', posts: '45 posts' },
    { name: 'Programação', posts: '50 posts' },
    { name: 'História', posts: '32 posts' },
    { name: 'Geografia', posts: '+99 posts' },
    { name: 'Matemática', posts: '+99 posts' },
  ],
  joined: [{ name: 'Espanhol', posts: '+99 posts' }],
};

const navItems = [
  { to: '/dashboard', label: 'Início', icon: House },
  { to: '/forum', label: 'Fórum', icon: MessageSquareText },
  { to: '/resources', label: 'Materiais', icon: BookOpenText },
  { to: '/groups', label: 'Grupos', icon: Users },
  { to: '/profile', label: 'Perfil', icon: UserRound },
];

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return window.localStorage.getItem('connecttroca-theme') ?? 'light';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    window.localStorage.setItem('connecttroca-theme', nextTheme);
    document.body.dataset.theme = nextTheme;
  };

  if (typeof document !== 'undefined') {
    document.body.dataset.theme = theme;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/dashboard" element={<DashboardPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/chatbot" element={<ChatbotPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/forum" element={<ForumPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/forum/topic/:topicId" element={<ForumTopicPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/resources" element={<ResourcesPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/groups" element={<GroupsPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/groups/manage" element={<ManageGroupsPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/groups/:groupId/chat" element={<GroupChatPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/groups/:groupId/members" element={<GroupMembersPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/profile" element={<ProfilePage theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </HashRouter>
  );
}

function AppShell({ theme, toggleTheme, children, showNav = true, showBrand = true, contentClassName = '' }) {
  const location = useLocation();

  return (
    <div className={`app-root theme-${theme}`}>
      <div className={`phone-shell ${showNav ? '' : 'phone-shell--auth'}`}>
        {showBrand ? (
          <header className="shell-header">
            <Link to="/dashboard" className="brand">
              <span className="brand-mark">CT</span>
              <span className="brand-copy">
                <strong>
                  ConnectTroca <Sparkles size={16} strokeWidth={2.3} />
                </strong>
                <span>Partilhe conhecimento</span>
              </span>
            </Link>

            <div className="shell-actions">
              {showNav && location.pathname !== '/chatbot' ? (
                <Link to="/chatbot" className="utility-pill">
                  <Bot size={16} />
                  <span>Chat Bot</span>
                </Link>
              ) : null}

              <button type="button" className="theme-button" onClick={toggleTheme} aria-label="Alternar tema">
                {theme === 'light' ? <MoonStar size={20} /> : <SunMedium size={20} />}
              </button>
            </div>
          </header>
        ) : null}

        <main className={`shell-content ${contentClassName}`}>{children}</main>

        {showNav ? <BottomNav pathname={location.pathname} /> : null}

        {showNav && location.pathname !== '/chatbot' ? (
          <Link className="floating-ai" to="/chatbot" aria-label="Abrir chat bot">
            <Bot size={24} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function BottomNav({ pathname }) {
  return (
    <nav className="bottom-nav" aria-label="Navegação principal">
      {navItems.map(({ to, label, icon: Icon }) => {
        const active = pathname.startsWith(to);

        return (
          <NavLink key={to} to={to} className={`nav-item ${active ? 'nav-item--active' : ''}`}>
            <Icon size={24} />
            <span>{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

function LoginPage({ theme, toggleTheme }) {
  return (
    <AppShell theme={theme} toggleTheme={toggleTheme} showNav={false}>
      <section className="auth-screen">
        <div className="auth-copy">
          <p className="eyebrow">ConnectTroca</p>
          <h1>Acesse a plataforma</h1>
          <p>Faça login ou registre-se para começar a construir os seus projetos ainda hoje.</p>
        </div>

        <form className="auth-form">
          <label className="field">
            <span>E-mail</span>
            <input type="email" placeholder="Digite seu e-mail" />
          </label>

          <label className="field">
            <span className="field-row">
              <strong>Senha</strong>
              <button type="button" className="text-button">Esqueceu a senha?</button>
            </span>
            <input type="password" placeholder="Digite sua senha" />
          </label>

          <Link to="/dashboard" className="primary-button">Entrar</Link>
        </form>

        <p className="auth-footer">Ainda não tem uma conta? <button type="button">Inscreva-se</button></p>
      </section>
    </AppShell>
  );
}

function DashboardPage({ theme, toggleTheme }) {
  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <section className="intro-card">
        <div>
          <p className="eyebrow">Olá, Maria</p>
          <h1>Aqui estão as novidades para si</h1>
          <p className="lead">Acompanhe o movimento da comunidade, os recursos mais relevantes e os grupos com maior atividade do momento.</p>
        </div>

        <Link className="inline-link" to="/profile">Ver perfil <ChevronRight size={18} /></Link>
      </section>

      <section className="metric-grid">
        {dashboardMetrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </section>

      <section className="panel-card">
        <div className="panel-title">
          <div>
            <p className="eyebrow">Progressão</p>
            <h2>Nível 5</h2>
          </div>
          <strong>300 / 400</strong>
        </div>
        <ProgressBar value={0.75} />
      </section>

      <SectionHeading title="Atividade recente" icon={Sparkles} />
      <div className="stack">
        {recentActivity.map((item) => <ActivityCard key={`${item.title}-${item.time}`} item={item} />)}
      </div>

      <SectionHeading title="Popular" icon={Flame} action={<Link to="/forum">Abrir fórum</Link>} />
      <div className="stack">
        {popularTopics.map((topic) => <HighlightCard key={topic.title} topic={topic} />)}
      </div>

      <SectionHeading title="Ações rápidas" icon={ArrowRight} />
      <div className="shortcut-grid">
        <ShortcutCard to="/forum" icon={MessageSquareText} title="Discussões" description="Responder a tópicos e acompanhar novas perguntas." />
        <ShortcutCard to="/resources" icon={BookOpenText} title="Materiais" description="Consultar documentos, vídeos e resumos partilhados." />
        <ShortcutCard to="/groups" icon={Users} title="Grupos" description="Explorar equipas de estudo e projetos colaborativos." />
        <ShortcutCard to="/chatbot" icon={Bot} title="Chat Bot" description="Usar assistência rápida para dúvidas académicas." />
      </div>
    </AppShell>
  );
}

function ChatbotPage({ theme, toggleTheme }) {
  const prompts = ['Resumir um tópico complexo', 'Gerar perguntas para revisão', 'Organizar um plano de estudo'];

  return (
    <AppShell theme={theme} toggleTheme={toggleTheme} contentClassName="chatbot-content">
      <section className="chatbot-screen">
        <div className="chatbot-hero">
          <span className="hero-mark"><Bot size={56} /></span>
          <p className="eyebrow">Assistente</p>
          <h1>Welcome to Chat Bot!</h1>
          <p>Use este espaço para procurar ajuda rápida, gerar resumos e obter sugestões para os seus estudos.</p>
        </div>

        <div className="prompt-pills">
          {prompts.map((prompt) => <button key={prompt} type="button" className="pill-button">{prompt}</button>)}
        </div>

        <div className="chatbot-input">
          <button type="button" className="icon-button" aria-label="Adicionar"><Plus size={22} /></button>
          <input type="text" placeholder="Pergunte qualquer coisa" />
          <button type="button" className="icon-button icon-button--accent" aria-label="Enviar"><SendHorizontal size={18} /></button>
        </div>
      </section>
    </AppShell>
  );
}

function ForumPage({ theme, toggleTheme }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filteredTopics = forumTopics.filter((topic) => activeCategory === 'Todos' || topic.category === activeCategory);

  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <SearchBar placeholder="Pesquisar discussões" />
      <SectionHeading title="Participe nas discussões" icon={MessageCircleMore} />

      <div className="pill-row">
        {forumCategories.map((category) => (
          <button key={category} type="button" className={`pill-button ${activeCategory === category ? 'pill-button--active' : ''}`} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className="stack">
        {filteredTopics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}
      </div>
    </AppShell>
  );
}

function ForumTopicPage({ theme, toggleTheme }) {
  const { topicId } = useParams();
  const topic = forumTopics.find((entry) => entry.id === topicId) ?? forumTopics[0];

  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <Link className="back-link" to="/forum">
        <ChevronRight size={18} className="back-link__icon" />
        Voltar ao fórum
      </Link>

      <section className="detail-card">
        <div className="detail-header">
          <div className={`avatar-badge avatar-badge--${topic.tone}`}>{topic.author.slice(0, 2).toUpperCase()}</div>
          <div>
            <p className="eyebrow">{topic.category}</p>
            <h1>{topic.title}</h1>
            <p className="lead">{topic.author} · {topic.age}</p>
          </div>
        </div>

        <div className="detail-body">
          <p>{topic.detail?.intro}</p>
          {topic.detail?.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <div className="topic-meta">
          <span><MessageCircleMore size={16} />{topic.likes}</span>
          <span><Reply size={16} />{topic.replies}</span>
          <span><Eye size={16} />{topic.views}</span>
        </div>
      </section>

      <SectionHeading title="Respostas" icon={Reply} />
      <div className="stack">
        {topic.detail?.replies?.map((reply) => (
          <article key={`${reply.author}-${reply.age}`} className="reply-card">
            <div className="reply-header">
              <div className="avatar-mini">{reply.author.slice(0, 1)}</div>
              <div>
                <strong>{reply.author}</strong>
                <p>{reply.role} · {reply.age}</p>
              </div>
            </div>

            <div className="reply-body">
              {reply.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}

function ResourcesPage({ theme, toggleTheme }) {
  const [activeType, setActiveType] = useState('Todos');
  const types = ['Todos', 'Docs', 'Vídeos'];
  const filteredResources = resources.filter((resource) => activeType === 'Todos' || resource.type === activeType);

  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <SearchBar placeholder="Pesquisar materiais" />

      <div className="pill-row">
        {types.map((type) => (
          <button key={type} type="button" className={`pill-button ${activeType === type ? 'pill-button--active' : ''}`} onClick={() => setActiveType(type)}>
            {type === 'Docs' ? <LibraryBig size={15} /> : null}
            {type === 'Vídeos' ? <Video size={15} /> : null}
            {type}
          </button>
        ))}
      </div>

      <div className="stack">
        {filteredResources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
      </div>
    </AppShell>
  );
}

function GroupsPage({ theme, toggleTheme }) {
  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <SearchBar placeholder="Pesquisar grupos" />
      <SectionHeading title="Colabore e aprenda junto" icon={Users} action={<Link to="/groups/manage">Gerenciar grupos</Link>} />

      <section className="manage-banner">
        <div>
          <p className="eyebrow">Os seus grupos</p>
          <h2>Gerenciar grupos</h2>
        </div>
        <div className="manage-dots"><span /><span /><span /></div>
      </section>

      <div className="stack">
        {groups.map((group) => <GroupCard key={group.id} group={group} />)}
      </div>
    </AppShell>
  );
}

function GroupChatPage({ theme, toggleTheme }) {
  const { groupId } = useParams();
  const group = groups.find((entry) => entry.id === groupId) ?? groups[0];
  const conversation = groupConversations[group.id] ?? groupConversations.algoritmos;

  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <section className="group-header">
        <div className="group-icon"><Code2 size={28} /></div>
        <div>
          <p className="eyebrow">{group.subject}</p>
          <h1>{conversation.title}</h1>
        </div>
        <Link className="members-link" to={`/groups/${group.id}/members`}>
          <Users size={18} />
          Participantes
        </Link>
      </section>

      <section className="message-panel">
        {conversation.messages.map((message, index) => (
          <article key={`${message.author}-${index}`} className={`message-card ${message.align === 'right' ? 'message-card--right' : ''}`}>
            <div className="message-badge">{message.author.slice(0, 1)}</div>
            <div className="message-copy">
              <strong>{message.author}</strong>
              <span>{message.role}</span>
              <p>{message.text}</p>
            </div>
          </article>
        ))}
      </section>
    </AppShell>
  );
}

function GroupMembersPage({ theme, toggleTheme }) {
  const { groupId } = useParams();
  const group = groups.find((entry) => entry.id === groupId) ?? groups[0];
  const conversation = groupConversations[group.id] ?? groupConversations.algoritmos;

  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <section className="group-header">
        <div className="group-icon"><Code2 size={28} /></div>
        <div>
          <p className="eyebrow">{group.subject}</p>
          <h1>Participantes</h1>
        </div>
      </section>

      <section className="member-panel">
        {conversation.members.map((member) => (
          <div key={member.name} className="member-row">
            <div className="member-avatar">{member.name.slice(0, 1)}</div>
            <div>
              <strong>{member.name}</strong>
              <p>{member.role}</p>
            </div>
          </div>
        ))}

        <button type="button" className="member-cta">
          <UserPlus size={22} />
          <span>Adicionar membros</span>
          <Plus size={22} />
        </button>
      </section>

      <button type="button" className="danger-button"><LogOut size={18} />Sair do grupo</button>
    </AppShell>
  );
}

function ManageGroupsPage({ theme, toggleTheme }) {
  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <section className="intro-card">
        <div>
          <p className="eyebrow">Gerenciamento de grupos</p>
          <h1>Crie e organize grupos</h1>
          <p className="lead">Faça a gestão das comunidades criadas por si e dos grupos em que já participa.</p>
        </div>

        <button type="button" className="primary-button primary-button--small">Novo grupo</button>
      </section>

      <section className="management-section">
        <SectionHeading title="Seus grupos" icon={Users} />
        <p className="section-note">5 grupos no total</p>
        <div className="stack">
          {managementGroups.owned.map((group) => (
            <article key={group.name} className="management-card">
              <div>
                <strong>{group.name}</strong>
                <p>{group.posts}</p>
              </div>
              <button type="button" className="ghost-button">Gerir</button>
            </article>
          ))}
        </div>
      </section>

      <section className="management-section">
        <SectionHeading title="Grupos em que é membro" icon={BadgeCheck} />
        <p className="section-note">1 grupo no total</p>
        <div className="stack">
          {managementGroups.joined.map((group) => (
            <article key={group.name} className="management-card">
              <div>
                <strong>{group.name}</strong>
                <p>{group.posts}</p>
              </div>
              <button type="button" className="ghost-button">Ver</button>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function ProfilePage({ theme, toggleTheme }) {
  return (
    <AppShell theme={theme} toggleTheme={toggleTheme}>
      <section className="profile-hero">
        <div className="profile-avatar">MS</div>
        <div className="profile-copy">
          <h1>Maria Silva</h1>
          <p>Eng. Informática · 2º Ano</p>
          <span className="level-pill"><Flame size={16} />Nível 5</span>
        </div>
      </section>

      <section className="panel-card">
        <div className="panel-title">
          <div>
            <p className="eyebrow">Progressão pessoal</p>
            <h2>240 / 400 pontos</h2>
          </div>
          <strong>160 restantes</strong>
        </div>
        <ProgressBar value={0.6} />
      </section>

      <section className="metric-grid">
        {profileMetrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </section>

      <SectionHeading title="Atividade recente" icon={Sparkles} />
      <div className="stack">
        {recentActivity.map((item) => <ActivityCard key={`${item.title}-${item.time}`} item={item} />)}
      </div>

      <SectionHeading title="Insígnias" icon={Trophy} />
      <div className="badge-grid">
        {badges.map((badge) => <BadgeCard key={badge.title} badge={badge} />)}
      </div>

      <div className="stack">
        <button type="button" className="primary-button primary-button--full">Editar preferências</button>
      </div>

      <SectionHeading title="Interesses" icon={BookOpenText} />
      <div className="shortcut-grid">
        {subjects.map((subject) => <SubjectCard key={subject.label} subject={subject} />)}
      </div>

      <SectionHeading title="Especialidades" icon={BadgeCheck} />
      <div className="shortcut-grid">
        {expertise.map((subject) => <SubjectCard key={subject.label} subject={subject} />)}
      </div>

      <Link to="/login" className="ghost-link">Terminar sessão</Link>
    </AppShell>
  );
}

function SectionHeading({ icon: Icon, title, action = null }) {
  return (
    <div className="section-heading">
      <div className="section-heading__copy">
        <span className="section-heading__icon"><Icon size={18} /></span>
        <h2>{title}</h2>
      </div>
      {action ? <div className="section-heading__action">{action}</div> : null}
    </div>
  );
}

function MetricCard({ label, value, icon: Icon, tone }) {
  return (
    <article className={`metric-card metric-card--${tone}`}>
      <span className="metric-card__icon"><Icon size={20} /></span>
      <strong>{value}</strong>
      <p>{label}</p>
    </article>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="progress-track" aria-hidden="true">
      <span className="progress-fill" style={{ width: `${value * 100}%` }} />
    </div>
  );
}

function ActivityCard({ item }) {
  return (
    <article className={`activity-card activity-card--${item.tone}`}>
      <div>
        <strong>{item.title}</strong>
        <p>{item.time}</p>
      </div>
      <ChevronRight size={18} />
    </article>
  );
}

function HighlightCard({ topic }) {
  return (
    <article className={`highlight-card highlight-card--${topic.tone}`}>
      <div>
        <strong>{topic.title}</strong>
        <p>{topic.comments} comentários</p>
      </div>
      <Flame size={18} />
    </article>
  );
}

function ShortcutCard({ to, icon: Icon, title, description }) {
  return (
    <Link to={to} className="shortcut-card">
      <span className="shortcut-card__icon"><Icon size={22} /></span>
      <strong>{title}</strong>
      <p>{description}</p>
    </Link>
  );
}

function TopicCard({ topic }) {
  return (
    <article className={`topic-card topic-card--${topic.tone}`}>
      <div className="topic-card__header">
        <div className={`avatar-badge avatar-badge--${topic.tone}`}>{topic.author.slice(0, 2).toUpperCase()}</div>
        <div className="topic-card__copy">
          <div className="topic-card__heading">
            <h3>{topic.title}</h3>
            <span>{topic.age}</span>
          </div>
          <p>{topic.author} · {topic.category}</p>
        </div>
      </div>

      <p className="topic-card__excerpt">{topic.excerpt}</p>

      <div className="topic-meta">
        <span><MessageCircleMore size={16} />{topic.likes}</span>
        <span><Reply size={16} />{topic.replies}</span>
        <span><Eye size={16} />{topic.views}</span>
      </div>

      <Link className="inline-link" to={`/forum/topic/${topic.id}`}>Abrir tópico <ArrowRight size={18} /></Link>
    </article>
  );
}

function ResourceCard({ resource }) {
  const Icon = resource.type === 'Docs' ? LibraryBig : Video;

  return (
    <article className="resource-card">
      <div className="resource-card__cover"><Icon size={44} /></div>
      <div className="resource-card__body">
        <div className="resource-card__title-row">
          <h3>{resource.title}</h3>
          <span className="view-chip"><Eye size={16} />{resource.views.toLocaleString('pt-PT')}</span>
        </div>

        <p>{resource.author} · {resource.age}</p>

        <div className="rating-row">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={`${resource.id}-${index}`} size={16} className={index < resource.rating ? 'star--active' : ''} />
          ))}
        </div>
      </div>
    </article>
  );
}

function GroupCard({ group }) {
  return (
    <article className={`group-card group-card--${group.tone}`}>
      <div className="group-card__hero">
        <div>
          <p className="eyebrow">{group.subject}</p>
          <h3>{group.title}</h3>
        </div>
        <Link className="status-pill" to={`/groups/${group.id}/chat`}>{group.status}</Link>
      </div>

      <div className="group-card__body">
        <p>{group.description}</p>
        <ul className="group-facts">
          <li>{group.course}</li>
          <li>{group.members}</li>
          <li>{group.schedule}</li>
          <li>{group.location}</li>
          <li>{group.owner}</li>
        </ul>

        <ProgressBar value={group.progress} />

        <div className="group-card__footer">
          <span>{group.tag}</span>
          <Link to={`/groups/${group.id}/members`}>Ver membros <ChevronRight size={16} /></Link>
        </div>
      </div>
    </article>
  );
}

function BadgeCard({ badge }) {
  const Icon = badge.icon;

  return (
    <article className={`badge-card badge-card--${badge.tone}`}>
      <span className="badge-card__icon"><Icon size={24} /></span>
      <strong>{badge.title}</strong>
      <p>{badge.description}</p>
    </article>
  );
}

function SubjectCard({ subject }) {
  const Icon = subject.icon;

  return (
    <article className="subject-card">
      <span className="subject-card__icon"><Icon size={24} /></span>
      <strong>{subject.label}</strong>
    </article>
  );
}

function SearchBar({ placeholder }) {
  return (
    <label className="search-bar">
      <Search size={22} />
      <input type="search" placeholder={placeholder} />
    </label>
  );
}

export default App;
