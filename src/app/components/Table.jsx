"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const AchievementSection = () => {
  const achievements = [
    {
      awardDetails: "$100 For Best PCB design",
      time: "2023-10-12",
      awardedBy: "The dev wars",
      details: (
        <a
          href=""
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
        >
          view
        </a>
      ),
    },
    {
      awardDetails:
        "Project of the Week for 10/10 rating by an Engineer,Raspberry Pi reward",
      time: "2023-10-13",
      awardedBy: "PCBWay",
      details: (
        <a
          href=""
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
        >
          view
        </a>
      ),
    },

    {
      awardDetails: "3th Place",
      time: "2023-08-27",
      awardedBy: "CodeDay",
      details: (
        <a
          href=""
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
        >
          view
        </a>
      ),
    },
    {
      awardDetails: "Certificate of Completion",
      time: "2023-08-27",
      awardedBy: "CodeDay",
      details: (
        <a
          href=""
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
        >
          view
        </a>
      ),
    },

    {
      awardDetails: "Certificate of Achievement(Google code)",
      time: "2018",
      awardedBy: "Google",
      details: (
        <a
          href=""
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
        >
          view
        </a>
      ),
    },
    {
      awardDetails: "Certificate of Achievement(French Olympiad 2018)",
      time: "2018",
      awardedBy: "French Embassy and others",
      details: (
        <a
          href=""
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
        >
          view
        </a>
      ),
    },
  ];

  return (
    <section id="Achievements" className="mb-8">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Achievements and Awards
      </h2>
      <div className="overflow-x-auto">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Achievements and Awards</TableColumn>
            <TableColumn>Date/Month/Year</TableColumn>
            <TableColumn>Awarded/Offered by</TableColumn>
            <TableColumn>Details of Certificates/Links</TableColumn>
          </TableHeader>
          <TableBody>
            {achievements.map((achievement, index) => (
              <TableRow key={index}>
                <TableCell>{achievement.awardDetails}</TableCell>
                <TableCell>{achievement.time}</TableCell>
                <TableCell>{achievement.awardedBy}</TableCell>
                <TableCell>{achievement.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default AchievementSection;
