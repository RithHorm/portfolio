import { InteractiveHoverButton } from "@/components/ui/magicui/interactive-hover-button";
import { Timeline } from "@/components/ui/uis/timeline";
import { BlurFade } from "@/components/ui/magicui/blur-fade";
import { Link } from "react-router-dom";

import { Facebook, Instagram, Github } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

import { cards } from "@/components/data/grid-cards";
import { timelineData } from "@/components/data/timeline";
const AboutMePage = () => {
  return (
    <BlurFade duration={0.4}>
      <div className="mt-2 pb-36">
        <Link to="/">
          <InteractiveHoverButton className="text-white">
            Back
          </InteractiveHoverButton>
        </Link>

        <header className="mt-8">
          <h2 className="font-semibold text-2xl font-montserrat mb-2">
            About Me
          </h2>
          <p>Learn more about me</p>
        </header>

        <section className="mt-18 ">
          <div className="flex justify-center items-center md:flex-row  gap-4 md:gap-10 mb-10">
            <article className=" basis-[100%] md:basis-[80%]">
              <div className="grid grid-cols-8 gap-4">
                {cards.map((card, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-xl ${card.gridSpan}`}
                  >
                    <img
                      src={card.thumbnail}
                      alt={`Image ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </article>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <aside className="basis-[30%]">
              <h1 className="text-2xl text-white font-montserrat font-semibold">
                I'm Horm Sovannarith
              </h1>
            </aside>
            <article className="basis-[70%]">
              <p className="my- leading-7">
                I am a dedicated and detail-oriented student pursuing a
                Bachelor's degree in Information Technology at the{" "}
                <span className="hover:underline">
                  Royal University of Phnom Penh
                </span>{" "}
                , with an expected graduation in 2025. My academic journey has
                equipped me with a robust foundation in web development,
                information system analysis, and technical research. Through my
                coursework and hands-on projects, I have deepened my knowledge
                in key areas, including coding, frameworks, and data-driven
                problem-solving, which have significantly enhanced my
                educational experience and professional competence.
              </p>
            </article>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-12 mb-12">
            <aside className="basis-[30%]">
              <h1 className="text-2xl text-white font-montserrat font-semibold">
                My Education
              </h1>
            </aside>
            <article className="basis-[100%]">
              <Timeline data={timelineData} />
            </article>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <aside className="basis-[30%]">
              <h1 className="text-2xl text-white font-montserrat font-semibold">
                Wanna Connect?
              </h1>
            </aside>
            <article className="basis-[70%]">
              <p>Find my social media down below.</p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <a href="https://web.facebook.com/rith.horm.75" target="_blank">
                  <button className="flex gap-2 text-white w-[170px] md:w-[180px] px-8 py-2 rounded-md transition duration-300 border border-[#454545] hover:bg-[#454545]">
                    <Facebook /> Facebook
                  </button>
                </a>
                <a href="https://web.facebook.com/rith.horm.75" target="_blank">
                  <button className="flex gap-2 text-white w-[170px] md:w-[180px] px-8 py-2 rounded-md transition duration-300 border border-[#454545] hover:bg-[#454545]">
                    <Instagram /> Instagram
                  </button>
                </a>
                <a href="https://github.com/Whisuuu" target="_blank">
                  <button className="flex gap-2 text-white w-[170px] md:w-[180px] px-8 py-2 rounded-md transition duration-300 border border-[#454545] hover:bg-[#454545]">
                    <Github /> GitHub
                  </button>
                </a>
                <a href="https://t.me/rithhorm" target="_blank">
                  <button className="flex gap-2 text-white w-[170px] md:w-[180px] px-8 py-2 rounded-md transition duration-300 border border-[#454545] hover:bg-[#454545]">
                    <FaTelegramPlane className="h-6" /> Telegram
                  </button>
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </BlurFade>
  );
};

export default AboutMePage;
