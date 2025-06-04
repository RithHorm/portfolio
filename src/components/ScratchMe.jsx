import { ScratchToReveal } from "./ui/magicui/scratch-to-reveal";
import { Link } from "react-router-dom";

const ScratchMe = () => {
  return (
    <div>
      <header className="mt-10 mb-12 text-4xl md:text-5xl">
        <h2 className="text-center space tracking-wider font-montserrat font-semibold">
          Scratch Me
        </h2>
      </header>
      <div className="flex justify-center items-center">
        <a href="https://t.me/rithhorm">
          <ScratchToReveal
            width={300}
            height={300}
            minScratchPercentage={50}
            className="flex justify-center items-center text-3xl font-semibold"
          >
            Hire Me
          </ScratchToReveal>
        </a>
      </div>
    </div>
  );
};

export default ScratchMe;
