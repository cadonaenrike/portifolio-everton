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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`flex items-center justify-between px-20 py-4 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <Link href="/" passHref>
        <p className="flex items-center shrink-0">
          <Image src={logo} alt="Logo" width={97} height={59} />
        </p>
      </Link>

      <div
        className={`hidden md:flex space-x-10 ${
          theme === "dark" ? "text-gray-300" : "text-gray-666"
        }`}
      >
        <Link href="/" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Início
          </p>
        </Link>
        <Link href="/sobre" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Sobre
          </p>
        </Link>
        <Link href="/tecnologias" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Tecnologias
          </p>
        </Link>
        <Link href="/projetos" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Projetos
          </p>
        </Link>
        <Link href="/contato" passHref>
          <p className="text-center text-2xl font-[DM Sans] font-medium leading-6">
            Contato
          </p>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${theme === "dark" ? "gray-300" : "gray-666"}`}
        >
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${theme === "dark" ? "gray-300" : "gray-666"}`}
        >
          <FaInstagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${theme === "dark" ? "gray-300" : "gray-666"}`}
        >
          <FaLinkedinIn className="h-6 w-6" />
        </Link>
        <button
          onClick={toggleTheme}
          className={`text-${
            theme === "dark" ? "gray-300" : "gray-666"
          } ${"pl-24"}`}
        >
          {theme === "dark" ? (
            <FaSun className="h-6 w-6" />
          ) : (
            <FaMoon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
