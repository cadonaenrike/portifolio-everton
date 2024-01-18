import React from "react";
import Navbar from "../components/Navbar";

import { useTheme } from "next-themes";
import Projeto from "@/components/Projetos";
import projectInfos from "@/base/projetosInfos";

const ProjetosPage = () => {
  const { theme } = useTheme();

  // Define classes CSS para o fundo e texto com base no tema atual
  const bgColorClassLight = "bg-gray-100";
  const bgColorClassDark = "bg-gray-800";
  const textColorClassLight = "text-gray-666";
  const textColorClassDark = "text-gray-300";

  const bgColorClass = theme === "dark" ? bgColorClassDark : bgColorClassLight;
  const textColorClass =
    theme === "dark" ? textColorClassDark : textColorClassLight;

  return (
    <div
      className={`flex flex-col min-h-screen ${bgColorClass} ${textColorClass}`}
    >
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <section className={`pb-8 md:mb-10 ${bgColorClass}`}>
          <h1
            className={`text-[#8e90f8] text-center font-poppins text-3xl md:text-5xl font-bold leading-tight mb-4 ${textColorClass}`}
          >
            Projetos
          </h1>
          <p
            className={`text-[var(--dark-content,#666)] pt-4 font-poppins text-lg font-semibold text-center md:text-lg font-normal leading-relaxed ${textColorClass}`}
          >
            Apresento abaixo alguns dos projetos que tive a oportunidade de
            criar, demonstrando a diversidade de tecnologias que domino e as
            soluções que desenvolvi.
          </p>
        </section>

        <section className={`mb-6 md:mb-10 ${bgColorClass}`}>
          {/* Use flex para exibir os projetos lado a lado em telas maiores */}
          <div className="flex flex-wrap -mx-4">
            {projectInfos.map((project, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                <Projeto {...project} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjetosPage;
