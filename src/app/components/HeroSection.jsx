"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div>
        <h1>
          <span>Hello, I&apos;m </span>
          <br></br>
          <TypeAnimation
            sequence={[
              "Mks",
              1000,
              "CS professional",
              1000,
              "Web Developer",
              1000,
              "App Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p>Currently unl student majoring in computer engineering,fresher.</p>
        <div>
          <Link href="/#contact">Contact Me</Link>
          <a href="link">
            <span>View CV</span>
          </a>
        </div>

        <div>
          <Image
            src="/images/new.png"
            alt="portfolio image"
            width={600}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
