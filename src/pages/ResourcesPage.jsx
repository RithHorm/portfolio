import { InteractiveHoverButton } from "@/components/ui/magicui/interactive-hover-button";
import { HoverEffect } from "@/components/ui/uis/card-hover-effect";
import { BlurFade } from "@/components/ui/magicui/blur-fade";
import { Link } from "react-router-dom";
// data
import learningResources from "@/components/data/learningresource";
const ResourcesPage = () => {
  return (
    <BlurFade duration={0.4}>
      <div className="mt-2 mb-20">
        <Link to="/" smooth>
          <InteractiveHoverButton className="text-white">
            Back
          </InteractiveHoverButton>
        </Link>
        <div className="mt-10">
          <header>
            <h3 className="text-lg md:text-2xl font-montserrat font-semibold mb-4">
              Learning Resources
            </h3>
            <h5 className="">
              Im a self learner i learn most of the things via internet. These
              are the resources that I've taken.
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
      </div>
    </BlurFade>
  );
};

export default ResourcesPage;
