import React from "react";
import Navbar from "../components/Navbar";
import { useTheme } from "next-themes";

const ContatoPage = () => {
  const { theme } = useTheme();

  // Define classes CSS para o fundo e texto com base no tema atual
  const bgColorClassLight = "bg-gray-100";
  const bgColorClassDark = "bg-gray-800";
  const textColorClassLight = "text-gray-666";
  const textColorClassDark = "text-gray-300";

  const bgColorClass = theme === "dark" ? bgColorClassDark : bgColorClassLight;
  const textColorClass =
    theme === "dark" ? textColorClassDark : textColorClassLight;

  const email = "cadonaenrike@gmail.com.com"; // Substitua pelo seu endereço de e-mail

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
            Entre em Contato
          </h1>
          <p
            className={`text-[var(--dark-content,#666)] font-poppins text-base md:text-lg font-normal leading-relaxed ${textColorClass}`}
          >
            Se preferir, entre em contato através dos ícones do menu ou clicando
            no link abaixo:
          </p>
        </section>

        <section className={`mb-6 md:mb-10 ${bgColorClass}`}>
          <p className="text-blue-500 hover:underline">
            <a
              href={`mailto:${email}`}
              className="text-blue-500 hover:underline"
            >
              Enviar um e-mail
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default ContatoPage;
