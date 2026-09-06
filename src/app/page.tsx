"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiLayers, FiMapPin, FiSmartphone } from "react-icons/fi";
import profile from "@/assets/images/rushdan.jpeg";
import teis from "@/assets/images/TEIS.jpg";
import myimu from "@/assets/images/MyIMU.png";
import dashboard from "@/assets/images/MyIMUDashboard.png";
import erms from "@/assets/images/erms.png";

type Project = { company:string; year:string; title:string; summary:string; image:StaticImageData; link?:string; tags:string[] };
const projects:Project[]=[
  {company:"IMU",year:"2025",title:"MYIMU Administrator Dashboard",summary:"A centralized workspace for managing 3,700+ student attendance records and academic timetables.",image:dashboard,link:"https://stag-myimu.imu.edu.my/school-administration/time-table",tags:["Next.js","TypeScript","Microsoft AD"]},
  {company:"IMU",year:"2024",title:"MYIMU Web Application",summary:"A secure university portal with role-based access, responsive dashboards, and protected backend APIs.",image:myimu,link:"https://myimu.imu.edu.my",tags:["Next.js","Flask","Tailwind"]},
  {company:"IMU",year:"2025",title:"Exam Result Management 2.0",summary:"A modular, scalable results platform designed around reusable academic workflows and faster calculations.",image:erms,tags:["Laravel","DDD","Blade"]},
  {company:"Impressive Communications",year:"2023",title:"TNB Tools & Equipment System",summary:"Cross-platform tools management with Maximo integration, built for dependable field use.",image:teis,tags:["React","Flutter","Maximo API"]},
];
const tools=["JavaScript","TypeScript","React","Next.js","Node.js","Python","Spring Boot","PostgreSQL","Docker","Azure DevOps","Databricks","AI Agents"];
const experience=[
  {period:"May 2026 — Present",role:"Senior Full Stack Engineer",company:"Hatchlabs",copy:"Building full-stack, AI-driven systems for JCORP and owning delivery from requirements to production. Leading GitHub Enterprise migrations, PostgreSQL modernization, Docker infrastructure, REST APIs, authentication, CI/CD, and production troubleshooting.",tags:["Next.js","Node.js","Spring Boot","PostgreSQL","GitHub Actions"]},
  {period:"Aug 2024 — Dec 2025",role:"Full Stack Engineer",company:"IMU University",copy:"Developed secure university systems and dashboards supporting academic operations, data management, and staff productivity—from Flask APIs and Microsoft AD authentication to MySQL workflows, Laravel systems, and Linux deployment.",tags:["Python","Flask","Next.js","Laravel","MySQL"]},
  {period:"Sep 2023 — Aug 2024",role:"Software Developer",company:"Impressive Communications",copy:"Built enterprise web and mobile applications integrated with IBM Maximo, including real-time REST workflows, client configuration, testing, troubleshooting, and end-user enablement.",tags:["React","Flutter","IBM Maximo","REST APIs"]},
  {period:"Feb 2021 — Aug 2023",role:"Lab Technologist & Application Developer",company:"University of Malaya",copy:"Spearheaded a custom web platform for dental-lab data recording, taking the project from concept to deployment and improving operational accuracy and efficiency.",tags:["React","Node.js","MySQL","Tailwind CSS"]},
];
const reveal={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.18},transition:{duration:.55}};

