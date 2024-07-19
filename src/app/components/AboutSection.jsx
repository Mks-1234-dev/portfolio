"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>React Native</li>
        <li>Flutter</li>
        <li>Tailwind CSS</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>C++</li>
        <li>Python</li>
        <li>JAVA</li>
        <li>SQL</li>
        <li>Firebase</li>
        <li>Micropython</li>
        <li>Arduino</li>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google </li>
        <li>PCBWay</li>
        <li>IIT Delhi</li>
      </ul>
    ),
  },
  {
    title: "Hardware skills",
    id: "Hardware skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Arduino</li>
        <li>Raspberry pi</li>
        <li>ESP32</li>
        <li>PCB Designing</li>
      </ul>
    ),
  },
  {
    title: "Prizes",
    id: "prizes",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Listed as Project of the week and rewarded a Raspberry Pi by PCBWay
        </li>
        <li>Fourth prize in Interschool Hackathon</li>
        <li>From Google code to finish in top 10</li>
        <li>From HPE to finish in top 100</li>
        <li>Fourth prize in All India Hackathon at IIT Dehi</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="My Original Art"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack developer with a passion for creating interactive
            and responsive applications and interesting Hardware tech. I have
            experience working with several Languages, even particiated in
            several hackathons,worked with several organizations. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.I also like Sketching,Playing Games.
          </p>
          <div className="flex flex-row justify-start mt-8 overflow-x-auto">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Hardware skills")}
              active={tab === "Hardware skills"}
            >
              {" "}
              Hardware skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
