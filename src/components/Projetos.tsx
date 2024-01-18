import React from "react";
import Image from "next/image";
import { FaEye, FaCode } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  livePreviewUrl: string;
  codeUrl: string;
}

const Projeto: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  livePreviewUrl,
  codeUrl,
}) => {
  return (
    <div className="max-w-sm mx-auto md:max-w-md lg:max-w-lg h-[700px] overflow-y-auto rounded-3xl overflow-hidden shadow-black border-2 bg-white dark:bg-gray-800 mb-6 relative">
      <Image
        src={imageUrl}
        alt="Project Image"
        width={375}
        height={260}
        className="max-h-72 flex items-center justify-center self-center"
        objectFit="cover"
        layout="responsive"
      />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 text-base mb-4">
          {description}
        </p>
        <div className="flex flex-wrap -mx-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="mx-2 mb-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 flex justify-between">
        <a
          href={livePreviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-black hover:text-red-700 transition duration-300"
        >
          <FaEye className="inline mr-2 fill-black" />
          Live Preview
        </a>
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-black hover:text-red-700 transition duration-300"
        >
          <FaCode className="inline mr-2 fill-black" />
          View Code
        </a>
      </div>
    </div>
  );
};

export default Projeto;
