import React from "react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../images/logo.png";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer
      className={`flex-col sm:flex-row justify-between px-4 sm:px-12 py-4 sm:py-2 ${
        theme === "dark"
          ? "bg-gray-666 text-gray-100"
          : "bg-gray-100 text-gray-666"
      }`}
    >
      <div
        className={`flex items-center justify-between space-x-4 ${
          theme === "dark"
            ? "bg-gray-666 text-gray-100"
            : "bg-gray-100 text-gray-666"
        }`}
      >
        <div className="flex items-center">
          {/* Substitua 'logo.svg' pelo caminho do seu logotipo */}
          <Image src={logo} alt="Logo" width={97} height={59} />
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-4">
          <span
            className={`text-base sm:text-lg font-semibold ${
              theme === "dark" ? "text-gray-100" : "text-gray-666"
            }`}
          >
            <a
              href="https://wa.me/qr/JIDWSD2UVQZSM1"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark" ? "text-gray-100" : "text-gray-666"
              } hover:text-green-600`}
            >
              +55 51 997295482
            </a>
          </span>
          <span
            className={`text-base sm:text-lg font-semibold ${
              theme === "dark" ? "text-gray-300" : "text-gray-666"
            }`}
          >
            <a
              href="mailto:cadonaenrike@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-666"
              } hover:text-red-600`}
            >
              Cadonaenrike@gmail.com
            </a>
          </span>
          <a
            href="https://github.com/cadonaenrike"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-666"
            } hover:text-blue-500`}
          >
            <FaGithub className="mx-0 w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.instagram.com/everton_cadona/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-666"
            } hover:text-pink-500`}
          >
            <FaInstagram className="mx-0 w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/everton-cadona/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark" ? "text-gray-100" : "text-gray-666"
            } hover:text-blue-700`}
          >
            <FaLinkedinIn className="mx-0 w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
      <div
        className="w-full my-2 sm:my-4"
        style={{
          height: "2px",
          backgroundColor: "gray-666",
          opacity: "0.3",
        }}
      />
      <div className="flex flex-col sm:flex-row justify-center items-center text-base sm:text-lg mb-4 sm:mb-10 px-4 sm:px-10">
        <p
          className={`font-semibold ${
            theme === "dark" ? "text-gray-100" : "text-gray-666"
          }`}
        >
          © {new Date().getFullYear()} Direitos Autorais e Design por{" "}
          <span className={`font-bold gradient-text`}>
            Éverton Henrique Cadona
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
