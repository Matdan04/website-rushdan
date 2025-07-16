"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MyIMU from "../assets/images/MyIMU.png";
import MyIMUDashboard from "../assets/images/MyIMUDashboard.png";
import TEIS from "../assets/images/TEIS.jpg";
import Link from "next/link";
import Image from "next/image";
import erms from "../assets/images/erms.png";
import CheckIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { image } from "framer-motion/client";

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
    title: "MYIMU Web Application",
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
  {
    company: "International Medical University",
    year: "2025",
    title: "MYIMU Administator Dashboard",
    results: [
      {
        title: "Successfully tracked over 3,700 student attendance records with comprehensive administrative tools for attendance and timetable management"
      },
      {
        title: "Developed centralized administrator dashboards featuring streamlined interfaces for managing student attendance records and academic timetables"
      },
      {
        title: "Built a responsive university dashboard frontend with Next.js, TypeScript, and Tailwind CSS, implementing robust role-based access control and Integrated Microsoft AD token-based authentication, enhancing security across university web applications"
      }
    ],
    image: MyIMUDashboard,
    link :"https://stag-myimu.imu.edu.my/school-administration/time-table"

  },
  {
    company: "International Medical University",
    year: "2025",
    title: "Exam Result Management System 2.0",
    results: [
      {
        title: "Successfully developed a modular Domain-Driven Design (DDD) exam results management system using Laravel with Blade components and Tailwind CSS, enabling seamless integration across different academic schools with enhanced calculation mechanisms for faster result processing"
      },
      {
        title: "Built a scalable and robust examination results calculation platform featuring reusable core components (TopicBased, ModuleBased, FixedDict) that streamlined the exam marking workflow and improved processing efficiency for academic institutions"
      },
      {
        title: "Implemented a comprehensive results management system with responsive frontend using Laravel backend architecture, Blade templating, and Tailwind CSS styling, providing flexible module deployments and establishing foundation for future-proof features including alumni access and mobile integration"
      }
    ],
    image: erms,
    // link :"https://stag-myimu.imu.edu.my/school-administration/time-table"

  }
];

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const [isInView, setIsInView] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -15% 0px'
      }
    );

    const element = document.querySelector('.card');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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

                {/* Remove lg:grid and use flex-col for vertical stacking */}
                <div className="flex flex-col gap-8">
                  <motion.div
                    // Remove grid-specific padding
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

                  {/* Move image below the details/results */}
                  <motion.div
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-xl shadow-xl object-cover"
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