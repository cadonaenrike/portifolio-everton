import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import logo from "../images/logo.png";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    // Definir manualmente o tema para "light" ou "dark" aqui
    // Isso substituirá qualquer preferência de tema do navegador ou do sistema
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-4 ${
        theme === "dark" ? "bg-gray-300" : "bg-gray-666"
      }`}
    >
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={`text-3xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-666"
          }`}
        >
          {theme === "dark" ? (
            <FaSun className="h-6 w-6" />
          ) : (
            <FaMoon className="h-6 w-6" />
          )}
        </button>

        <Link href="/" passHref>
          <p className="flex items-center shrink-0">
            <Image src={logo} alt="Logo" width={97} height={59} />
          </p>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden text-3xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-666"
          }`}
        >
          ☰
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex space-x-10 mt-4 md:mt-0 ${
          theme === "dark" ? "text-gray-300" : "text-gray-666"
        }`}
      >
        <Link href="/" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Início
          </p>
        </Link>
        <Link href="/Sobre" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Sobre
          </p>
        </Link>
        <Link href="/Tecnologia" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Tecnologias
          </p>
        </Link>
        <Link href="/Projeto" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Projetos
          </p>
        </Link>
        <Link href="/Contato" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Contato
          </p>
        </Link>
      </div>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Link
          href="https://github.com/cadonaenrike"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${theme === "dark" ? "gray-666" : "gray-300"}`}
        >
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.instagram.com/everton_cadona/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${theme === "dark" ? "gray-666" : "gray-300"}`}
        >
          <FaInstagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/everton-cadona/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${theme === "dark" ? "gray-666" : "gray-300"}`}
        >
          <FaLinkedinIn className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
