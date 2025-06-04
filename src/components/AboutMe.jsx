import { ShimmerButton } from "./ui/magicui/shimmer-button";
import { BlurFade } from "./ui/magicui/blur-fade";
import FadeContent from "./ui/reactbits/FadeContent/FadeContent";
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <div className="mt-2 md:mt-8">
      <div className="">
        <BlurFade delay={0.4}>
          <h3 className="font-semibold text-lg md:text-2xl font-montserrat">
            About Me
          </h3>
          <p className="line-clamp-4 my-4">
            I am a dedicated and detail-oriented student pursuing a Bachelor's
            degree in Information Technology at the Royal University of Phnom
            Penh, with an expected graduation in 2025. My academic journey has
            equipped me with a robust foundation in web development, information
            system analysis, and technical research. Through my coursework and
            hands-on projects, I have deepened my knowledge in key areas,
            including coding, frameworks, and data-driven problem-solving, which
            have significantly enhanced my educational experience and
            professional competence.
          </p>
        </BlurFade>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <Link to="/about">
            <ShimmerButton className="py-2 mb-4 md:mt-6 ">
              Read More
            </ShimmerButton>
          </Link>
        </FadeContent>
      </div>
    </div>
  );
};

export default AboutMe;
