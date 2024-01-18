import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaAndroid,
  FaApple,
  FaObjectUngroup,
  FaYarn,
  FaRandom,
} from "react-icons/fa";
import {
  SiArchicad,
  SiDjango,
  SiExpress,
  SiFlutter,
  SiJest,
  SiKotlin,
  SiMysql,
  SiRubyonrails,
  SiSpring,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Definição da interface Tech
interface Tech {
  name: string;
  icon: JSX.Element;
}

export const techs: Tech[] = [
  // Tecnologias Web Fullstack
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={128} /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={128} /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" size={128} /> },
  { name: "React", icon: <FaReact color="#61DAFB" size={128} /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" size={128} /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#38B2AC" size={128} />,
  },
  // Tecnologias Backend
  { name: "Node.js", icon: <FaNodeJs color="#339933" size={128} /> },
  { name: "Express.js", icon: <SiExpress color="#000000" size={128} /> },
  { name: "Spring Boot", icon: <SiSpring color="#6DB33F" size={128} /> },
  { name: "UUID", icon: <FaRandom color="#FFD700" size={128} /> },
  { name: "Banco de Dados", icon: <SiMysql color="#00758F" size={128} /> },
  // Tecnologias Mobile (mantidas)
  { name: "React Native", icon: <FaReact color="#000000" size={128} /> },
  { name: "Flutter", icon: <SiFlutter color="#02569B" size={128} /> },
  { name: "Swift", icon: <SiSwift color="#FFAC45" size={128} /> },
  { name: "Kotlin", icon: <SiKotlin color="#0095D5" size={128} /> },
  { name: "Android", icon: <FaAndroid color="#3DDC84" size={128} /> },
  { name: "iOS", icon: <FaApple color="#000" size={128} /> },
  // Outras Tecnologias
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={128} /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" size={128} /> },
  { name: "NPM", icon: <FaNpm color="#CB3837" size={128} /> },
  { name: "Yarn", icon: <FaYarn color="#2C8EBB" size={128} /> },
  {
    name: "Programação Orientada à Objetos",
    icon: <FaObjectUngroup color="#000000" size={128} />,
  },
  {
    name: "Arquitetura de Software",
    icon: <SiArchicad color="#0061A8" size={128} />,
  },
  {
    name: "Test Driven Development",
    icon: <SiJest color="#99425B" size={128} />,
  },
];
