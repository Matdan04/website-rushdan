import Marquee from "react-fast-marquee";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User-friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="overflow-hidden">
      {" "}
      {/* Changed from overflow-x-clip */}
      <section className="relative py-6 sm:py-8 md:py-10">
        <div className="container mx-auto">
          <div className="relative w-[calc(100%+2rem)] -mx-4 sm:w-[calc(100%+4rem)] sm:-mx-8 md:w-[calc(100%+6rem)] md:-mx-12 lg:w-[calc(100%+8rem)] lg:-mx-16">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/80 via-sky-400/70 to-emerald-300/80 rounded-lg blur-sm" />

              {/* Main Content */}
              <div
                className="relative bg-gradient-to-r from-emerald-300/80 via-sky-400/70 to-emerald-300/80 
                rounded-lg shadow-lg hover:shadow-glow transition-all duration-700 
                backdrop-blur-sm backdrop-filter"
              >
                <Marquee
                  speed={40}
                  gradient={true}
                  gradientColor="#000000"
                  gradientWidth={100}
                  pauseOnHover={true}
                  className="h-14 flex items-center" // Added fixed height and centered items
                >
                  {words.map((word, index) => (
                    <div
                      key={`${word}-${index}`}
                      className="inline-flex items-center gap-2 px-4
                        transition-all duration-300 hover:scale-105 group/item"
                    >
                      <span
                        className="text-gray-800 uppercase font-bold 
                        text-xs sm:text-sm md:text-base 
                        transition-colors duration-300 
                        group-hover/item:text-white whitespace-nowrap"
                      >
                        {word}
                      </span>
                      <StarIcon
                        className={twMerge(
                          "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6",
                          "text-gray-800 group-hover/item:text-white",
                          "transition-all duration-300",
                          "animate-pulse group-hover/item:animate-spin"
                        )}
                      />
                    </div>
                  ))}
                </Marquee>

                {/* Enhanced Glow Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-sky-500/20 to-emerald-400/20 
                  rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
