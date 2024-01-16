import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

// Definição da interface Tech
interface Tech {
  name: string;
  icon: JSX.Element;
}

export const Tecnologias = () => {
  // Lista de tecnologias
  const techs: Tech[] = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "NPM", icon: <FaNpm color="#CB3837" /> },
  ];

  // Defina o número de ícones por linha com base no tamanho da tela

  const rows = techs.reduce<Tech[][]>((all, one, i) => {
    const ch = Math.floor(i);
    //@ts-ignore
    all[ch] = [].concat(all[ch] || [], one);
    return all;
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {rows.map((row, idx) => (
        <div key={idx} className="flex justify-center space-x-4 mb-8">
          {row.map((tech) => (
            <div key={tech.name} className="text-center">
              <div className="text-9xl">{tech.icon}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
