"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MyIMU from "../assets/images/MyIMU.png";
import TEIS from "../assets/images/TEIS.jpg";
import Link from "next/link";
import Image from "next/image";
import CheckIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";

const portfolioProjects = [
 {
   company: "Impressive Communications Sdn Bhd",
   year: "2023",
   title: "TNB - Tools Equipment Information System",
   results: [
     {
       title: "Built and deployed dynamic web and mobile applications using React and Flutter, improving user experience by 40%.",
     },
     {
       title: "Integrated Maximo REST API into web-based projects, enhancing site speed by 50%.",
     },
     {
       title: "Created maintainable codebases for React/Flutter applications, increasing mobile traffic by 35%.",
     },
   ],
   image: TEIS,
 },
 {
   company: "International Medical University",
   year: "2024", 
   title: "MYIMU Web Dashboard",
   results: [
     {
       title: "Developed secure backend APIs using Python and Flask, enabling authentication, role-based access control, and user permissions.",
     },
     {
       title: "Integrated Microsoft AD token-based authentication, enhancing security across university web applications.",
     },
     {
       title: "Built a responsive university dashboard frontend with Next.js, TypeScript, and Tailwind CSS, implementing robust role-based access control.", 
     },
   ],
   link: "https://myimu.imu.edu.my",
   image: MyIMU,
 },
];

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
     ([entry]) => setIsInView(entry.isIntersecting),
     { threshold: 0.1 }
   );

   const element = document.querySelector('.card');
   if (element) observer.observe(element);

   return () => observer.disconnect();
 }, []);

 return (
   <motion.div
     className={`card ${className}`}
     initial={{ opacity: 0, y: 50 }}
     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
     transition={{ duration: 0.6, ease: "easeOut" }}
     whileHover={{ scale: 1.02 }}
   >
     {children}
   </motion.div>
 );
};

export const ProjectsSection = () => {
 return (
   <section className="pb-10 lg:py-24">
     <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.8 }}
       className="container"
     >
       <motion.div 
         className="flex justify-center"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.2 }}
       >
         <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
           Real-World Projects
         </p>
       </motion.div>

       <motion.h2 
         className="font-serif text-3xl md:text-5xl text-center mt-6"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.3 }}
       >
         Featured Projects
       </motion.h2>

       <motion.p 
         className="text-center md:text-lg text-white/80 mt-4 lg:text-xl max-w-md mx-auto"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.4 }}
       >
         See how I transform ideas into functional, scalable, and user-friendly web applications.
       </motion.p>

       <div className="md:mt-20 flex flex-col mt-10 gap-24">
         <AnimatePresence>
           {portfolioProjects.map((project, index) => (
             <Card
               key={project.title}
               className="bg-gray-800/90 backdrop-blur-sm rounded-3xl z-0 after:z-10 overflow-hidden 
                         after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
                         after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 
                         md:px-10 lg:pt-16 lg:px-20 md:pt-12 after:pointer-events-none hover:shadow-2xl 
                         transition-all duration-300 relative"
             >
               <div className="absolute inset-0 -z-10 opacity-10 mix-blend-overlay"
                    style={{ background: `url(${grainImage.src})` }}
               />
               
               <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                 <motion.div 
                   className="lg:pb-16"
                   initial={{ x: -50, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 0.6, delay: index * 0.2 }}
                 >
                   <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text 
                                 inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
                     <span>{project.company}</span>
                     <span>&bull;</span>
                     <span>{project.year}</span>
                   </div>

                   <h3 className="font-serif text-2xl md:text-3xl mt-4 md:mt-5">
                     {project.title}
                   </h3>

                   <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />

                   <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                     {project.results.map((result, i) => (
                       <motion.li
                         key={result.title}
                         initial={{ x: -20, opacity: 0 }}
                         whileInView={{ x: 0, opacity: 1 }}
                         transition={{ delay: i * 0.1 }}
                         className="flex gap-2 text-sm md:text-base text-white/70 hover:text-white/90 transition-colors"
                       >
                         <span className="text-white/40">
                           <CheckIcon className="size-5 md:size-6" />
                         </span>
                         {result.title}
                       </motion.li>
                     ))}
                   </ul>

                   {project.link && (
                     <Link href={project.link} className="mt-4 relative z-20">
                       <motion.button 
                         className="bg-white text-gray-950 h-12 w-full rounded-full font-semibold 
                                  inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6
                                  hover:bg-gray-200 transition-colors"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                       >
                         <span>Visit Live Site</span>
                         <ArrowUpRightIcon className="size-5" />
                       </motion.button>
                     </Link>
                   )}
                 </motion.div>

                 <motion.div 
                   className="relative lg:pb-16"
                   initial={{ x: 50, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 0.6, delay: index * 0.2 }}
                 >
                   {project.image && (
                     <Image
                       src={project.image}
                       alt={project.title}
                       className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none
                                rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                       loading="lazy"
                       placeholder="blur"
                       blurDataURL={project.image.src}
                     />
                   )}
                 </motion.div>
               </div>
             </Card>
           ))}
         </AnimatePresence>
       </div>
     </motion.div>
   </section>
 );
};