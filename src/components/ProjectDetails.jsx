import { useParams } from "react-router-dom";
import projects from "./data/project";
import { InteractiveHoverButton } from "./ui/magicui/interactive-hover-button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((items) => items.id === parseInt(id));
  return (
    <div className="mb-20">
      <Link to="/" smooth>
        <InteractiveHoverButton className="text-white">
          Back
        </InteractiveHoverButton>
      </Link>
      <header className="mt-10">
        <h1 className="text-white text-2xl font-semibold tracking-wider font-montserrat">
          {project.title}
        </h1>
        <span>Technologies used</span>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technology.map((tech, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-3xl bg-[#222222] text-white text-xs"
            >
              {tech}
            </div>
          ))}
        </div>
      </header>
      <div className="mt-6">
        <div>
          <img
            src={project.img}
            alt="project-img"
            className="w-full object-cover"
          />
        </div>
        <a href={project.url} target="_blank">
          <button className="flex px-6 py-4 bg-[#353535] text-white rounded-md mt-6">
            Live Demo <ArrowUpRight />
          </button>
        </a>
      </div>
      {project.description && (
        <div className="mt-6  text-sm space-y-4">
          {project.description.map((item, index) => {
            if (item.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-xl font-semibold text-white mt-4"
                >
                  {item.content}
                </h2>
              );
            } else if (item.type === "paragraph") {
              return <p key={index}>{item.content}</p>;
            } else if (item.type === "list") {
              return (
                <ul key={index} className="list-disc list-inside space-y-1">
                  {item.content.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
