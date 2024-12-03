"use client";
import memojiComputer from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StartIcon from "@/assets/icons/star.svg";
import SparklesIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:liner-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72} duration={45}>
          <StartIcon className="size-28 text-emerald-300 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} duration={35} childDuration={8}>
          <StartIcon className="size-12 text-emerald-300/80 hover:text-emerald-200 animate-glow" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} duration={40}>
          <StartIcon className="size-8 text-emerald-300/60 animate-float" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} duration={25}>
          <SparklesIcon className="size-8 text-emerald-300/40 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={680} rotation={145} duration={50}>
          <SparklesIcon className="size-16 text-emerald-300/50 animate-float" />
        </HeroOrbit>
        <HeroOrbit size={320} rotation={-45} duration={30} childDuration={6}>
          <StartIcon className="size-6 text-emerald-300/70 animate-glow" />
        </HeroOrbit>
        <HeroOrbit size={900} rotation={180} duration={55}>
          <SparklesIcon className="size-20 text-emerald-300/30 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={480} rotation={65} duration={38}>
          <StartIcon className="size-10 text-emerald-300/65 animate-float" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={memojiComputer}
            alt="memoji"
            className="size-[100px] md:size-[150px] lg:size-[200px]"
          />
          <div className="bg-gray-950 border border-gray-800  px-4 py-1.5 rounded-full inline-flex  mt-1 items-center gap-4 text-white/70 ">
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className="text-sm font-semibold">
              Available for new project
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="text-center mt-4 text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing websites and applications. Let&apos;s work together
            to bring your ideas to life!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full z-10 cursor-pointer hover:border-white hover:text-white transition-all duration-300"
          >
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-full z-10 cursor-pointer hover:bg-white/70 hover:text-gray-900 transition-all duration-300"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
