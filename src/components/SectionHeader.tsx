"use client";
import rushdan from "@/assets/images/rushdan.jpeg";
import Image from "next/image";

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
        <div className="flex justify-center items-center mt-5">
          <Image src={rushdan} alt="rushdan" className="size-48 rounded-full" />
        </div>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg text-white/60 mt-4 lg:text-xl max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
