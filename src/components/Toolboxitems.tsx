import Marquee from 'react-fast-marquee';
import { TechIcon } from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
  speed = 20,
  direction = "normal",
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
  speed?: number;
  direction?: "normal" | "reverse";
}) => {
  return (
    <Marquee
      className={twMerge("overflow-hidden", className)}
      speed={speed}
      direction={direction === "normal" ? "left" : "right"}
      pauseOnHover
      gradient={false}
    >
      {items.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className="inline-flex items-center gap-4 py-2 px-3 mx-3 outline outline-2 outline-white/10 
                     rounded-lg hover:outline-white/20 select-none transition-all duration-300
                     hover:bg-white/5"
        >
          <TechIcon component={item.iconType} />
          <span className="font-semibold whitespace-nowrap">{item.title}</span>
        </div>
      ))}
    </Marquee>
  );
};