"use client";

import React, { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiAmazon,
  SiGithub,
  SiGitlab,
  SiJira,
  SiBitbucket,
  SiFlutter,
  SiHtml5,
} from "react-icons/si";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/Toolboxitems";
import { motion } from "framer-motion";
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: SiJavascript,
  },
  {
    title: "TypeScript",
    iconType: SiTypescript,
  },
  {
    title: "React",
    iconType: SiReact,
  },
  {
    title: "Next.js",
    iconType: SiNextdotjs,
  },
  {
    title: "Tailwind CSS",
    iconType: SiTailwindcss,
  },
  {
    title: "Node.js",
    iconType: SiNodedotjs,
  },
  {
    title: "Python",
    iconType: SiPython,
  },
  {
    title: "Docker",
    iconType: SiDocker,
  },
  {
    title: "AWS",
    iconType: SiAmazon,
  },
  {
    title: "GitHub",
    iconType: SiGithub,
  },
  {
    title: "GitLab",
    iconType: SiGitlab,
  },
  {
    title: "Jira",
    iconType: SiJira,
  },
  {
    title: "Bitbucket",
    iconType: SiBitbucket,
  },
  {
    title: "Flutter",
    iconType: SiFlutter,
  },
  {
    title: "HTML",
    iconType: SiHtml5,
  },
];
const hobbies = [
  { title: "Traveling", emoji: "🌍", left: "5%", top: "5%" },
  { title: "Reading", emoji: "📚", left: "50%", top: "5%" },
  { title: "Photography", emoji: "📸", left: "10%", top: "35%" },
  { title: "Gaming", emoji: "🎮", left: "35%", top: "40%" },
  { title: "Netflix", emoji: "🍿", left: "70%", top: "45%" },
  { title: "Music", emoji: "🎵", left: "5%", top: "65%" },
  { title: "Technology", emoji: "💻", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const row1 = toolboxItems.slice(0, 4);
  const row2 = toolboxItems.slice(4, 8);
  const row3 = toolboxItems.slice(8, 12);
  const row4 = toolboxItems.slice(12);
  const constraintRef = useRef(null);
  return (
    <div className="py-8 sm:py-12 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="About me"
          description="I'm an experienced Mobile and Web Developer adept at crafting dynamic, scalable, and visually appealing applications using Flutter,NextJS and React. Committed to delivering innovative, user-centric solutions that drive digital transformation. Skilled in the full lifecycle of application development, from conceptualization to implementation and support. Proficient in integrating complex systems, including Maximo software customization and REST API integration. Dedicated to staying ahead of industry trends and contributing to the growth of the Flutter, NextJS and React ecosystem."
        />
        <div className="mt-8 sm:mt-12 md:mt-20 flex flex-col gap-4 sm:gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-5">
            <Card className="min-h-[400px] h-auto md:h-[480px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-32 sm:w-36 md:w-40 mx-auto mt-4 sm:mt-6 md:mt-8">
                <Image
                  src={bookImage}
                  alt="book"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </Card>
            <Card className="min-h-[400px] h-auto md:h-[480px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences"
              />
              <div className="relative overflow-hidden">
                <ToolboxItems
                  items={row1}
                  className="mt-4 sm:mt-6"
                  speed={30}
                  direction="normal"
                />
                <ToolboxItems
                  items={row2}
                  className="mt-4 sm:mt-6"
                  speed={40}
                  direction="reverse"
                />
                <ToolboxItems
                  items={row3}
                  className="mt-4 sm:mt-6"
                  speed={35}
                  direction="normal"
                />
                <ToolboxItems
                  items={row4}
                  className="mt-4 sm:mt-6"
                  speed={45}
                  direction="reverse"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            <Card className="min-h-[350px] h-auto md:h-[420px] p-0 flex flex-col">
              <CardHeader
                title="Beyond the Code"
                description="Explore my passions and interests beyond the world of coding"
                className="px-4 sm:px-6 py-4 sm:py-6"
              />
              <div className="relative flex-1 " ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute text-sm sm:text-base"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                      transform: "scale(0.9) sm:scale(1)",
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="min-h-[350px] h-auto md:h-[420px] p-0 relative overflow-hidden">
              <Image
                src={mapImage}
                alt="map"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute top-1/2 right-1/2 sm:right-1/3 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={smileMemoji}
                  alt="memoji"
                  className="w-14 h-14 sm:w-16 sm:h-16 md:size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
