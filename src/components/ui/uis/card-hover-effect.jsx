import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
  items = [],
  className,
  type = "project", // 'project' or 'video'
  limit = null,
  // linkType = "internal", // 'internal' or 'external'
  // getLink = (item) => `/projects/${item.id}`,
  getLink = (item) => (type === "video" ? item.link : `/projects/${item.id}`),
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-2 pt-8 pb-6",
        className
      )}
    >
      {displayItems.map((item, idx) => {
        const isVideo = type === "video"; // Determine if it's a video
        const Wrapper = isVideo ? "a" : Link;

        const linkProps = isVideo
          ? {
              href: getLink(item),
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {
              to: getLink(item),
            };

        return (
          <Wrapper key={item.id} {...linkProps}>
            <div
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-[#333333] dark:bg-slate-800/[0.8] block rounded-md"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>

              <article className="relative z-10 border border-[#6b6b6b] bg-black rounded-md overflow-hidden p-4 min-h-[380px]">
                <img
                  src={item.thumbnail || item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-3 ps-3 font-montserrat text-white py-4">
                  <span className="text-lg">{item.title}</span>

                  {type === "project" && (
                    <>
                      <h4 className="mt-2 text-md">Technologies used</h4>
                      <div className="mt-4 flex gap-2 flex-wrap gap-y-4">
                        {item.technology?.slice(0, 5).map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 rounded-3xl bg-[#222222] text-white text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                  {type === "video" && (
                    <>
                      <div className="mt-4 flex gap-2 flex-wrap gap-y-4">
                        {item.technology?.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="mt-2 px-4 py-2 rounded-3xl bg-[#222222] text-white text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </article>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
};
