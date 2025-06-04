import React from "react";
import { AnimatedCircularProgressBar } from "./ui/magicui/animated-circular-progress-bar";
import { Marquee } from "./ui/magicui/marquee";
import { BlurFade } from "./ui/magicui/blur-fade";

// data
import techStack from "./data/techStack";
const Slider = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-2 md:space-y-10 shadow-lg mt-12">
      {/* About Section */}

      <BlurFade duration={0.5}>
        <section className="">
          <h2 className="text-lg md:text-2xl font-semibold mb-4 font-montserrat ">
            Skills
          </h2>
          <p>Showcasing my knowledge in each technologies.</p>
        </section>
      </BlurFade>

      {/* Marquee Section */}
      <BlurFade duration={2}>
        <div className="py-6 space-y-6 rounded-2xl relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />

          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />
          {/* First row: Left to Right */}
          <div className="relative rounded-xl overflow-hidden">
            <Marquee
              pauseOnHover
              className="[--duration:20s] text-xl font-semibold text-[#a1a1aa] dark:text-gray-200 "
            >
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col gap-2 md:gap-5 border border-[#6b6b6b] w-[200px] md:w-[250px] py-5 space-x-4 bg-[#222222] rounded-2xl"
                >
                  {/* Progress Bar inside each span */}
                  <AnimatedCircularProgressBar
                    value={tech.progress}
                    max={100}
                    min={0}
                    gaugePrimaryColor="#6b6b6b"
                    gaugeSecondaryColor="#000"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                  <div className="flex justify-center items-center gap-3 md:gap-5">
                    <img
                      src={tech.url}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <span className="text-[16px] md:text-lg">{tech.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Second row: Right to Left (reverse) */}
          <div className="rounded-xl">
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:20s] text-xl font-semibold text-[#a1a1aa]  dark:text-gray-200"
            >
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 md:gap-5 space-x-4 border rounded-2xl border-[#6b6b6b] w-[200px] md:w-[250px] py-5 bg-[#222222]"
                >
                  {/* Progress Bar inside each span */}
                  <AnimatedCircularProgressBar
                    value={tech.progress}
                    max={100}
                    min={0}
                    gaugePrimaryColor="#6b6b6b"
                    gaugeSecondaryColor="#000"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                  <div className="flex justify-center items-center gap-3 md:gap-5">
                    <img
                      src={tech.url}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <span className="text-[16px] md:text-lg">{tech.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Slider;
