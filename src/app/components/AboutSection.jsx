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
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google</li>
      </ul>
    ),
  },
  {
    title: "Hardware skills",
    id: "Hardware skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Arduino</li>
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
      <div>
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="My Original Art"
        />
        <div>
          <h2>About Me</h2>
          <p>
            I am a full stack developer with a passion for creating interactive
            and responsive applications and interesting Hardware tech. I have
            experience working with several Languages, even particiated in
            several hackathons,worked with several organizations. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.I also like Sketching,Playing Games.
          </p>
          <div>
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
