import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Redis } from "@/components/ui/svgs/redis";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { OpenCV } from "@/components/ui/svgs/opencv";
import { Ffmpeg } from "@/components/ui/svgs/ffmpeg";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Sqlite } from "@/components/ui/svgs/sqlite";

export const DATA = {
  name: "José Eugênio",
  initials: "JE",
  url: "https://joseeugenio.com.br",
  location: "Brasília, DF",
  locationLink: "https://www.google.com/maps/place/Bras%C3%ADlia,+DF",
  description:
    "Software Engineer com mais de 8 anos de experiência & Criador do sleepcomet.com. Apaixonado por criar produtos SaaS de alto impacto e automatizar fluxos com IA.",
  summary:
    "Sou desenvolvedor de software com mais de 8 anos de experiência construindo soluções robustas, escaláveis e focadas na experiência do usuário. Atualmente, estou desenvolvendo o [Sleepcomet](https://sleepcomet.com), um SaaS completo para automatização inteligente de cortes e publicações automáticas em redes sociais utilizando Inteligência Artificial (transcrição via Whisper, crop vertical inteligente por IA e publicação automática via APIs). Além disso, crio projetos open-source e desenvolvo soluções completas para a web.",
  avatarUrl: "https://avatars.githubusercontent.com/u/118855875?v=4",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Java", icon: Java },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Redis", icon: Redis },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "FFmpeg", icon: Ffmpeg },
    { name: "OpenCV", icon: OpenCV },
    { name: "Prisma", icon: Prisma },
    { name: "SQLite", icon: Sqlite },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "soujoseeugenio@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/neveshardd",
        icon: Icons.github,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/soujoseeugenio",
        icon: (props: any) => (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        ),
        navbar: true,
      },
      email: {
        name: "Enviar E-mail",
        url: "mailto:soujoseeugenio@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Sleepcomet",
      href: "https://sleepcomet.com",
      badges: [],
      location: "Brasília, DF",
      title: "Fundador & Desenvolvedor Líder",
      logoUrl: "/sleepcomet_logo.png",
      start: "2025",
      end: "Present",
      description:
        "Idealizei e liderei o desenvolvimento da plataforma sleepcomet.com, um ecossistema SaaS de Inteligência Artificial para recortar e publicar vídeos longos como clipes verticais virais (TikTok, Reels, Shorts). Desenvolvi toda a arquitetura baseada em microserviços/subprojetos: Landing Page (Next.js 16 + Tailwind v4), Dashboard (React + Vite + TanStack Query), API REST (Go/Gin), Worker (Python asyncio para Whisper, OpenCV e renderização via FFmpeg) e Auth Server (better-auth via Hono).",
    },
    {
      company: "HeroUI",
      href: "https://heroui.com",
      badges: [],
      location: "Open Source",
      title: "Contribuidor Open Source",
      logoUrl: "/heroui.png",
      start: "2024",
      end: "Present",
      description:
        "Contribuição ativa para o desenvolvimento e manutenção do HeroUI (anteriormente NextUI), uma das bibliotecas de componentes React mais populares. Foco na melhoria de acessibilidade (WAI-ARIA), otimização de performance de renderização e correção de bugs nos componentes principais.",
    },
    {
      company: "Desenvolvedor Full Stack Independente",
      href: "",
      badges: [],
      location: "Brasília, DF",
      title: "Software Engineer",
      logoUrl: "https://avatars.githubusercontent.com/u/118855875?v=4",
      start: "2023",
      end: "2025",
      description:
        "Criação e manutenção de aplicações web robustas de ponta a ponta. Desenvolvimento do ecossistema Paragonn (incluindo paragonn-web, paragonn-store e paragonn-dash), integrando APIs assíncronas, bancos de dados relacionais e designs modernos focados em UX.",
    },
    {
      company: "AGAGE Construtora",
      href: "https://agage.com.br",
      badges: [],
      location: "Brasília, DF",
      title: "Projetista",
      logoUrl: "/agage.png",
      start: "2023",
      end: "Present",
      description:
        "Desenvolvimento de projetos arquitetônicos utilizando softwares especializados (AutoCAD, SketchUp, Revit). Criação de plantas, maquetes digitais, renders e documentação técnica para obras residenciais e comerciais na região do Distrito Federal e demais regisões do Brasil.",
    },
    {
      company: "AGAGE Construtora",
      href: "https://agage.com.br",
      badges: [],
      location: "Brasília, DF",
      title: "Gestor e Designer de Projetos",
      logoUrl: "/agage.png",
      start: "2023",
      end: "Present",
      description:
        "Gestão de projetos internos, coordenação de equipes e prazos de entrega. Desenvolvimento e manutenção do site institucional da empresa, criação de estratégias de marketing digital, produção de conteúdo e gestão de presença online para captação de novos clientes.",
    },
  ],
  education: [
    {
      school: "Universidade Católica de Brasília (UCB)",
      href: "https://ucb.catolica.edu.br/",
      degree: "Bacharelado em Arquitetura e Urbanismo (5º Semestre)",
      logoUrl: "/ucb.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "Desenvolvimento Autodidata & Engenharia de Software",
      href: "https://dio.me",
      degree: "Estudos focados em IA, processamento de mídia, arquitetura de software e sistemas distribuídos.",
      logoUrl: "/dio.png",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "SleepComet",
      href: "https://sleepcomet.com",
      dates: "2025 - Present",
      active: true,
      description:
        "Plataforma SaaS que transforma vídeos longos em clipes virais verticais prontos para publicação usando Inteligência Artificial. Conta com landing page institucional, dashboard do usuário, API REST em Go, melhor momento selecionado via LLM, enquadramento inteligente com rastreamento de rosto por OpenCV e legendas estilizadas via FFmpeg.",
      technologies: [
        "Go",
        "Python",
        "React",
        "Redis",
        "FFmpeg",
      ],
      links: [
        {
          type: "Website",
          href: "https://sleepcomet.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Landing Page",
          href: "https://sleepcomet-landingpage.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Dashboard",
          href: "https://sleepcomet-app.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sleepcomet.png",
      video: "",
    },
    {
      title: "Rastropets",
      href: "https://github.com/neveshardd",
      dates: "2025",
      active: true,
      description:
        "Plataforma robusta para registro, rastreamento e busca de pets desaparecidos. Integra pesquisa instantânea em tempo real com Algolia Search, gerenciamento de conteúdo com Payload CMS e transições visuais fluidas criadas com GSAP.",
      technologies: [
        "Next.js",
        "Payload CMS",
        "Algolia",
        "GSAP",
      ],
      links: [],
      image: "/rastropets.png",
      video: "",
    },
    {
      title: "Terax Network",
      href: "https://github.com/neveshardd",
      dates: "2024",
      active: true,
      description:
        "Rede de servidores de jogos Minecraft de alta concorrência. Desenvolvimento de múltiplos plugins customizados em Java (Core, Lobby, Caixas Misteriosas, Cosmetics, Skins, Tags) e infraestrutura de proxy para distribuição de carga dos minigames (BedWars, SkyWars, Murder, TheBridge).",
      technologies: [
        "Java",
        "MySQL",
        "Docker",
      ],
      links: [],
      image: "/terax.png",
      video: "",
    },
    {
      title: "Paragonn",
      href: "https://paragonn.com.br",
      dates: "2025",
      active: true,
      description:
        "Um ecossistema de e-commerce e gerenciamento composto por uma loja robusta, um painel administrativo analítico de alta performance e uma interface web moderna, construídos para alto rendimento e experiência visual premium.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://paragonn.com.br",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Loja",
          href: "https://loja.paragonn.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/paragonn.png",
      video: "",
    },
    {
      title: "agage",
      href: "https://agage.com.br",
      dates: "2025",
      active: true,
      description:
        "Biblioteca utilitária em TypeScript com foco em eficiência e reusabilidade de padrões modernos. O progresso é o nosso produto.",
      technologies: ["TypeScript", "Node.js"],
      links: [
        {
          type: "Website",
          href: "https://agage.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/agage_project.png",
      video: "",
    },
  ],
  hackathons: [] as readonly {
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    links: readonly {
      title: string;
      icon: any;
      href: string;
    }[];
  }[],
} as const;
