import { InteractiveHoverButton } from "@/components/ui/magicui/interactive-hover-button";
import { HoverEffect } from "@/components/ui/uis/card-hover-effect";
import { BlurFade } from "@/components/ui/magicui/blur-fade";
import { Link } from "react-router-dom";
import projects from "@/components/data/project";
const ProjectsPage = () => {
  return (
    <BlurFade duration={0.4}>
      <div className="mt-2 pb-20">
        <Link to="/">
          <InteractiveHoverButton className="text-white mb-6">
            Back
          </InteractiveHoverButton>
        </Link>
        <div>
          <header>
            <h3 className="text-lg md:text-2xl font-montserrat font-semibold">
              My Projects
            </h3>
            <p className="mt-4">
              Discover All My Project that I've built myself as well as school
              projects.
            </p>
          </header>
          <HoverEffect
            items={projects}
            type="project"
            // limit={2}
            linkType="internal"
            getLink={(item) => `/projects/${item.id}`}
            className="mt-8"
          />
        </div>
      </div>
    </BlurFade>
  );
};

export default ProjectsPage;
