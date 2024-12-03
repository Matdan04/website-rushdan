"use client";
import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLinks = [
  {
    name: "Github",
    url: "https://github.com/Matdan04",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/mohd-rushdan-ashraf-mohd-isha-952270278/",
  },
];
export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/20 py-6 text-sm flex flex-col gap-8 items-center md:flex-row md:justify-between">
          <div className="text-white/40">
            &copy; 2024. All rights reserved by Rushdan Ashraf.
          </div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.name}</span>
                <ArrowUpRightIcon className="size-4" color="white" />
              </Link>
            ))}
          </nav>
        </div>
        
      </div>
    </footer>
  );
};
