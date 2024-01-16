import Navbar from "../components/Navbar";
import Image from "next/image";
import perfil from "../images/perfil.jpeg";
import { Tecnologias } from "@/components/Tecnologias";
import Projeto from "@/components/Projetos";
import projectInfos from "@/base/projetosInfos";
import Footer from "@/components/Footer";

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
          display: inline-block;
        }

        .container {
          padding: 0 1rem;
        }

        .main-section {
          padding: 4rem 1rem;
        }

        .main-section h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .main-section .profile-image {
          width: 100%;
          max-width: 300px;
          height: auto;
          margin-left: auto;
          margin-right: auto;
          display: block;
          border-radius: 50%;
        }

        .technologies-section h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .technologies-section p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }

        .projects-section h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .projects-section p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
      `}</style>
      <main className="container mx-auto main-section">
        <section className="text-center mt-8 md:mt-20 py-8 md:py-20 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-lg md:text-6xl mt-4 md:mt-16 mr-4 md:mr-16 font-bold leading-tight">
            Olá 👋, <br /> Meu nome é{" "}
            <span className="gradient-text">Éverton Cadoná</span> <br />
            Sou um desenvolvedor Fullstack
          </h1>
          <Image
            src={perfil}
            alt="Éverton Cadoná"
            width={300}
            height={300}
            className="profile-image rounded-full"
          />
        </section>
        <section className="text-center technologies-section">
          <h1 className="gradient-text text-2xl md:text-4xl font-bold mb-4">
            Tecnologias
          </h1>
          <p className="text-[var(--dark-content,#666)] text-lg md:text-2xl font-normal mb-8">
            Tecnologias com as quais tenho trabalhado recentemente
          </p>
          <Tecnologias />
        </section>

        <section className="py-8 md:py-20 text-center projects-section">
          <h1 className="gradient-text text-2xl md:text-4xl font-bold mb-4">
            Projetos
          </h1>
          <p className="text-[var(--dark-content,#666)] text-lg md:text-2xl font-normal mb-8">
            Mergulhe nos projetos que representam minha jornada e habilidades
            como desenvolvedor full-stack.
          </p>
          <div className="flex flex-wrap -m-4 justify-center">
            {projectInfos.map((project, index) => (
              <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
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
