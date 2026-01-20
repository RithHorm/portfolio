import { Briefcase } from "lucide-react";

const otherExperiences = [
  {
    title: "AI Testing Assistant (Short-Term Work Experience)",
    subtitle: "KG Software Solution •Oct 2025 - Present",
    points: [
      "Tested AI-generated responses by creating and evaluating prompts against expected outputs",
      "Verified accuracy, relevance, and consistency of AI responses based on predefined criteria",
      "Prepared daily testing reports documenting prompts, AI outputs, and accuracy results",
      "Provided feedback to improve response quality and overall system behavior",
      "Followed structured testing guidelines and documented results clearly",
    ],
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    title: "Team Leader (Department: Loss Prevention)",
    subtitle: "Youpin Shopping Mall • Jul 2025 – Oct 2025",
    points: [
      "Supervised a small team of 5-6 members, scheduling shifts and ensuring smooth daily operations",
      "Monitored attendance, tracked task completion, and coordinated workflow to maintain efficiency",
      "Developed leadership, organizational, and problem-solving skills in a fast-paced environment",
      "Gained experience managing responsibilities, deadlines, and team communication—skills applicable to IT project management and collaborative technical work",
    ],
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
];

const WorkExperience = () => {
  return (
    <section className="mt-10">
      <header>
        <h3 className="text-lg md:text-2xl font-montserrat font-semibold mb-4">
          Work Experience
        </h3>
        <h5>
          Additional work experience demonstrating responsibility, teamwork, and
          professional problem-solving.
        </h5>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
        {otherExperiences.map((exp, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              border border-white/10
              bg-black
              p-4 md:p-5
              transition
              hover:border-white/30
              hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]
            "
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-1 w-10 h-10 rounded-full bg-white/5">
                {exp.icon}
              </div>
              <div>
                <h3 className="text-md md:text-lg font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-white/60">{exp.subtitle}</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm md:text-base text-white/70 list-disc pl-5">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
