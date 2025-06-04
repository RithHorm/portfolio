import { Link } from "react-router-dom";

import { HoverEffect } from "./ui/uis/card-hover-effect";
import { ShimmerButton } from "./ui/magicui/shimmer-button";
import { BlurFade } from "./ui/magicui/blur-fade";
import learningResources from "./data/learningresource";
const StudyResources = () => {
  return (
    <div className="mt-10 ">
      <div>
        <header>
          <h3 className="text-lg md:text-2xl font-montserrat font-semibold mb-4">
            Learning Resources
          </h3>
          <h5 className="">
            I'm a self-learner I learn most of the things through internet.
            These are the resources that I've taken.
          </h5>
        </header>
      </div>
      <HoverEffect
        items={learningResources}
        type="video"
        limit={4}
        linkType="external"
        className="mt-8"
        getLink={(item) => item.youtubeUrl}
      />
      {/* <BlurFade duration={0.4}> */}
      <Link to="/resources" className="flex justify-center items-center mt-4">
        <ShimmerButton className="px-8 shadow-2xl ">
          View All Resources
        </ShimmerButton>
      </Link>
      {/* </BlurFade> */}
    </div>
  );
};

export default StudyResources;
