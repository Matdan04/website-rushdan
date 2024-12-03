import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": { 
            backgroundSize: "200% 200%",
            backgroundPosition: "left center"
          },
          "50%": { 
            backgroundSize: "200% 200%",
            backgroundPosition: "right center"
          },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 15s linear infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "scroll": "scroll 25s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "bounce-gentle": "bounce 2s ease-in-out infinite",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-shimmer": "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
      },
      scale: {
        "101": "1.01",
        "102": "1.02",
        "103": "1.03",
      },
      transitionDuration: {
        "700": "700ms",
      },
      blur: {
        "2xl": "40px",
        "3xl": "60px",
      },
      opacity: {
        "5": "0.05",
      },
      colors: {
        gray: {
          800: "rgb(31 41 55)",
          900: "rgb(17 24 39)",
        },
        emerald: {
          300: "rgb(110 231 183)",
          400: "rgb(52 211 153)",
          500: "rgb(16 185 129)",
        },
        sky: {
          400: "rgb(56 189 248)",
          500: "rgb(14 165 233)",
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(56, 189, 248, 0.5)',
        'glow-lg': '0 0 25px rgba(56, 189, 248, 0.5)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;