export default function Home(){return <main className="site-shell">
  <nav className="floating-nav" aria-label="Main navigation"><Link href="#home" className="brand">Rushdan Ashraf<span>.</span></Link><div className="nav-links"><Link href="#work">Work</Link><Link href="#experience">Experience</Link><Link href="#about">About</Link><Link href="#contact">Contact</Link></div></nav>

  <section id="home" className="hero container"><div className="spotlight spotlight-one"/><div className="spotlight spotlight-two"/><div className="hero-grid"/>
    <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}><div className="availability"><i/> Available for new opportunities</div><p className="eyebrow">Product engineer · Senior full-stack engineer</p><h1>I engineer products that are <span>scalable, secure, and human.</span></h1><p className="hero-lede">I’m Rushdan Ashraf, building enterprise platforms, AI-driven systems, and polished digital experiences end to end.</p><div className="hero-actions"><Link className="button button-primary" href="#work">Explore my work <FiArrowUpRight/></Link><Link className="button button-ghost" href="#contact">Let’s connect</Link></div></motion.div>
    <motion.div className="portrait-card" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15}}><div className="portrait-glow"/><Image src={profile} alt="Rushdan Ashraf" priority/><div className="portrait-caption"><span>Currently</span><strong>Building useful software</strong></div></motion.div>
  </section>

  <section id="about" className="section container"><motion.div className="section-intro" {...reveal}><p className="eyebrow">About me</p><h2>Engineering with ownership.</h2><p>I build scalable, secure, user-centric products across education, healthcare, and enterprise environments—translating business needs into architecture, interfaces, integrations, and reliable production systems.</p></motion.div>
    <div className="bento">
      <motion.article className="bento-card bento-main" {...reveal}><div><span className="card-index">01 / PROFILE</span><h3>Full-stack perspective,<br/>product-minded delivery.</h3><p>I work across the full lifecycle: shaping interfaces, designing APIs, integrating systems, and supporting products after launch.</p></div><div className="metric-row"><div><strong>3+</strong><span>Years building</span></div><div><strong>4</strong><span>Featured systems</span></div><div><strong>3.7k+</strong><span>Records managed</span></div></div></motion.article>
      <motion.article className="bento-card signal-card" {...reveal}><span className="card-icon"><FiMapPin/></span><div><span className="card-index">BASED IN</span><h3>Kuala Lumpur,<br/>Malaysia</h3></div><div className="map-lines"/></motion.article>
      <motion.article className="bento-card service-card" {...reveal}><span className="card-index">WHAT I DO</span><div className="service"><FiCode/><span><b>Web applications</b><small>Responsive, scalable, secure</small></span></div><div className="service"><FiSmartphone/><span><b>Mobile products</b><small>Cross-platform with Flutter</small></span></div><div className="service"><FiLayers/><span><b>System integration</b><small>APIs and enterprise workflows</small></span></div></motion.article>
    </div>
  </section>

  <section id="experience" className="section container"><motion.div className="section-intro split" {...reveal}><div><p className="eyebrow">Professional experience</p><h2>From operations to product engineering.</h2></div><p>A career shaped by hands-on delivery, cross-functional ownership, and increasingly complex systems.</p></motion.div><div className="timeline">{experience.map((item,index)=><motion.article className="timeline-item" key={item.company} {...reveal}><div className="timeline-marker"><span>{String(index+1).padStart(2,"0")}</span></div><div className="timeline-period">{item.period}</div><div className="timeline-body"><div className="timeline-title"><h3>{item.role}</h3><strong>{item.company}</strong></div><p>{item.copy}</p><div className="tag-row">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></motion.article>)}</div></section>

  <section id="work" className="section container"><motion.div className="section-intro split" {...reveal}><div><p className="eyebrow">Selected work</p><h2>Built for the real world.</h2></div><p>Production projects where product clarity, system reliability, and measurable outcomes mattered.</p></motion.div>
    <div className="project-grid">{projects.map((project,index)=><motion.article className="project-card" key={project.title} {...reveal}><div className="project-visual"><Image src={project.image} alt={`${project.title} interface`} placeholder="blur"/><span className="project-number">0{index+1}</span></div><div className="project-content"><div className="project-meta"><span>{project.company}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="project-footer"><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{project.link&&<Link href={project.link} target="_blank" aria-label={`Open ${project.title}`}><FiArrowUpRight/></Link>}</div></div></motion.article>)}</div>
  </section>

  <section className="section container"><motion.div className="toolbox" {...reveal}><div><p className="eyebrow">Toolkit</p><h2>Technologies I trust.</h2></div><div className="tool-list">{tools.map((tool,index)=><span key={tool}><b>{String(index+1).padStart(2,"0")}</b>{tool}</span>)}</div></motion.div></section>

  <section id="contact" className="section contact-section"><div className="container"><motion.div className="contact-card" {...reveal}><div className="contact-grid"/><p className="eyebrow">Let’s work together</p><h2>Have an idea worth<br/><span>building well?</span></h2><p>Tell me what you’re working on. I’d love to hear the problem, the ambition, and where I can help.</p><a className="button button-light" href="https://wa.me/60143477252?text=Hi%20Rushdan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank">Start a conversation <FiArrowUpRight/></a></motion.div>
    <footer><span>© {new Date().getFullYear()} Rushdan Ashraf</span><div><Link href="https://github.com/Matdan04" target="_blank">GitHub</Link><Link href="https://www.linkedin.com/in/rushdanashraf/" target="_blank">LinkedIn</Link></div></footer></div></section>
  </main>}
