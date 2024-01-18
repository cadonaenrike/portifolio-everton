import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import logoGrowdev from "../images/logoGrowdev.jpg";
import logoUnicnec from "../images/logoUnicnec.jpg";
import { useTheme } from "next-themes";

const SobrePage = () => {
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
            className={`text-[#8e90f8] pb-8 text-center font-poppins text-3xl md:text-5xl font-bold leading-tight mb-4 ${textColorClass}`}
          >
            Sobre Mim
          </h1>
          <p
            className={`text-[var(--dark-content,#666) font-poppins text-base md:text-lg font-normal leading-relaxed ${textColorClass}`}
          >
            Ajudar os clientes a escolherem as ferramentas certas para suas
            necessidades visando resultado, metas e entregas de valor, usando a
            tecnologia como meio para alcançar o devido fim! Sou esse rapaz da
            foto, simpático, comunicativo que esta aqui pra compartilhar um
            pouco das experiências vividas e aprendizados, com as pessoas que
            aqui estão. Hoje posso dizer que sou um entusiasta de tecnologia
            como um todo! Já atuei em diversos segmentos como: estoques, CDs de
            distribuição, entre outras.... mas, agora migrando de vez para área
            Desenvolvimento. Com experiências variadas: desde estagiário de uma
            prefeitura municipal; jovem aprendiz na área administrativa de
            recebimento de notas de uma grande rede de supermercados; estoquista
            e responsável pela assistência técnica de produtos; auxiliar de
            logística na parte de dublagens e refaturamento de matéria prima e
            responsável por transportes de terceirizados em uma distribuidora de
            insumos. Curiosidade: Sou formado em logística, mas desde a
            juventude tive flertes com a área de desenvolvimento, pois sempre
            fui um grande entusiasta por novas tecnologias e agora pretendo
            participar delas! O que importa: Família, viajar, carros, ouvir mais
            do que falar, Evoluir sempre.
          </p>
        </section>

        <section className={`mb-6 md:mb-10 ${bgColorClass}`}>
          <h1
            className={`text-[#8e90f8] pt-8 text-center font-poppins text-3xl md:text-5xl font-bold leading-tight mb-4 ${textColorClass}`}
          >
            Experiência
          </h1>
          <div className="space-y-1 px-8">
            <article
              className={`${bgColorClass} rounded-lg border-b-4 border-gray-300 p-4 flex`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  Motorista Profissional
                </h3>
                <p className={`${textColorClass}`}>Uber - Tempo integral</p>
              </div>
              <div className="text-right">
                <p className={`${textColorClass}`}>
                  jun de 2020 - presente · 3 anos 8 meses
                </p>
                <p className={`${textColorClass}`}>Rio Grande do Sul, Brasil</p>
              </div>
            </article>
            <article
              className={`${bgColorClass} border-b-4 border-gray-300 rounded-lg p-4 flex`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Auxiliar de Logística</h3>
                <p className={`${textColorClass}`}>
                  Plantar Comércio de Insumos - Plantar Agro
                </p>
              </div>
              <div className="text-right">
                <p className={`${textColorClass}`}>
                  out de 2019 - jun de 2020 · 9 meses
                </p>
                <p className={`${textColorClass}`}>
                  Canoas, Rio Grande do Sul, Brasil
                </p>
              </div>
            </article>
            <article
              className={`${bgColorClass} border-b-4 border-gray-300 rounded-lg p-4 flex`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Estoquista</h3>
                <p className={`${textColorClass}`}>Calçados Beira Rio S/A</p>
              </div>
              <div className="text-right">
                <p className={`${textColorClass}`}>
                  abr de 2017 - out de 2019 · 2 anos 7 meses
                </p>
                <p className={`${textColorClass}`}>
                  Sapiranga, Rio Grande do Sul, Brasil
                </p>
              </div>
            </article>
            <article
              className={`${bgColorClass} border-b-4 border-gray-300 rounded-lg p-4 flex`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Gerente de Estoque</h3>
                <p className={`${textColorClass}`}>Lojas Benoit</p>
              </div>
              <div className="text-right">
                <p className={`${textColorClass}`}>
                  nov de 2015 - abr de 2017 · 1 ano 6 meses
                </p>
                <p className={`${textColorClass}`}>
                  Sapiranga, Rio Grande do Sul, Brasil
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={`mb-6 md:mb-10 ${bgColorClass}`}>
          <h1
            className={`text-[#8e90f8] font-poppins text-3xl md:text-5xl font-bold pt-8 leading-tight text-center ${textColorClass}`}
          >
            Formação Acadêmica
          </h1>
          <div className="space-y-4 ">
            <article
              className={`${bgColorClass} border-b-4 border-gray-300 flex rounded-lg p-4 items-center`}
            >
              <div className="flex">
                <Image
                  src={logoGrowdev}
                  alt="Logo da empresa Growdev"
                  className="h-12 w-12 inline-block mr-2"
                />
              </div>
              <div className="flex-1 px-1 pt-36">
                <h3 className="text-xl font-semibold">Growdev</h3>
                <p className={`${textColorClass}`}>
                  Curso preparatório, Web Developer I - Desenvolvimento de
                  Software Full Stack
                </p>
                <p className={`${textColorClass}`}>fev de 2022 - fev de 2024</p>
                <p>
                  O Programa Starter Full Stack Developer é uma formação
                  completa que vai desde os fundamentos da programação e
                  tecnologia até o desenvolvimento de um software completo,
                  incluindo front-end, back-end, banco de dados e cache, com
                  qualidade garantida por testes automatizados e implantação
                  (deploy) do sistema em produção. Os alunos têm a oportunidade
                  de aplicar seus conhecimentos em projetos contratados por
                  empresas, desenvolvidos na fábrica de software da Growdev. O
                  objetivo é proporcionar um aprendizado de qualidade e
                  desenvolver as habilidades técnicas e interpessoais dos
                  alunos. A grade curricular é dividida em blocos, incluindo
                  Básico, Intermediário, Avançado e Profissional, com a adição
                  de novos conteúdos enquanto se baseia no que já foi estudado
                  em cada etapa.
                </p>
              </div>
            </article>

            <article
              className={`${bgColorClass} border-b-4 border-gray-300 flex rounded-lg p-4 items-center`}
            >
              <Image
                src={logoUnicnec}
                alt="Logo da empresa Growdev"
                className="h-12 w-12 inline-block mr-2"
              />
              <div className="flex-1 px-1">
                <h3 className="text-xl font-semibold">UNICNEC</h3>
                <p className={`${textColorClass}`}>
                  Logística, Gestão da Cadeia de Suprimentos e Logística
                </p>
                <p className={`${textColorClass}`}>jun de 2019 - mar de 2021</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SobrePage;
