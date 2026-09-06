import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import "./redesign.css";
import "./experience.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Rushdan Ashraf — Product & Senior Full-Stack Engineer",
  description: "Product and senior full-stack engineer building scalable, secure web platforms, AI-driven systems, and enterprise integrations.",
  openGraph: {
    title: "Rushdan Ashraf — Product & Senior Full-Stack Engineer",
    description: "Scalable products · AI systems · Enterprise platforms",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushdan Ashraf — Product & Senior Full-Stack Engineer",
    description: "Scalable products · AI systems · Enterprise platforms",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
