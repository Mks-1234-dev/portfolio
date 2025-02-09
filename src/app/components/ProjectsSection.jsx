"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce",
    description: " Webapp",
    image: "/images/projects/n.png",
    tag: ["All", "Programming"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Website-Builder",
    description: "Website builder made using openai api",
    image: "/images/projects/python.png",
    tag: ["All", "Programming"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Website-Translator-with-GoogleTranslate",
    description:
      "Uses older version of google translate without any api and without showing the banner. You can change the language by editing translate.js.",
    image: "/images/projects/trans.png",
    tag: ["All", "Programming"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This website is made using Next.js and Tailwind CSS.",
    image: "/images/projects/port.png",
    tag: ["All", "Programming"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Morse Code Keyer with raspberry pi",
    description:
      "Morse code keyer with raspberry pi pico which can be used to send morse code over internet.",
    image: "/images/projects/morse.jpg",
    tag: ["All", "Hardware"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Weather Station with raspberry pi",
    description:
      "Weather Station with raspberry pi and sensors which can be accessed from anywhere.",
    image: "/images/projects/weather.jpg",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Controll over wifi car with raspberry pi",
    description:
      "Remote controll  car made with raspberry pi which can be controlled from phone.",
    image: "/images/projects/car.jpg",
    tag: ["All", "Hardware"],
    gitUrl: "",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Programming"
          isSelected={tag === "Programming"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
