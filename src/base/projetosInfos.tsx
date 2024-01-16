const projectInfos = [
  {
    title: "Funil Diagrama",
    description:
      "projeto desenvolvido para gerar e controlar fluxo de conversas e direcionamento de leads.",
    imageUrl:
      "https://learn.microsoft.com/pt-br/azure/architecture/ai-ml/architecture/_images/conversational-bot.svg",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Next"],
    livePreviewUrl: "https://funil-diagrama.vercel.app/",
    codeUrl: "https://github.com/cadonaenrike/Funil-diagrama",
  },
  {
    title: "Pokedex (Pokémon Universe)",
    description:
      "Um projeto pessoal que traz a nostalgia do clássico Pokémon Esmeralda para o ambiente web moderno. Inspirada na estética do GameBoy Advance, esta página foi meticulosamente desenvolvida para reviver as preciosas memórias dos treinadores de todas as gerações.",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D22AQHTHV8sBe4v6Q/feedshare-shrink_2048_1536/0/1704929647112?e=1707955200&v=beta&t=lGjg9_Z1ELmtmmvVb1G_MWjtX4xm_EOddEPD_4pEqqA",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    livePreviewUrl: "https://pokemon-app-three-mu.vercel.app/",
    codeUrl: "https://github.com/cadonaenrike/pokemon-app",
  },
  {
    title: "Funnel ADS",
    description:
      "Neste projeto esta sendo desenvolvido em equipe, juntamente com mais 3 desenvolvedores, onde fiquei responsável pelo FrontEnd!",
    imageUrl: "https://portifolio-ashy-psi.vercel.app/funnel.svg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next",
      "Typescript",
      "Nodejs",
    ],
    livePreviewUrl: "https://funnel-ads.vercel.app/Login",
    codeUrl: "https://github.com/EmanoelSaraiva/funnel-ads",
  },
  {
    title: "Ultima Milha",
    description: `
      O aplicativo do repositório "Ultima-milha" é focado na administração de promotores. Ele foi desenvolvido utilizando React Native e diversas bibliotecas, o que sugere que o app é destinado para dispositivos móveis e pode incorporar funcionalidades interativas e modernas típicas de aplicativos móveis. `,
    imageUrl:
      "data:image/png;base64,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",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactNative",
      "Mobile",
      "Android",
    ],
    livePreviewUrl: "https://github.com/cadonaenrike/Ultima-milha",
    codeUrl: "https://github.com/cadonaenrike/Ultima-milha",
  },
  {
    title: "API GrowTwitter",
    description:
      "A API GrowTwitter é uma plataforma poderosa que combina as tecnologias mais recentes para criar uma experiência incrível de mídia social. Ela foi construída com Node.js, Prisma, Bcrypt e PostgreSQL, oferecendo recursos avançados de autenticação de usuário, gerenciamento de tweets, likes, retweets, seguidores e muito mais.",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D22AQEQzZEqe8qN0Q/feedshare-shrink_2048_1536/0/1690902708377?e=1708560000&v=beta&t=K2eRUCb2lO6PSeBcvnanvh1GTt433P3UZGxLAHM4fCo",
    techStack: ["Nodejs", "Prisma", "Bcript", "postgreSQL", "Express", "UUID"],
    livePreviewUrl: "https://growtwitter-chi.vercel.app/",
    codeUrl: "https://github.com/cadonaenrike/api-growtwitter",
  },
  {
    title: "Projeto Front GrowTwitter",
    description:
      "O projeto api-growtwitter é um aplicativo web inspirado no Twitter, desenvolvido com React e TypeScript, utilizando Vite para construção rápida. Ele inclui roteamento com react-router-dom, estilização com Styled Components, e oferece dois temas, claro e escuro. Este projeto é uma base sólida para desenvolvimento web moderno, combinando eficiência, flexibilidade e design adaptável às preferências do usuário. Ideal para quem busca uma estrutura inicial robusta para aplicativos web inspirados em redes sociais.",
    imageUrl:
      "https://raw.githubusercontent.com/cadonaenrike/projeto-front-growtwitter/main/src/public/light_color/logo_growtweet.svg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "React-Router-Dom",
      "Styled-Components",
    ],
    livePreviewUrl: "https://growtwitter-chi.vercel.app/login",
    codeUrl: "https://github.com/cadonaenrike/projeto-front-growtwitter",
  },
  {
    title: "Express Delivery",
    description:
      "Trabalhando de mãos dadas com a designer de UX Thainara Wulfert, nossa aplicação combina funcionalidade e estética de forma harmoniosa. Adotamos o React para criar uma abordagem modular e ágil, dominando conceitos cruciais como componentes funcionais e de classe, gerenciamento de estado, propriedades e ciclo de vida. Cada linha de código foi otimizada para assegurar alto desempenho e proporcionar uma experiência excepcional ao usuário.",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D22AQFXeJGPhNAmsg/feedshare-shrink_800/0/1692112819294?e=1708560000&v=beta&t=wF2G1mqEqI1kEtwtlVJ0emEo2iDpv6SkkYXLUf4Bw0M",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Figma", "UX-UI"],
    livePreviewUrl: "https://github.com/cadonaenrike/Express-Delivery",
    codeUrl: "https://github.com/cadonaenrike/Express-Delivery",
  },
  // ... mais projetos
];
export default projectInfos;
