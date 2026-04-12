import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">

      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain cursor-pointer"
          />
        </a>
      ) : (
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      )}

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {link && (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline break-all hover:text-cyan-300 transition-colors z-50"
            >
              {link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
