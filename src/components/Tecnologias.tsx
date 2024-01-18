import { techs } from "@/base/TecnologiasInfos";
import { useState, useEffect } from "react";

interface Tech {
  name: string;
  icon: JSX.Element;
}

export const Tecnologias = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [iconSize, setIconSize] = useState<number>(48); // Tamanho inicial dos ícones
  const [textSize, setTextSize] = useState<number>(20); // Tamanho do texto
  const [gapSize, setGapSize] = useState<number>(16); // Espaçamento entre os ícones
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    function handleResize() {
      // Atualizar o tamanho dos ícones, texto e espaçamento com base no tamanho da tela
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      if (newWindowWidth >= 1024) {
        // Tela grande, aumente o tamanho dos ícones, texto e espaçamento
        setIconSize(64);
        setTextSize(24);
        setGapSize(32);
      } else if (newWindowWidth >= 768) {
        // Tela média, tamanho intermediário de ícones, texto e espaçamento
        setIconSize(56);
        setTextSize(20);
        setGapSize(24);
      } else {
        // Tela pequena, tamanho menor de ícones, texto e espaçamento
        setIconSize(48);
        setTextSize(16);
        setGapSize(16);
      }
    }

    // Lidar com redimensionamento da janela
    window.addEventListener("resize", handleResize);
    handleResize(); // Chamar a função de redimensionamento uma vez para definir os valores iniciais

    return () => {
      window.removeEventListener("resize", handleResize); // Remover o ouvinte ao desmontar o componente
    };
  }, []);

  // Divida as tecnologias em grupos de 5 ícones por linha
  const rows: Tech[][] = [];
  for (let i = 0; i < techs.length; i += 2) {
    rows.push(techs.slice(i, i + 2));
  }

  return (
    <div className="flex flex-wrap p-3 gap-2 justify-center">
      {rows.map((row, idx) => (
        <div key={idx} className="flex justify-center space-x-4 mb-8">
          {row.map((tech, techIdx) => (
            <div
              key={techIdx}
              className="text-center relative cursor-pointer transition-transform transform hover:scale-105"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div style={{ fontSize: textSize }}>
                {tech.icon}
                {hoveredTech === tech.name && (
                  <div className="absolute rounded-2xl top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white text-xl flex items-center justify-center">
                    {tech.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
