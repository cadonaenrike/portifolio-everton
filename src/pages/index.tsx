// pages/index.tsx ou seu componente de página apropriado
import Navbar from "../components/Navbar";
import Image from "next/image";
import perfil from "../images/perfil.jpeg";
import { Tecnologias } from "@/components/Tecnologias";
import Projeto from "@/components/Projetos";
import projectInfos from "@/base/projetosInfos";

export default function Home() {
  return (
    <div>
      <Navbar />
      <style jsx>{`
        .gradient-text {
          background: var(--Gradient-Heading);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          display: inline-block; // Necessário para aplicar gradiente em elementos inline
        }
      `}</style>
      <main className="container mx-auto px-10 ">
        <section className="text-center mt-20 py-20 px-20 mb-40 flex flex-row items-center justify-between">
          <h1 className="text-6xl mt-16 mr-16 font-bold">
            Olá 👋, <br /> Meu nome é{" "}
            <span className="gradient-text">Éverton Cadoná</span> <br />
            Sou um desenvolvedor Fullstack
          </h1>
          <Image
            src={perfil}
            alt="Éverton Cadoná"
            width={300}
            height={300}
            className="rounded-full "
          />
        </section>
        <section className="text-center">
          <h1 className="gradient-text mb-8 font-poppins text-4xl  font-bold">
            Tecnologias
          </h1>
          <p className=" mb-24 text-[var(--dark-content,#666)] font-poppins text-2xl font-normal ">
            Tecnologias com as quais tenho trabalhado recentemente
          </p>
          <Tecnologias />
        </section>

        <section className="py-20 text-center">
          <h1 className="gradient-text text-4xl font-bold text-center mb-8">
            Projetos
          </h1>
          <p className="text-[var(--dark-content,#666)] text-2xl font-normal text-center mb-12">
            Mergulhe nos projetos que representam minha jornada e habilidades
            como desenvolvedor full-stack.
          </p>
          <div className="flex flex-wrap -m-4 justify-center">
            {projectInfos.map((project, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <Projeto {...project} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé */}
    </div>
  );
}
