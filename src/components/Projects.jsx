import { Link } from "react-router-dom";
import project1 from "@/assets/img/project1.png";

// component
import { HoverEffect } from "./ui/uis/card-hover-effect";
import { ShimmerButton } from "./ui/magicui/shimmer-button";
import { BlurFade } from "./ui/magicui/blur-fade";
// data
import projects from "./data/project";
const Projects = () => {
  return (
    <div className="mt-10" id="project-section">
      <BlurFade duration={0.4}>
        <div>
          <header>
            <h3 className="text-lg mb-4 md:text-2xl font-montserrat font-semibold">
              My Latest Projects
            </h3>
            <p>Discover all the projects that I've built with passion.</p>
          </header>
          <HoverEffect
            items={projects}
            type="project"
            limit={2}
            linkType="internal"
            getLink={(item) => `/projects/${item.id}`}
          />
        </div>
      </BlurFade>
      <BlurFade duration={0.4}>
        <Link
          to="/projects"
          className="w-full flex justify-center items-center "
        >
          <ShimmerButton className="px-8 shadow-2xl">
            View All Projects
          </ShimmerButton>
        </Link>
      </BlurFade>
    </div>
  );
};

export default Projects;
