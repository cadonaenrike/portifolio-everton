import React, { useState, useEffect } from "react";
import Image from "next/image";
import perfil from "../images/perfil.jpeg";
import perfilHover from "../images/logo.png";
import { Tecnologias } from "@/components/Tecnologias";
import Projeto from "@/components/Projetos";
import projectInfos from "@/base/projetosInfos";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Função para verificar se a seção está visível na tela
  const handleVisibility = () => {
    const element = document.getElementById("projetos");
    if (element) {
      const bounding = element.getBoundingClientRect();
      setIsVisible(bounding.top <= window.innerHeight / 2);
    }
  };

  // Atualizar visibilidade ao carregar a página
  useEffect(() => {
    handleVisibility();
    window.addEventListener("scroll", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:py-20">
        <section
          id="inicio"
          className={`text-center mt-8 mb-40 md:mt-20 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between ${
            isVisible ? `animated fade-in` : ``
          }`}
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 md:mb-0">
            Olá 👋, <br /> Meu nome é{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
              Éverton Cadoná
            </span>{" "}
            <br />
            Sou um desenvolvedor Fullstack
          </h1>
          <Image
            src={isHovered ? perfilHover : perfil} // Alterne entre as imagens com base no estado isHovered
            alt="Éverton Cadoná"
            width={300}
            height={300}
            className="rounded-full"
            onMouseEnter={() => setIsHovered(true)} // Defina isHovered como true quando o mouse entra na imagem
            onMouseLeave={() => setIsHovered(false)} // Defina isHovered como false quando o mouse sai da imagem
          />
        </section>

        <section
          id="tecnologias"
          className={`text-center mt-8 mb-40 md:py-16 ${
            isVisible ? `animated fade-in` : ``
          }`}
        >
          <h1 className="text-[#8e90f8] text-6xl md:text-6xl font-bold mb-8 mt-8">
            Tecnologias
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-semibold mb-8 pb-8">
            Tecnologias com as quais tenho trabalhado recentemente
          </p>
          <Tecnologias />
        </section>

        <section
          id="projetos"
          className={`mt-40 md:py-16 text-center ${
            isVisible ? `animated fade-in` : ``
          }`}
        >
          <h1 className="text-[#8e90f8] text-6xl md:text-6xl font-bold  mb-8 mt-8">
            Projetos
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-semibold pb-8 mb-8">
            Mergulhe nos projetos que representam minha jornada e habilidades
            como desenvolvedor full-stack.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectInfos.map((project, index) => (
              <div
                key={index}
                className={`p-4 max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg ${
                  isVisible ? `animated fade-in` : ``
                }`}
              >
                <Projeto {...project} />
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* Rodapé */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
