import Image from "next/image";
import { Eye, Github } from "lucide-react";
import { projects } from "@/constants";

function Projects() {
  return (
    <section className="container-x nav-margin text-white">
      <h1 className="text-4xl text-center sm:text-left">
        Some Projects I have worked on
      </h1>
      <p className="gray mb-20 text-center sm:text-left">
        A curated list of selected projects that I&apos;ve worked on.
      </p>
      {projects.map(({ title, description, stack, url }, index) => (
        <div
          key={index}
          className={`flex md:justify-center gap-10 items-center flex-col mb-24 ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-fit">
            <div className="w-[400px] h-[250px] relative">
              <Image
                src={url.image}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex justify-around mt-4">
              <a
                className="hover:rotate-12 hover:scale-105 active:scale-95"
                href={url.github}
              >
                <Github color="#06b6d4" size="2rem" />
              </a>
              <a
                className="hover:rotate-12 hover:scale-105 active:scale-95"
                href={url.live}
              >
                <Eye color="#06b6d4" size="2rem" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-lightBlue">{title}</h2>
            <p className="my-6 md:my-12">{description}</p>
            <p className="gray">Stack: {stack}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
