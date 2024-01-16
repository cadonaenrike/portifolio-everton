import React from "react";
import Navbar from "../components/Navbar";
import { Tecnologias } from "../components/Tecnologias"; // Importe o componente Tecnologias aqui
import { useTheme } from "next-themes";

const TecnologiaPage = () => {
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
        <section className={`mb-6 md:mb-10 ${bgColorClass}`}>
          <h1
            className={`text-[#8e90f8] font-poppins text-3xl md:text-5xl font-bold leading-tight mb-4 ${textColorClass}`}
          >
            Tecnologia
          </h1>
          <p
            className={`text-[var(--dark-content,#666)] font-poppins text-base md:text-lg font-normal leading-relaxed ${textColorClass}`}
          >
            Aqui estão algumas das tecnologias com as quais estou familiarizado:
          </p>
        </section>

        <section className={`mb-6 md:mb-10 ${bgColorClass}`}>
          <Tecnologias />
        </section>
      </main>
    </div>
  );
};

export default TecnologiaPage;
