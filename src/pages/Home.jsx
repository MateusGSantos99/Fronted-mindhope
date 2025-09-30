// Importações necessárias
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Calendar, Activity, FileText } from 'lucide-react';
import { Button } from '../components/Button'; // Verifique se Button aceita as props usadas

// Componente da Página Inicial (Home)
const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Agenda Dinâmica',
      description: 'Visualização de horários disponíveis com marcação automática e lembretes por e-mail',
    },
    {
      icon: Shield,
      title: 'Privacidade Garantida',
      description: 'Autenticação segura via JWT e proteção total dos dados sensíveis dos pacientes',
    },
    {
      icon: Activity,
      title: 'Análise Inteligente',
      description: 'Machine Learning para identificar padrões emocionais e agrupar perfis de risco',
    },
    {
      icon: Users,
      title: 'Impacto Social',
      description: 'Voltado para projetos voluntários, universidades e ONGs que oferecem apoio psicológico',
    },
    {
      icon: FileText,
      title: 'Histórico Estruturado',
      description: 'Registro organizado de sessões com temas, recomendações e evolução do paciente',
    },
    {
      icon: Zap,
      title: 'Interface Acolhedora',
      description: 'Design responsivo e acessível, pensado para conforto emocional dos usuários',
    },
  ];

  return (
    <div> 
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center text-center py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl overflow-hidden">
              <img src="/logo.png" alt="Mind-Hope" className="w-full object-contain" />
            </div>

          
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Bem-vindo á Mind Hope
              </h2>
              <p className="text-xl text-white mb-2 font-semibold">
                Cuidando de mentes, transformando vidas.
              </p>
              <p className="text-base text-white max-w-4xl mx-auto leading-normal font-medium">
              O Mind Hope conecta psicólogos voluntários a quem precisa de apoio, em um ambiente seguro e acessível. Nossa plataforma facilita agendamentos, registros e acompanhamento das sessões, enquanto a inteligência artificial ajuda a identificar riscos emocionais e oferecer um cuidado mais humano e preventivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Começar Já!
                </Button>
              </Link>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Conhecer Recursos
                </Button>
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="min-h-screen flex items-center py-20">
        <div className="w-full">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tecnologia a Serviço do Cuidado
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Ferramentas inteligentes para organizar, acompanhar e potencializar atendimentos
                voluntários
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-light to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="min-h-screen flex items-center py-20">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Faça Parte desta Transformação Social
            </h2>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
              Una tecnologia e responsabilidade social. Ajude a democratizar o acesso à saúde
              mental através de uma plataforma pensada para o bem-estar coletivo.
            </p>
            <Link to="/register">
              <Button size="lg" className="text-xl px-12 py-5 rounded-2xl font-semibold">
                Criar Conta Gratuita
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
