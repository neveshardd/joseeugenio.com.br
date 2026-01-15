export const FALLBACK_DATA: Record<string, any> = {
  services: [
    { id: 1, title: 'Projeto Arquitetônico', description: 'Desenvolvimento completo, do estudo preliminar ao projeto executivo.', tags: 'Arquitetura / BIM', icon: 'FaDrawPolygon' },
    { id: 2, title: 'Modelagem BIM', description: 'Criação de modelos inteligentes para coordenação e extração de quantitativos.', tags: 'BIM / Tecnologia', icon: 'FaCube' }
  ],
  'work-process': [
    { id: 1, num: '01', title: 'Brainstorming', description: 'Alinhamento de expectativas e necessidades do projeto.' },
    { id: 2, num: '02', title: 'Estudo', description: 'Desenvolvimento das primeiras ideias e volumetrias.' }
  ],
  faq: [
    { id: 1, question: 'Quais softwares são utilizados?', answer: 'Trabalhamos prioritariamente com Revit (BIM), Enscape e Adobe Suite.' }
  ],
  'bim-features': [
    { id: 1, title: 'Coordenação', description: 'Redução drástica de erros e incompatibilidades em obra.' },
    { id: 2, title: 'Precisão', description: 'Extração automática de quantitativos e orçamentos assertivos.' }
  ],
  'tech-stack': [
    { id: 1, category: 'bim', categoryNumber: '01', categoryTitle: 'BIM &<br/>Modelagem', categoryQuote: 'O BIM é o alicerce digital.', toolName: 'Revit', toolIcon: 'SiAutodeskrevit', toolDescription: 'Coordenação' },
    { id: 2, category: 'render', categoryNumber: '02', categoryTitle: 'Visualização<br/>Real-time', categoryQuote: 'A luz molda o espaço.', toolName: 'Enscape', toolIcon: 'EnscapeIcon', toolDescription: 'Renderização' }
  ],
  experience: [
    { id: 1, period: '2022 — Presente', title: 'Estudante de Arquitetura', company: 'Universidade', description: 'Desenvolvimento de projetos acadêmicos com foco em técnica e estética.' }
  ],
  education: [
    { id: 1, period: '2020 — 2025', title: 'Arquitetura e Urbanismo', institution: 'Universidade', description: 'Graduação em andamento.' }
  ],
  'page-content': {
    about_hero: {
      name: 'José Eugênio',
      subtitle: 'Estudante de Arquitetura & BIM Specialist',
      quote: '"A arquitetura não é sobre concreto e aço, mas sobre a luz que eles capturam e o silêncio que eles guardam."'
    },
    services_hero: {
        title: 'Soluções em<br/>Arquitetura Digital',
        description: 'Trabalho na intersecção entre o design atemporal e a tecnologia de ponta, entregando projetos precisos e visualmente impactantes.',
        buttonText: 'Solicitar Proposta',
        buttonLink: '/contato'
    },
    bim_intro: {
        section_label: 'Diferencial Técnico',
        title: 'A Metodologia BIM como Pilar',
        description: 'Minha abordagem não é apenas visual. Cada parede, viga e esquadria contém dados técnicos que garantem a viabilidade do projeto.'
    },
    services_cta: {
        title: 'Pronto para materializar sua ideia?',
        description: 'Seja para um projeto completo ou uma consultoria BIM, estou pronto para ajudar a elevar o nível do seu projeto.',
        buttonText: 'Solicitar Orçamento',
        buttonLink: '/contato'
    },
    contact_info: {
      email: 'contato@joseeugenio.com.br',
      whatsapp: '5500000000000',
      label: 'Contato',
      heading: 'Vamos Conversar?'
    }
  }
};
